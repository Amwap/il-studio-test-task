import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ExitButton from '../components/exitButton'
import { Send } from 'react-bootstrap-icons';

class Chat extends Component {
    state = {
        filledForm: false,
        messages: [],
        value: '',
        name: '',
        room: this.props.match.params.slug,
    }
    client = new W3CWebSocket('ws://127.0.0.1:8000/ws/' + this.state.room + '/'); //gets room_name from the state and connects to the backend server 
    onButtonClicked = (e) => {
        this.client.send(
            JSON.stringify({
                type: "message",
                text: this.state.value,
                sender: this.state.name,
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
                            name: dataFromServer.sender,
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

                    </Card.Body>
                    <Card.Footer >
                        <form
                            className='d-flex flex-row justify-content-between align-items-center'
                        >
                            <Form.Control placeholder="Сообщение..." name='name' style={{ border: 'white', borderRadius: '0px' }} />
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
            //             Room Name: {this.state.room}
            //             <Paper
            //                 style={{ height: 500, maxHeight: 500, overflow: "auto", boxShadow: "none", }}
            //             >
            //                 {this.state.messages.map((message) => (
            //                     <>
            //                         <Card className={classes.root}>
            //                             <CardHeader title={message.name} subheader={message.msg} />
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
            //                     <TextField variant="outlined" margin="normal" required fullWidth label="Room name"
            //                         name="Room name"
            //                         autoFocus
            //                         value={this.state.room}
            //                         onChange={(e) => {
            //                             this.setState({ room: e.target.value });
            //                             this.value = this.state.room;
            //                         }}
            //                     />
            //                     <TextField variant="outlined" margin="normal" required fullWidth name="sender" label="sender"
            //                         type="sender"
            //                         id="sender"
            //                         value={this.state.name}
            //                         onChange={(e) => {
            //                             this.setState({ name: e.target.value });
            //                             this.value = this.state.name;
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