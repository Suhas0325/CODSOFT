import './Projects.css'
import github from '../Images/github_logo.png'
import { project_details } from './Details'
const Projects  = () => {
    return(
       <div className='Projec'>
        <h1>Projects</h1>
        <div className='prolist'>
            {project_details.map((Project) => (
                <div className='actualProjects'>
                <img src={Project.image} className='Ecomm' ></img>
                <div className='Prodet'>
                  <h3>{Project.title}</h3>
                  <img src={github} onClick={() => window.open(Project.gitLink)}></img> 
         </div>
         <div className='Descc'>
             <p>{Project.Description}</p>
         </div>
         <div className='sss'>
            {Project.Tags.map((tags) => (
                 <div className='Tags'>
                 <span>{tags}</span>
                </div>
            ))}
       </div>
         </div>
       
            ))}
            
        </div>
       </div>
    )
}

export default Projects