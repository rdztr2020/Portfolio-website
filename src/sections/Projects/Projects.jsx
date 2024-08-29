import styles from './ProjectsStyles.module.css';
import viberr from '../../Assets/viberr.png';
import freshBurger from '../../Assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';
import hipsster from '../../Assets/hipsster.png'
import fitlift from '../../Assets/fitlift.png'
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
        link="https://github.com/rdztr2020/Portfolio-website/"
        h3="The Nerd"
        p="Portfolio Page"
        
        />
        <ProjectCard 
        src={forsale} 
        link="https://mern-course-jta1.onrender.com/"
        //"https://github.com/rdztr2020/mern-course/"
        h3="The Store"
        p="Mongo Database"
        
        
        />
        <ProjectCard 
        src={login} 
        link='https://mern-course-jta1.onrender.com/'
        //"https://github.com/rdztr2020/mern-auth"
        h3="Sign In"
        p="Authenticate"
        
        />
        <ProjectCard 
        src={fitlift} 
        link="https://github.com/rdztr2020/Portfolio-website/"
        h3="Fit Lift"
        p="Fitness App"
        
        />

    </div>
    </section>
    
  );
}

export default Projects;