import axios from "axios";

export default {
    saveNewUser: (userData) => {
        console.log("new User entered into database", userData);
        return axios.post ("/api/user", userData);
    },

    saveExchange: (exchangeInfo) => {
        console.log("Saving exchange to db", exchangeInfo);
        return axios.post("/api/exchanges", exchangeInfo);
    },

    getUser: (userId) => {
        console.log("Retrieving info from db", userId);
        return axios.get("/api/user/" + userId);
    },

    getExchanges: (userId) => {
        console.log("Getting, exchanges from db for", userId);
        return axios.get("/api/exchanges/" + userId)
    }

    
}