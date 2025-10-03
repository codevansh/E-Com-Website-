import './Navbar.css';
import navlog from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlog} alt="" className="nav-logo" />
            <img src={navProfile} alt="" className='nav-profile'/>
        </div>
    )
}

export default Navbar