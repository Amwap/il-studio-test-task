import { withStyles } from "@material-ui/core/styles";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const useStyles = (theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends Component {
    render() {
        return (
            <div id="login-layout">
                <Card className="col-md-4">
                    <Card.Header style={{ fontSize: "26px", backgroundColor: 'white' }} className="d-flex justify-content-center">Авторизация</Card.Header>
                    <Card.Body className="d-flex flex-column align-items-center">
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Логин" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Пароль" />
                        </InputGroup>
                        <Button variant="primary" style={{ width: '102px', height: '38px' }}>Войти</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default withStyles(useStyles)(Login);