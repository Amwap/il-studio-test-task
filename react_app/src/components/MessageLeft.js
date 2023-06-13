import formatDate from "./formatDate";

function MessageLeft({ message }) {
    return (
        <div className="col-12 d-flex justify-content-start pb-1">
            <div
                className="msg-rectangle d-flex flex-column justify-content-start align-items-start"
            >
                <b>{message.user.username}</b>
                <p className="text-left">{message.content}</p>
                <div className="msg-time col-md-12 text-end">{formatDate(message.timestamp)}</div>
            </div>
        </div>
    )
}

export default MessageLeft;