import axios from "axios"
const DomainUrl = axios.create({
 baseURL : "https://net-clonee.herokuapp.com/"
})

export default DomainUrl;
