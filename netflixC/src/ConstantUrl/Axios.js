import axios from "axios";

const GET__DATA = axios.create({
 baseURL: "https://api.themoviedb.org/3/"
})

export default GET__DATA;