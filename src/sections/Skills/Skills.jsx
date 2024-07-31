import styles from './SkillsStyles.module.css';
/*import checkMarkIcon from "../../Assets/checkmark-dark.svg";*/
import checkMarkIconDark from '../../Assets/checkmark-dark.svg';
import checkMarkIconLight from '../../Assets/checkmark-light.svg';
import SkillList from '../../common/SkillList.jsx';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;


  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="TypeScript"/>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        </div>
        <hr />
        <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Angular"/>
        <SkillList src={checkMarkIcon} skill="Vue"/>
        <SkillList src={checkMarkIcon} skill="Tailwind"/>
        </div>
        <hr />
        <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="Jest"/>
        <SkillList src={checkMarkIcon} skill="Node"/>
        <SkillList src={checkMarkIcon} skill="Redux"/>
        <SkillList src={checkMarkIcon} skill="Webpack"/>
        <SkillList src={checkMarkIcon} skill="Git"/>
        </div>
        <hr />
    </section>
  )
}

export default Skills;