import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"
import { history } from "./history";

function login(username, password) {
    const loginPayload = {
        username: 'admin',
        password: 'admin_forever'
    }
    axios.post(`${process.env.REACT_APP_API_URL}/api/v1/token/`, loginPayload)
        .then(response => {
            const access = response.data.access;
            const refresh = response.data.refresh;
            localStorage.setItem("refresh", refresh);
            localStorage.setItem("access", access);
            setAuthToken(access);
            axios.get(`${process.env.REACT_APP_API_URL}/api/v1/user/me/`)
                .then(response => {
                    console.log(response)
                    localStorage.setItem("user", JSON.stringify(response.data));
                    history.push('/chatlist')
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}

export default login;