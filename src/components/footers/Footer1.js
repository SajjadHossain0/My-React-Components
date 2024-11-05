import React from 'react';
import './Footer1.css';

export default function Footer1() {
    return (
        <div className="page-container">
            <footer className="footer">
                <div style={{marginBottom:10}} className="footer-content">

                    <div className="footer-left">
                        <p>Contact Us: contact@yourcompany.com</p>
                    </div>

                    <div className="footer-right">
                        <p>Follow Us: Facebook | Twitter | Instagram</p>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
