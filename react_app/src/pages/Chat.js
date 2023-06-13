import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ExitButton from '../components/exitButton'
import { Send } from 'react-bootstrap-icons';

class Chat extends Component {
    state = {
        filledForm: false,
        messages: [],
        value: '',
        sender: JSON.parse(localStorage.getItem('user')),
        room_id: this.props.match.params.room_id,
    }
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
            if (dataFromServer) {
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
        const { classes } = this.props;
        return (
            <div id="base-layout" className='chat-layout'>
                <Card className='col-6 rounded-0'>
                    <Card.Header style={{ fontSize: "26px", backgroundColor: 'white' }} className="d-flex justify-content-between align-items-center">
                        <div></div>
                        <div className='d-flex flex-column'>
                            <div style={{ fontSize: '22px', fontWeight: '600' }}>Название</div>
                            <div style={{ fontSize: '15px' }}>2 участника</div>
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

            // <Container component="main" maxWidth="xs">
            //     {this.state.filledForm ? (
            //         <div style={{ marginTop: 50 }}>
            //             Room Name: {this.state.room_id}
            //             <Paper
            //                 style={{ height: 500, maxHeight: 500, overflow: "auto", boxShadow: "none", }}
            //             >
            //                 {this.state.messages.map((message) => (
            //                     <>
            //                         <Card className={classes.root}>
            //                             <CardHeader title={message.sender.id} subheader={message.msg} />
            //                         </Card>
            //                     </>
            //                 ))}
            //             </Paper>
            //             <form
            //                 className={classes.form}
            //                 noValidate
            //                 onSubmit={this.onButtonClicked}
            //             >
            //                 <TextField id="outlined-helperText" label="Write text" defaultValue="Default Value"
            //                     variant="outlined"
            //                     value={this.state.value}
            //                     fullWidth
            //                     onChange={(e) => {
            //                         this.setState({ value: e.target.value });
            //                         this.value = this.state.value;
            //                     }}
            //                 />
            //                 <Button type="submit" fullWidth variant="contained" color="primary"
            //                     className={classes.submit}
            //                 >
            //                     Send Message
            //                 </Button>
            //             </form>
            //         </div>
            //     ) : (
            //         <div>
            //             <CssBaseline />
            //             <div className={classes.paper}>
            //                 <form
            //                     className={classes.form}
            //                     noValidate
            //                     onSubmit={(value) => this.setState({ filledForm: true })}
            //                 >
            //                     <TextField variant="outlined" margin="normal" required fullWidth label="Room sender.id"
            //                         sender.id="Room sender.id"
            //                         autoFocus
            //                         value={this.state.room_id}
            //                         onChange={(e) => {
            //                             this.setState({ room_id: e.target.value });
            //                             this.value = this.state.room_id;
            //                         }}
            //                     />
            //                     <TextField variant="outlined" margin="normal" required fullWidth sender.id="sender" label="sender"
            //                         type="sender"
            //                         id="sender"
            //                         value={this.state.sender.id}
            //                         onChange={(e) => {
            //                             this.setState({ sender.id: e.target.value });
            //                             this.value = this.state.sender.id;
            //                         }}
            //                     />
            //                     <Button type="submit" fullWidth variant="contained" color="primary"
            //                         className={classes.submit}
            //                     >
            //                         Submit
            //                     </Button>
            //                 </form>
            //             </div>
            //         </div>
            //     )}
            // </Container>
        );
    }
}

// export default Chat;
export default Chat;