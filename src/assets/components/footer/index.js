import React from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Image
import Logo from '../../img/logo.png';

//React icons
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

export default function index() {
    return (
        <>
            <footer>
                <section>
                    <div>
                        <div>
                            <Link to="/">
                                <img src={Logo} alt='Logo' width={"100rem"} />
                            </Link>
                        </div>
                        <div>
                            <FaGithub size={30} />
                            <FaInstagram size={30} />
                            <BsLinkedin size={30} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <ul>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="/about">
                                    <li>About</li>
                                </Link>
                                <Link to="/techStack">
                                    <li>Tech Stack</li>
                                </Link>
                                <Link to="/projects">
                                    <li>Projects</li>
                                </Link>
                                <Link to="/contact">
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
