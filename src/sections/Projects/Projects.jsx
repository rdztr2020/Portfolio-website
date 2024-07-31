import styles from './ProjectsStyles.module.css';
import viberr from '../../Assets/viberr.png';
import freshBurger from '../../Assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';
import hipsster from '../../Assets/hipsster.png'
import fitlift from '../../Assets/fitlift.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={viberr} 
        link="https://github.com/rdztr2020/Portfolio-website/"
        h3="Viberr"
        p="Streaming App"
        />
        <ProjectCard 
        src={freshBurger} 
        link="https://github.com/rdztr2020/Portfolio-website/"
        h3="Fresh Burger"
        p="Burger Joint"
        />
        <ProjectCard 
        src={hipsster} 
        link="https://github.com/rdztr2020/Portfolio-website/"
        h3="Hippster"
        p="Glasses Shop"
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