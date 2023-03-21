import axios from "axios";


axios.defaults.headers.post['Content-Type']= 'application/json';
axios.defaults.headers.post['Accept']= 'application/json';
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-CSRF-TOKEN'] = window.csrf_token;
// axios.defaults.headers = { 'X-XSRF-TOKEN': ('meta[name="xsrf-token"]')};
// axios.defaults.xsrfCookieName = "csrftoken"; 
// axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN";


function getAxiosInstance(endpoint = "http://127.0.0.1:8000") {
    console.log(endpoint);
    return axios.create({
        withCredentials: true,
        baseURL: endpoint
    });
}

export {

    getAxiosInstance
};
