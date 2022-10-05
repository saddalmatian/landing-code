import { React, Component } from 'react'
import './Navbar.css';
import Logo from './Logo.png'

class Navbar extends Component {
    render() {
        return <div className='container-fluid'>
            <div className='row navbar'>
                <div className='col-3 navbar-element'><img className='logo-img' src={Logo} alt='Logo'></img> </div>
                <div className='col-3 navbar-element navbar-link'><a href='/'>Home</a> </div>
                <div className='col-3 navbar-element navbar-link'><a href='/instruction'>Instruction</a></div>
                <div className='col-3 navbar-element navbar-link'><a href='/category'>Category</a></div>
            </div>
        </div>
    }
}

export default Navbar;