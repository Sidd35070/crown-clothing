import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link } from 'react-router-dom';
import {auth} from '../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import  CartDropdown  from '../cartDropdown/cartDropdown.component';


const Header = ({displayName, hidden}) => {
    return(
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            {
                displayName ? <div className="hellop" >{displayName}</div> : <div className="hello" >{displayName}</div>
            }
            <Link className="option" to='/shop'>SHOP</Link>
            <a target="_blank" rel="noreferrer" className="option" href="https://siddharthrai.com/">CONTACT</a>
            {
                displayName ? <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)}

const mapStateToProps = ({user:{displayName}, cart:{hidden}}) =>{
    return  ({
        displayName,
        hidden
});
}

export default connect(mapStateToProps)(Header);