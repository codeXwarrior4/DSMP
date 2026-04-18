import axios from "axios";

// 🔥 Base URL (change if needed)
const API = axios.create({
    baseURL: "http://localhost:5000/api", // your backend
});

// ✅ ANALYZE MEDIA FUNCTION (FIXED)
export const analyzeMedia = async(file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await API.post("/analyze", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.error("API ERROR:", error.response || error.message);
        throw error;
    }
};