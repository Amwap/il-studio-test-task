import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import ExitButton from '../components/ExitButton';


function ChatList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getChatList();
    }, []);

    const getChatList = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/chat/room/list/`)
            .then(response => {
                console.log(response)
                setData(response.data);
            })
            .catch(err => console.log(err));
    }

    const handleSubmit = (name) => {
        //reqres registered sample user
        console.log(name.value)
        const payload = {
            name: name.value,
        }
        axios.post(`${process.env.REACT_APP_API_URL}/api/v1/chat/room/create/`, payload)
            .then(response => {
                console.log(response)
                getChatList()
                name.value = ''
            })
            .catch(err => console.log(err));
    }
    return (
        <div id="base-layout" className='d-flex flex-column '>
            <nav className='chatlist-navbar d-flex justify-content-center align-items-center'>
                <div className='col-md-4 d-flex flex-row justify-content-end pt-3'>
                    <ExitButton className='ml-auto' style={{ fontSize: '50px' }} />
                </div>
            </nav>
            <Card className="col-md-4 text-nowrap" style={{ minWidth: '320px' }}>
                <Card.Header style={{ fontSize: "26px", backgroundColor: 'white' }} className="d-flex justify-content-center">Выберите / создайте чат</Card.Header>
                <Card.Body className="d-flex flex-column align-items-center">
                    <ListGroup as="ul" className="col-12 mb-3">
                        {data.map(item => (
                            <ListGroup.Item
                                key={item.id}
                                className="d-flex flex-row justify-content-between align-items-center"
                                style={{ backgroundColor: '#7879F1', color: 'white' }}
                                action href={`chat/${item.id}/`}
                            >
                                {item.name} <ArrowRightCircle className='ml-auto' style={{ fontSize: 'large' }} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <InputGroup className="mb-3">
                        <form
                            className='col-12 input-with-inner-button d-flex flex-row'
                            onSubmit={(event) => {
                                event.preventDefault()
                                const [name] = event.target.children;
                                handleSubmit(name);
                            }}
                        >
                            <Form.Control placeholder="Введите название чата" name='name' style={{ border: 'white' }} />
                            <Button variant="primary" type='submit' style={{ width: '102px', height: '38px' }} className="m-1">Создать</Button>
                        </form>
                    </InputGroup>
                </Card.Body>
            </Card>
        </div>
    )
}


export default ChatList;