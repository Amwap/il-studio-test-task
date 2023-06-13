import axios from "axios";
import { history } from "./history";

function logout() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/auth/logout/`)
        .then(response => {
            localStorage.removeItem('user');
            localStorage.removeItem('refresh');
            localStorage.removeItem('access');
            history.push('/login')
        })
        .catch(err => history.push('/login'));
}

export default logout;