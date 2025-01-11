import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-ten-zeta.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;