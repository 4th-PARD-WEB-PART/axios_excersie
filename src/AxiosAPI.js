import axios from "axios";

export const getUserData = async () => {
    try {
        const response = await axios.get("http://localhost:3001/users");

        return response;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

export const postUserData = async (data) => {
    try {
        const response = await axios.post("http://localhost:3001/users", data);

        return response;
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};

export const updateUserData = async (id, data) => {
    try {
        const response = await axios.put(`http://localhost:3001/users/${id}`, data);

        return response;
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/users/${id}`);

        return response;
    } catch (error) {
        console.error("Error deleting user data:", error);
        throw error;
    }
};