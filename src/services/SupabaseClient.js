// src/supabaseClient.js
// import axios from 'axios';
import { createClient } from '@supabase/supabase-js';


// Ganti dengan Project URL dan Public (anon) Key Anda dari langkah 2
const supabaseUrl = "https://mgvbhuwbhytoomalbpdb.supabase.co"; // atau process.env.REACT_APP_SUPABASE_URL jika tidak pakai Vite
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndmJodXdiaHl0b29tYWxicGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzI0ODQsImV4cCI6MjA2NjM0ODQ4NH0.PrmnVRSkk8pVyqoJThiRDmG-S73_GV9BHpHpYcZyNKM"; // atau process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is missing. Please set your environment variables.");
  //throw new Error("Supabase URL or Anon Key is missing. Please set your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);