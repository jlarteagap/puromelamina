import React from 'react'
import './Footer.css'
export const Footer = () => (
    <footer className="footer">
          © {new Date().getFullYear()}, Desarrollado en Gatsby por  
          {` `}
          <a href="http://www.jlarteaga.com"> Jorge Arteaga</a>
        </footer>
)