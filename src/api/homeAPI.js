import axiosClient from "./axiosClient.js";

const homeAPI = {
    home() {
        const url = "/home";
        return axiosClient.get(url);
    }
}

export default homeAPI;