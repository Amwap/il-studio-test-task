import { withStyles } from "@material-ui/core/styles";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const useStyles = (theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class ChatList extends Component {
    render() {
        return (
            <div id="chatlist-layout">
                <Card className="col-md-4 text-nowrap" style={{ minWidth: '320px' }}>
                    <Card.Header style={{ fontSize: "26px", backgroundColor: 'white' }} className="d-flex justify-content-center">Выберите / создайте чат</Card.Header>
                    <Card.Body className="d-flex flex-column align-items-center">
                        <ListGroup as="ul" className="col-12 mb-3">
                            <ListGroup.Item
                                    className="d-flex flex-row justify-content-between align-items-center"
                                    style={{ backgroundColor: '#7879F1', color: 'white' }}
                                    action href="#link1"
                                >
                                Новая комната <ArrowRightCircle className='ml-auto' style={{ fontSize: 'large'}}/>
                            </ListGroup.Item>
                            <ListGroup.Item
                                    className="d-flex flex-row justify-content-between align-items-center"
                                    style={{ backgroundColor: '#7879F1', color: 'white' }}
                                    action href="#link2"
                                >
                                Новая комната <ArrowRightCircle className='ml-auto' style={{ fontSize: 'large'}}/>
                            </ListGroup.Item>

                        </ListGroup>
                        <InputGroup className="mb-3">
                            <div className="input-with-inner-button d-flex flex-row">
                                <Form.Control placeholder="Введите название чата" style={{ border: 'white' }} />
                                <Button variant="primary" style={{ width: '102px', height: '38px' }} className="m-1">Создать</Button>
                            </div>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default withStyles(useStyles)(ChatList);