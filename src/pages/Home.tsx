import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const HomePage: React.FC = () => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <p>Login Successful</p>
                    <p>
                        Change your password <Link to="/change">here</Link>.
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HomePage;
