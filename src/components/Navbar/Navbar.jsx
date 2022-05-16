import {ReactComponent as LogoIcon} from '../../assets/images/Logo.svg';
import ButtonPrimary from "../common/Button/ButtonPrimary";

function Navbar() {
    return (
        <nav className="abz__navbar">
            <a href="/" aria-label="Home" className="abz__navbar_logo-wrapper">
                <LogoIcon className="abz__navbar_logo" />
            </a>
            <div className="abz__navbar_buttons">
                <ButtonPrimary>Users</ButtonPrimary>
                <ButtonPrimary>Sign up</ButtonPrimary>
            </div>
        </nav>
    );
}

export default Navbar;