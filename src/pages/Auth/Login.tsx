import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import ErrorText from "../../components/ErrorText";
import { auth, Providers } from "../../config/firebase";
import firebase from "firebase";
import "./Login.scss";
import { GoogleOutlined } from "@ant-design/icons";
import AuthContainer from "../../components/AuthContainer";

const LoginPage: React.FC = () => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const history = useHistory();

    const signInWithEmailAndPassword = () => {
        if (error !== "") {
            setError("");
        }

        setAuthenticating(true);

        auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
                setAuthenticating(false);
                setError(error.message);
            });
    };

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== "") {
            setError("");
        }

        setAuthenticating(true);
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
                setAuthenticating(false);
                setError(error.message);
            });
    };

    return (
        <AuthContainer header="Sign-In">
            <Form className="Login__form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Button
                    disabled={authenticating}
                    color="success"
                    block
                    onClick={signInWithEmailAndPassword}
                >
                    Login
                </Button>
                <small>
                    <p className="m-1 text-center">
                        Don't have an account?{" "}
                        <Link to="/register">Register here.</Link>
                    </p>
                    <p className="m-1 text-center">
                        <Link to="/forget">Forget your password?</Link>
                    </p>
                </small>
                <ErrorText error={error} />
                <hr className="bg-info m-3" />
                <Button
                    block
                    variant="light"
                    disabled={authenticating}
                    onClick={() => signInWithSocialMedia(Providers)}
                    style={{
                        borderColor: "#ea4335",
                    }}
                >
                    <div className="Login__google">
                        <GoogleOutlined />
                        <div>Sign in with Google</div>
                    </div>
                </Button>
            </Form>
        </AuthContainer>
    );
};

export default LoginPage;
