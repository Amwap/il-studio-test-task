import { withStyles } from "@material-ui/core/styles";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"

const useStyles = (theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

function Login() {
    const handleSubmit = (email, password) => {
        //reqres registered sample user
        const loginPayload = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }

        axios.post("https://reqres.in/api/login", loginPayload)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                setAuthToken(token);
                window.location.href = '/'
            })
            .catch(err => console.log(err));
    }
    return (
        <div id="login-layout">
            <Card className="col-md-4">
                <Card.Header style={{ fontSize: "26px", backgroundColor: 'white' }} className="d-flex justify-content-center">Авторизация</Card.Header>
                <Card.Body className="d-flex flex-column align-items-center">
                    <form 
                        onSubmit={(event) => {
                            event.preventDefault()
                            const [email, password] = event.target.children;
                            handleSubmit(email, password);
                        }}
                    >

                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Логин" name="email"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Пароль" name="password"/>
                        </InputGroup>
                        <Button type="submit" variant="primary" style={{ width: '102px', height: '38px' }}>Войти</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withStyles(useStyles)(Login);

