import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"
import { history } from '../helpers/history';


function Login() {
    const handleSubmit = (username, password) => {
        //reqres registered sample user
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
                // redirect('/chatlist')
                // <Redirect to='/chatlist' />
                history.push('/chatlist')
            })
            .catch(err => console.log(err));
    }
    return (
        <div id="login-layout">
            <Card className="col-md-4 col-lg-3">
                <Card.Header style={{ fontSize: "26px", backgroundColor: 'white' }} className="d-flex justify-content-center">Авторизация</Card.Header>
                <Card.Body className="d-flex flex-column align-items-center">
                    <form 
                        className='col-12'
                        onSubmit={(event) => {
                            event.preventDefault()
                            const [username, password] = event.target.children;
                            handleSubmit(username, password);
                        }}
                    >
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Логин" name="username"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Пароль" name="password" type='password'/>
                        </InputGroup>
                        <Button type="submit" variant="primary" style={{ width: '102px', height: '38px' }}>Войти</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;

