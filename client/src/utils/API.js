import axios from "axios";

export default {
    saveNewUser: function (userData) {
        console.log("new User entered into database", userData);
        return axios.post ("/api/user", userData);
    }
}