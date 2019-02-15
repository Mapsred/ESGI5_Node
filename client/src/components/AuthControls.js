import { Link } from "react-router-dom";
import React from "react";

const styles = {
    button: {
        color: "white",
        textDecoration: "none",
        padding: "0 5px"
    }
};

export default () => <React.Fragment>
    <Link style={styles.button} to="/security/login">Login</Link>
    <Link style={styles.button} to="/register">Register</Link>
</React.Fragment>

