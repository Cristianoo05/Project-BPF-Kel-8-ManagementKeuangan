import axios from 'axios'

const API_URL = "https://mgvbhuwbhytoomalbpdb.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndmJodXdiaHl0b29tYWxicGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzI0ODQsImV4cCI6MjA2NjM0ODQ4NH0.PrmnVRSkk8pVyqoJThiRDmG-S73_GV9BHpHpYcZyNKM"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },
    async editNote(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`,data,  { headers })
        return response.data
    }
}
