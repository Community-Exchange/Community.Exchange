import axios from "axios";

export default {
    saveNewUser: (userData) => {
        console.log("new User entered into database", userData);
        return axios.post ("/api/user", userData);
    },

    getUser: (userId) => {
        console.log("Retrieving info from db", userId);
        return axios.get("/api/user/" + userId);
    },

    saveExchange: (exchangeInfo) => {
        console.log("Saving exchange to db", exchangeInfo);
        return axios.post("/api/exchanges", exchangeInfo);
    }
}