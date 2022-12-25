import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img1 from '../images/584830f5cef1014c0b5e4aa1.png'

function AppNavbar() {
    const card = useSelector((state) => state.card)
    console.log(card.length)
    return (
        <Navbar fixed='top' className='mb-5' bg="light" expand="lg">
            <Container>
                <Link to="/" className='navbar-brand' ><img width="55px" src={img1} /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/' className='nav-link'>Products</Link>
                        <Link to='/card' className='nav-link'>Card - {card.length}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;