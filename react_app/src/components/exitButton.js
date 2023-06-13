import { BoxArrowInLeft } from 'react-bootstrap-icons';

function ExitButton() {
    const onClick = (e) => {
        console.log(e)
    };
    return (
        <BoxArrowInLeft onClick={onClick} style={{ cursor: 'pointer' }} />
    )
}

export default ExitButton;