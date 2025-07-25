import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Pastikan path ini benar
import Loading from '../components/Loading'; // Komponen loading Anda
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Icons

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUserRole, setCurrentUserRole] = useState(null); // Role user yang sedang login

  // State untuk form tambah/edit user
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // null = tambah, object = edit
  const [formFullName, setFormFullName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState(''); // Hanya untuk tambah, tidak diisi saat edit
  const [formRole, setFormRole] = useState('user'); // Default role

  useEffect(() => {
    fetchUsers();
    checkCurrentUserRole();
  }, []);

  const checkCurrentUserRole = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
      if (error) {
        console.error('Error fetching current user role:', error.message);
        setCurrentUserRole('user'); // Default ke user jika error
      } else {
        setCurrentUserRole(profile.role);
      }
    } else {
      setCurrentUserRole('guest'); // Jika tidak login
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      // Admin dapat melihat semua profil
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, email, role'); // Ambil email juga

      if (error) throw error;
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching users:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEditUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (editingUser) {
        // Logika EDIT USER
        const { data, error } = await supabase
          .from('profiles')
          .update({
            full_name: formFullName,
            role: formRole
            // Email tidak bisa diubah langsung via profiles, harus via auth.admin.updateUser
          })
          .eq('id', editingUser.id);

        if (error) throw error;
        alert('User updated successfully!');

      } else {
        // Logika TAMBAH USER (Register)
        // Note: Untuk menambahkan user dan role sekaligus,
        // Supabase Auth signUp hanya bisa email/password.
        // Role harus diatur di tabel profiles setelah signup,
        // atau via admin API (Auth admin method) jika Anda menjalankan dari server.
        // Untuk demo ini, kita akan pakai cara sederhana: signup dulu, lalu update profile.
        // Cara yang lebih aman: menggunakan Supabase Edge Functions atau admin API.

        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: formEmail,
          password: formPassword,
          options: {
            data: {
              full_name: formFullName // Akan masuk ke raw_user_meta_data
            }
          }
        });

        if (authError) throw authError;

        // Jika email verification diaktifkan, user belum tentu aktif.
        // Anda mungkin perlu memverifikasi email di dashboard Supabase jika ingin langsung aktif.
        // Trigger handle_new_user() di SQL akan menangani pembuatan profile.

        alert('User added successfully! Check email for verification.');
      }
      setShowForm(false);
      setEditingUser(null);
      resetForm();
      fetchUsers(); // Refresh daftar user
    } catch (err) {
      setError(err.message);
      console.error('Error adding/editing user:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }
    setLoading(true);
    setError('');
    try {
      // Supabase admin method untuk delete user (hanya bisa dari server atau Edge Function)
      // Kalau dari client (browser), ini tidak akan bekerja karena RLS
      // Anda perlu fungsi backend/edge function untuk ini.
      // Sebagai workaround untuk demo, kita hanya delete dari tabel profiles
      // Ini TIDAK menghapus user dari auth.users, hanya profilnya.
      // Untuk menghapus dari auth.users, Anda butuh: supabase.auth.admin.deleteUser(userId);
      // Yang hanya bisa diakses dari sisi server.

      // Asumsi: jika user tidak ada di profiles, maka dia tidak dianggap user terdaftar di app.
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

      if (error) throw error;
      alert('User deleted successfully!');
      fetchUsers();
    } catch (err) {
      setError(err.message);
      console.error('Error deleting user:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const startEditUser = (user) => {
    setEditingUser(user);
    setFormFullName(user.full_name);
    setFormEmail(user.email); // Email tidak bisa diedit via profiles, tapi ditampilkan
    setFormRole(user.role);
    setShowForm(true);
  };

  const resetForm = () => {
    setEditingUser(null);
    setFormFullName('');
    setFormEmail('');
    setFormPassword('');
    setFormRole('user');
  };

  if (loading && users.length === 0) return <Loading />;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  // Hanya admin yang bisa melihat dan mengelola user
  if (currentUserRole !== 'admin') {
    return (
      <div className="p-8 text-center text-red-500">
        You do not have permission to access this page. Only Admins can manage users.
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-poppins-extrabold text-gray-800 mb-6">User Management</h1>

      <button
        onClick={() => { setShowForm(true); resetForm(); }}
        className="bg-hijau text-white px-4 py-2 rounded-md mb-6 hover:bg-green-700 flex items-center space-x-2"
      >
        <FaPlus />
        <span>Add New User</span>
      </button>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">{editingUser ? 'Edit User' : 'Add User'}</h2>
          <form onSubmit={handleAddEditUser} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={formFullName}
                onChange={(e) => setFormFullName(e.target.value)}
                required
              />
            </div>
            {!editingUser && ( // Email dan Password hanya untuk tambah user
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    value={formPassword}
                    onChange={(e) => setFormPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={formRole}
                onChange={(e) => setFormRole(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-hijau text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
                disabled={loading}
              >
                {editingUser ? 'Update User' : 'Create User'}
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); resetForm(); setError(''); }}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        {users.length === 0 ? (
          <p className="text-gray-600">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.full_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td> {/* Tampilkan email */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => startEditUser(user)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}