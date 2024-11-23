import React from 'react';

function Footer() {
    return (
        <div class="Footer">
            <div className='Footer-container'>
                <div class="Footer-Section" id='Footer-About'>
                    <h3>About</h3>
                    <ul>
                        <a href='index.html'><li>About Us</li></a>
                        <a href='index.html'><li>Careers</li></a>
                        <a href='index.html'><li>Contact Us</li></a>
                    </ul>
                </div>
                <div class="Footer-Section" id='Footer-Portal'>
                    <h3>Work With Us</h3>
                    <ul>
                        <a href='index.html'><li>Become a Seller</li></a>
                        <a href='index.html'><li>Advertise</li></a>
                    </ul>
                </div>
                <div class="Footer-Section" id='Footer-Policy'>
                    <h3>Consumer Policies</h3>
                    <ul>
                        <a href='index.html'><li>Privacy</li></a>
                        <a href='index.html'><li>Security</li></a>
                        <a href='index.html'><li>Terms of Use</li></a>
                        <a href='index.html'><li>Grievance Redressal</li></a>
                    </ul>
                </div>
                <div class="Footer-Section" id='Footer-Help'>
                    <h3>Help</h3>
                    <ul>
                        <a href='index.html'><li>Payments</li></a>
                        <a href='index.html'><li>Shipping</li></a>
                        <a href='index.html'><li>FAQ</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;