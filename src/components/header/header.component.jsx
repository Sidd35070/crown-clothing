import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link } from 'react-router-dom';
import {auth} from '../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { CartDropdown } from '../cartDropdown/cartDropdown.component';


const Header = ({user, hidden}) => {

    console.log(hidden);
    // const user = displayName;
    return(
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            {
                user ? <div className="hellop" >{user}</div> : <div className="hello" >{user}</div>
            }
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                user ? <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)}

const mapStateToProps = ({user:{displayName}, cart:{hidden}}) =>{
    console.log(hidden);
    return  ({
        displayName,
        hidden
});
}

export default connect(mapStateToProps)(Header);