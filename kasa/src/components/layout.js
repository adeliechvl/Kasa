import React from "react";

import "../components/layout.css";
import Header from '../components/header.js';
import Footer from '../components/footer.js';

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;