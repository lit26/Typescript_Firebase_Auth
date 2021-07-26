import React from "react";
import "./AuthContainer.scss";

interface AuthContainerProps {
    children: React.ReactNode;
    header: string;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children, header }) => {
    return (
        <div className="AuthContainer">
            <h2>Typescript Firebase Auth</h2>
            <div className="AuthContainer__form">
                <h2>{header}</h2>
                {children}
            </div>
        </div>
    );
};

export default AuthContainer;
