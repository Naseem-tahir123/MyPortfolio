import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1"; // Replace with your backend API base URL

// Create a base Axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Function to fetch skills
export const getSkills = async () => {
    const response = await api.get('/skills');
    return response.data;
};


// Function to fetch projects
export const getProjects = async () => {
    const response = await api.get('/projects');
    return response.data;
};

// Function to ask question to AI Assistant
export const askAI = async (question, history = []) => {
    const response = await api.post('/chat', {
        question,
        history
    });
    return response.data;
}

export default api;
