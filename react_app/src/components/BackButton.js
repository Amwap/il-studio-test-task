import { BoxArrowInLeft } from 'react-bootstrap-icons';
import { history } from '../helpers/history';

function BackButton() {
    const onClick = () =>{
        history.push('/chatlist')
    }
    return (
        <BoxArrowInLeft onClick={onClick} style={{ cursor: 'pointer' }} />
    )
}

export default BackButton;