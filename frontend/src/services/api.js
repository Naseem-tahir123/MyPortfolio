import axios from 'axios';

// Create a base Axios instance
const api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
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

export default api;
