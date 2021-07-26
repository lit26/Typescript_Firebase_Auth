import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import { auth } from "../config/firebase";
import { NavLink } from "react-router-dom";
import LogoutModal from "./LogoutModal";

const Navbar: React.FC = () => {
    const [logoutShow, setLogoutShow] = useState<boolean>(false);

    return (
        <div className="Narbar">
            <div className="Navbar__left">
                <h1>Typescript Firebase Auth</h1>
            </div>
            <div className="Navbar__right">
                <Nav className="Navbar__links">
                    <NavDropdown
                        title={
                            <div>
                                <img
                                    className="avatar"
                                    src={`${auth.currentUser?.providerData[0]?.photoURL}`}
                                    alt="avatar"
                                />
                            </div>
                        }
                        id="nav-dropdown"
                    >
                        <Nav.Link
                            className="Navbar__link"
                            as={NavLink}
                            to="/change"
                        >
                            Change
                        </Nav.Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                            className="Navbar__link"
                            onClick={() => setLogoutShow(true)}
                        >
                            Logout
                        </NavDropdown.Item>
                        <LogoutModal
                            show={logoutShow}
                            setShow={setLogoutShow}
                        />
                    </NavDropdown>
                </Nav>
            </div>
        </div>
    );
};

export default Navbar;
