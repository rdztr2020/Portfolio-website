import styles from './ProjectsStyles.module.css';

import ProjectCard from '../../common/ProjectCard';

import gordos from '../../Assets/gordologo.jpg'
import nerd from '../../Assets/nerd.png'
import forsale from '../../Assets/For-Sale-1200x800.jpg'
import login from './signin.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={nerd} 
        // link="https://github.com/rdztr2020/Portfolio-website/"
        link="https://sleeonline.netlify.app"
        h3="The Nerd"
        p="Portfolio Page"
        
        />
        <ProjectCard 
        src={forsale} 
        // link="https://mern-course-jta1.onrender.com/"
        link="https://github.com/rdztr2020/mern-course/"
        h3="Nerd Store"
        p="Mongo Database"
        
        
        />
        <ProjectCard 
        src={login} 
        link='https://mern-auth-isuq.vercel.app/'
        h3="Sign In"
        p="Authenticate"
        
        />
        <ProjectCard          
        src={gordos} 
        link="https://gordomikesbbq.com/"
        h3="Gordo Mikes BBQ"
        p="BBQ Restaurant"
        
        />

    </div>
    </section>
    
  );
}

export default Projects;