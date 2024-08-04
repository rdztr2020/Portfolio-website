import styles from './HeroStyles.module.css';
import heroImg from "./nerd.png";

import sun from '../../Assets/sun.svg';
import moon from '../../Assets/moon.svg';
import twitterLight from '../../Assets/twitter-light.svg';
import twitterDark from '../../Assets/twitter-dark.svg';
import githubLight from '../../Assets/github-light.svg';
import githubDark from '../../Assets/github-dark.svg';
import linkedinLight from '../../Assets/linkedin-light.svg';
import linkedinDark from '../../Assets/linkedin-dark.svg';
import CV from "../../Assets/cv.pdf";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun: moon;
    const twitterIcon = theme === 'light' ? twitterLight: twitterDark;
    const githubIcon = theme === 'light' ? githubLight: githubDark;
    const LinkedinIcon = theme === 'light' ? linkedinLight: linkedinDark;
  return (
    
    <section id='Hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
           src={heroImg} 
           alt="Profile Pic of Me" 
           /> 
           <img 
           className={styles.colorMode}
           src={themeIcon} 
           alt="Color mode icon"
           onClick={toggleTheme} 
           />
        </div>
        <div className={styles.info}>
            <h1>THE
                <br />
                NERD!!
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero