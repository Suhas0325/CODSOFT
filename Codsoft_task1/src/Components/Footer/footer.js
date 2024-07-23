import './footer.css'
import { Link } from 'react-scroll'

 const Footer = () => {
    return(
        <div class="footer-container">
        <footer class="footer-wrapper">
            <h1 class="logo">Mukku Suhas</h1>
            <nav class="nav">
                <a class="nav-link">  <Link to='introduction' smooth={true} duration={500} style={{ textDecoration: 'none' }}>Home</Link></a>
                <a class="nav-link">  <Link to='aboutme' smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                About Me
              </Link></a>
                <a  class="nav-link"> <Link to='skills' smooth={true} duration={500} style={{ textDecoration: 'none' }}> Skills</Link></a>
                <a class="nav-link">
                <Link to='Projects' smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                Projects
              </Link>
                </a>
                <a  class="nav-link">
                <Link to='contact' smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                Contact
              </Link>
                </a>
            </nav>
            <p class="copyright">
                &copy; 2024 Mukku Suhas. All rights reserved.
            </p>
        </footer>
    </div>
    )
}

export default Footer