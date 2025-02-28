import React from 'react'
import { Container, NavLink } from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';
import DropdownCMP from './DropdownCMP';

import BtnJoin from '../../BtnJoin/BtnJoin';
import './NavBar.css'
import { Link } from 'react-router-dom';
import useDarkMode from '../../../hook/useDarkMode';
import { MdLightMode, MdDarkMode } from "react-icons/md";

function NavBars() {

    const [isDark, setIsDark] = useDarkMode()
    const clickHandler = () => {
        if (isDark === 'dark') {

            setIsDark('light')
        } else {

            setIsDark('dark')
        }
    }
    const Home = [
        { id: 1, title: 'Home1', route: '/home1' },
        { id: 2, title: 'Home2', route: '/home2' },
        { id: 3, title: 'Home3', route: '/home3' },

    ]
    const pages = [
        { id: 1, title: '404 pages', route: '/notfound' },
        { id: 2, title: 'Blog', route: "/blog" },
        { id: 3, title: 'About', route: "/about" },
        { id: 4, title: 'Services', route: "/services" },
        { id: 5, title: 'Portfolio', route: "/portfolio" },
        { id: 6, title: 'Contact', route: "/contact" },
        { id: 7, title: 'Login Page', route: "/loginpage" },
        { id: 8, title: 'Register', route: "/rigester" },

    ]
    const allNavLinks = [
        { id: 1, title: 'About', route: '/about' },
        { id: 2, title: 'Services', route: '/services' },
        { id: 3, title: 'Portfolio', route: '/portfolio' },
        { id: 4, title: 'Blog', route: '/blog' },
        { id: 5, title: 'Contact Us', route: '/contact' }
    ]

    // style={{ backgroundColor: this.props.colors.thomeSecondry, color: this.props.colors.blackSecondry }}
    return (
        <div className='containerNav'>
            <Navbar
                collapseOnSelect
                fixed='top' expand="lg" className='fw-bold text-text-opacity-75 navbars pe-3 me-lg-0 text-center'
            >
                <Container >
                    <Navbar.Brand href="#"><img width={150} src="https://erramix-themes.com/techidaa/images/logo/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0">


                            <DropdownCMP name='Home' obj={Home} />


                            {allNavLinks.map((navLink) => (
                                <NavLink key={navLink.id} href='action' >
                                    <Link to={navLink.route}>
                                        {navLink.title}
                                    </Link>
                                </NavLink>
                            ))}



                            <DropdownCMP name='Pages' obj={pages} />


                        </Nav>


                        <div className='d-flex justify-content-center my-4 my-lg-0'>
                            <BtnJoin className='me-1' />
                            <button className='darkMode ' onClick={clickHandler}>
                                {isDark === 'dark' ? <MdLightMode /> : <MdDarkMode />}
                            </button>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}



export default NavBars