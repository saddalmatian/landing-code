import { React, Component } from 'react'
import './Navbar.css';
import Logo from './Logo.png'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return <div className='container-fluid'>
            <div className='row navbar'>
                <div className='col-3 navbar-element'><img className='logo-img' src={Logo} alt='Logo'></img> </div>
                <div className='col-3 navbar-element navbar-link'><Link to='/'>Home</Link> </div>
                <div className='col-3 navbar-element navbar-link'><Link to='/instruction'>Instruction</Link></div>
                <div className='col-3 navbar-element navbar-link'><Link to='/category'>Category</Link></div>
            </div>
        </div>
    }
}

export default Navbar;