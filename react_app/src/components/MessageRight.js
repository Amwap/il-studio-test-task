import formatDate from "./formatDate";
import { Check2All } from 'react-bootstrap-icons';

function MessageRight({ message }) {
    return (
        // <div className="col-md-12 d-flex justify-content-end">
        //     LEFT
        // </div>
        <div className="col-12 d-flex justify-content-end pb-1">
            <div
                className="msg-rectangle rigth-angle d-flex flex-column justify-content-end align-items-start"
            >
                {/* <b>{message.user.username}</b> */}
                <p className="text-left">{message.content}</p>
                <div className="msg-time col-md-12 text-end">{formatDate(message.timestamp)}<Check2All style={{ fontSize: '17px', paddingLeft: '3px' }} /></div>
            </div>
        </div>
    )
}

export default MessageRight