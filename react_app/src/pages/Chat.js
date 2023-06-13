import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ExitButton from '../components/exitButton'
import { Send } from 'react-bootstrap-icons';
import axios from "axios";


class Chat extends Component {
    state = {
        filledForm: false,
        messages: [],
        value: '',
        sender: JSON.parse(localStorage.getItem('user')),
        room_id: this.props.match.params.room_id,
        room_meta: {}
    }
    // getRoomMeta = () => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/api/v1/room/meta/` + this.state.room_id + '/')
    //         .then(response => {
    //             console.log(response.data)
    //             this.state.room_meta = response.data
    //         })
    //         .catch(err => console.log(err));
    // }

    client = new W3CWebSocket('ws://127.0.0.1:8000/ws/' + this.state.room_id + '/'); //gets room_name from the state and connects to the backend server 
    onButtonClicked = (e) => {
        this.client.send(
            JSON.stringify({
                type: "message",
                text: this.state.value,
                sender: this.state.sender,
            })
        );
        this.state.value = "";
        e.preventDefault();
    };
    componentDidMount() {
        this.client.onopen = () => {
            console.log("WebSocket Client Connected");
        };
        this.client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            if (dataFromServer.type === 'page_meta') {
                this.setState((state) => ({
                    room_meta: dataFromServer
                }));
            } else if (dataFromServer.type === 'chat_message') {
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        {
                            msg: dataFromServer.text,
                            sender: dataFromServer.sender,
                        },
                    ],
                }));
            }
        };
    };
    render() {
        return (
            <div id="base-layout" className='chat-layout'>
                <Card className='col-6 rounded-0'>
                    <Card.Header style={{ fontSize: "26px", backgroundColor: 'white' }} className="d-flex justify-content-between align-items-center">
                        <div></div>
                        <div className='d-flex flex-column'>
                            <div style={{ fontSize: '22px', fontWeight: '600' }}>{this.state.room_meta.name}</div>
                            <div style={{ fontSize: '15px' }}>{this.state.room_meta.member_count} участника</div>
                        </div>
                        <ExitButton />

                    </Card.Header>
                    <Card.Body className="d-flex flex-column align-items-center">
                        {this.state.messages.map((message) => (
                            <>
                                <Card key={message.id}>
                                    {message.sender.username}
                                    {message.msg}
                                </Card>
                            </>
                        ))}
                    </Card.Body>
                    <Card.Footer >
                        <form
                            className='d-flex flex-row justify-content-between align-items-center'
                            onSubmit={this.onButtonClicked}
                        >
                            <Form.Control
                                value={this.state.value}
                                placeholder="Сообщение..."
                                style={{ border: 'white', borderRadius: '0px' }}
                                onChange={(e) => {
                                    this.setState({ value: e.target.value });
                                    this.value = this.state.value;
                                }}
                            />
                            <button type='submit' className='btn-no-style'>
                                <Send style={{ transform: 'rotate(45deg)', cursor: 'pointer' }} />
                            </button>
                        </form>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

// export default Chat;
export default Chat;