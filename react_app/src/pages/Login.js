// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import Paper from "@material-ui/core/Paper";
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