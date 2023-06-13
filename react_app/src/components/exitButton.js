import { BoxArrowInLeft } from 'react-bootstrap-icons';
import logout from '../helpers/logout';


function ExitButton() {
    return (
        <BoxArrowInLeft onClick={logout} style={{ cursor: 'pointer' }} />
    )
}

export default ExitButton;