import React from 'react'
import './Footer.css'
export const Footer = () => (
    <footer className="footer">
          © {new Date().getFullYear()}, Built with 
          {` `}
          <a href="https://www.gatsbyjs.com"> Gatsby</a>
        </footer>
)