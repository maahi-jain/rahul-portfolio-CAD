import React from "react";
import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <h3 className="footerHead">
                Contact Us:
            </h3>
            <table>
                <tr>
                    <th>Instagram: </th>
                    <td><a href="https://www.instagram.com/rahull_verma_">https://www.instagram.com/rahull_verma_</a></td>
                </tr>
                <tr>
                    <th>Mail: </th>
                    <td><a href="mailto:cadkalakar@gmail.com">cadkalakar@gmail.com</a></td>
                </tr>
                <tr>
                    <th>Contact: </th>
                    <td>8708087021</td>
                </tr>
            </table>
        </div>
    )
}

export default Footer;