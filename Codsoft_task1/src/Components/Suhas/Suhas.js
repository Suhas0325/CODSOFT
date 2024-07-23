import './Suhas.css'
import suhas from '../Images/Suhas.jpg'
import github from '../Images/github_logo.png'
import linkedin from '../Images/final_link.png'
import { Link } from 'react-scroll';
const Suhas = () =>{
   
    return(
        <div className='ss'>
            <div className='suhas'>
            <img src={suhas} alt='Suhas'></img>
            </div>
        <div className='info'>
            <p>Hello I'm</p>
            <h2>Suhas Mukku</h2>
            <p className='full'>Full Stack Developer</p>
            <div className='butt'>
                <button onClick= {() => window.open('https://drive.google.com/file/d/1BvKj8fS5QQ7C_rK8jXqufMUBQ2zv-Qch/view?usp=drive_link')} >Check CV</button>
                <button><Link to='aboutme' smooth={true} duration={500} style={{ textDecoration: 'none'}}> More </Link></button>
            </div>
            <div className='logos'>
            <a href='https://github.com/Suhas0325'>
                <img src={github} alt='github'></img>
            </a>
            <a href='https://www.linkedin.com/in/suhas-mukku-672199242/'>
                <img src={linkedin} alt='linkedin'></img>
            </a>
            </div>
        </div>
        </div>
    )
}

export default Suhas