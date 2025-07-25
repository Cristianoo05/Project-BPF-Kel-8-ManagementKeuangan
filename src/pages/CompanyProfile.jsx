import React, { useState, useEffect } from 'react';
import { supabase } from '../services/SupabaseClient'; // Pastikan path ini benar
import Loading from '../components/Loading'; // Komponen loading Anda
import { FaBuilding, FaSave } from 'react-icons/fa'; // Icons

export default function CompanyProfile() {
  const [profile, setProfile] = useState({
    company_name: '',
    address: '',
    city: '',
    province: '',
    zip_code: '',
    phone_number: '',
    email: '',
    website: '',
    description: '',
    logo_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  // currentUserRole tidak lagi digunakan, jadi bisa dihapus
  // const [currentUserRole, setCurrentUserRole] = useState(null);

  // ID dari profil perusahaan (jika hanya ada satu baris, biasanya ID pertama yang ditemukan)
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    // fetchCurrentUserRole(); // Tidak perlu lagi memanggil ini
    fetchCompanyProfile(); // Langsung panggil fetchCompanyProfile
  }, []);

  // useEffect untuk currentUserRole tidak diperlukan lagi
  // useEffect(() => {
  //   if (currentUserRole !== null) {
  //     fetchCompanyProfile();
  //   }
  // }, [currentUserRole]);

  // Fungsi fetchCurrentUserRole tidak diperlukan lagi
  // const fetchCurrentUserRole = async () => {
  //   const { data: { user } } = await supabase.auth.getUser();
  //   if (user) {
  //     const { data: profile, error } = await supabase
  //       .from('profiles')
  //       .select('role')
  //       .eq('id', user.id)
  //       .single();
  //     if (error) {
  //       console.error('Error fetching current user role:', error.message);
  //       setCurrentUserRole('user');
  //     } else {
  //       setCurrentUserRole(profile.role);
  //     }
  //   } else {
  //     setCurrentUserRole('guest');
  //   }
  // };

  const fetchCompanyProfile = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const { data, error } = await supabase
        .from('company_profiles')
        .select('*')
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
        setProfileId(data.id);
      } else {
        setProfile({
          company_name: '', address: '', city: '', province: '',
          zip_code: '', phone_number: '', email: '', website: '',
          description: '', logo_url: ''
        });
        setProfileId(null);
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching company profile:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    // Pengecekan role admin dihapus dari sini. Supabase RLS akan menangani otorisasi.
    // if (currentUserRole !== 'admin') {
    //   setError('You do not have permission to update company profile.');
    //   setLoading(false);
    //   return;
    // }

    try {
      let data, error;
      if (profileId) {
        // Update data yang sudah ada
        ({ data, error } = await supabase
          .from('company_profiles')
          .update(profile)
          .eq('id', profileId)
          .select());
      } else {
        // Insert data baru (jika belum ada)
        ({ data, error } = await supabase
          .from('company_profiles')
          .insert(profile)
          .select());
        if (data && data.length > 0) {
            setProfileId(data[0].id);
        }
      }

      if (error) throw error;

      setMessage('Company profile updated successfully!');
    } catch (err) {
      setError(err.message);
      console.error('Error saving company profile:', err.message);
    } finally {
      setLoading(false);
    }
  };

  // Kondisi loading/error awal
  // currentUserRole === null dihapus dari kondisi ini
  if (loading) return <Loading />;
  if (error && profileId === null) return <div className="text-red-500 p-4">Error: {error}</div>;

  // Variabel isDisabled dihapus atau disederhanakan jika Anda ingin input selalu aktif
  const isDisabled = false; // Sekarang input tidak pernah disabled oleh role

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-poppins-extrabold text-gray-800 mb-6 flex items-center space-x-3">
        <FaBuilding className="text-Biruneon" />
        <span>Company Profile</span>
      </h1>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" id="company_name" name="company_name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
                value={profile.company_name} onChange={handleChange} required disabled={isDisabled} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
                value={profile.email} onChange={handleChange} disabled={isDisabled} />
            </div>
            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone_number" name="phone_number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
                value={profile.phone_number} onChange={handleChange} disabled={isDisabled} />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
              <input type="url" id="website" name="website"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
                value={profile.website} onChange={handleChange} disabled={isDisabled} />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea id="address" name="address" rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
              value={profile.address} onChange={handleChange} disabled={isDisabled}></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
                value={profile.city} onChange={handleChange} disabled={isDisabled} />
            </div>
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province</label>
              <input type="text" id="province" name="province"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
                value={profile.province} onChange={handleChange} disabled={isDisabled} />
            </div>
            <div>
              <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input type="text" id="zip_code" name="zip_code"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
                value={profile.zip_code} onChange={handleChange} disabled={isDisabled} />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
              value={profile.description} onChange={handleChange} disabled={isDisabled}></textarea>
          </div>

          <div>
            <label htmlFor="logo_url" className="block text-sm font-medium text-gray-700">Logo URL</label>
            <input type="url" id="logo_url" name="logo_url"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon"
              value={profile.logo_url} onChange={handleChange} disabled={isDisabled} />
              {profile.logo_url && (
                <img src={profile.logo_url} alt="Company Logo" className="mt-2 h-20 object-contain" />
              )}
          </div>

          {/* Tombol Save Profile akan selalu terlihat, tidak bergantung pada role */}
          <button
            type="submit"
            className="w-full bg-Biruneon text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Biruneon disabled:opacity-50 flex items-center justify-center space-x-2"
            disabled={loading}
          >
            <FaSave />
            <span>{loading ? 'Saving...' : 'Save Profile'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}