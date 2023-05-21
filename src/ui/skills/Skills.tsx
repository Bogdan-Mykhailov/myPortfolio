import React from 'react';
import s from './Skills.module.css'
import styles from '../../common/styles/Common.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/Title/Title";
import css from '../../assets/icons/css.svg'
import html from '../../assets/icons/html5.svg'
import react from '../../assets/icons/react.svg'
import redux from '../../assets/icons/redux.svg'
import mui from '../../assets/icons/mui.svg'
import npm from '../../assets/icons/npm.svg'
import ts from '../../assets/icons/typescript.svg'
import js from '../../assets/icons/javascript.svg'
import node from '../../assets/icons/node.svg'
import git from '../../assets/icons/git.svg'
import {Fade} from "react-awesome-reveal";

export const Skills = () => {
  return (
    <section id='skills' className={s.skills}>
      <Fade delay={5} duration={1000} direction={"up"} triggerOnce>
        <div className={`${styles.container} ${s.skillsContainer}`}>
          <Title title='Skills'/>
          <div className={s.skillsWrapper}>
            <Fade direction={"up"} cascade damping={1e-1} triggerOnce duration={800}>
              <Skill
                title='HTML'
                icon={html}
                imgDescription='Skill icon'
                skillDescription="I have gained experience in creating well-structured and valid HTML5 code,
                skills in utilizing modern HTML tags and attributes for enhanced semantic value."
              />

              <Skill
                title='CSS'
                icon={css}
                imgDescription='Skill icon'
                skillDescription='Able to utilizing advanced CSS3 features for enhanced styling and layout.
                Have experience in integrating CSS with popular front-end frameworks.'
              />

              <Skill
                title='Javascript'
                icon={js}
                imgDescription='Skill icon'
                skillDescription='I effectively use modern JavaScript features and syntax for efficient code, debug
                and troubleshoot JavaScript code for improved performance. Skilled in integrating JavaScript with React.'
              />

              <Skill
                title='Typescript'
                icon={ts}
                imgDescription='Skill icon'
                skillDescription='I have experience in using TypeScript to ensure code quality and reliability.
                Has the skills to implement complex type definitions and interfaces for improved code organization.'
              />

              <Skill
                title='Node.js'
                icon={node}
                imgDescription='Skill icon'
                skillDescription='I have practical experience working with Node.js to develop and deploy applications.'
              />

              <Skill
                title='React'
                icon={react}
                imgDescription='Skill icon'
                skillDescription='Strong understanding of the principles and concepts behind React and is able
              to apply this knowledge to my work.'
              />
              <Skill
                title='Redux'
                icon={redux}
                imgDescription='Skill icon'
                skillDescription='Highly skilled in implementing advanced Redux patterns and best practices. Experienced in integrating Redux with React.'
              />

              <Skill
                title='Mui'
                icon={mui}
                imgDescription='Skill icon'
                skillDescription="Good understanding how to use Material-UI's higher-order components and hooks to
                connect UI to other parts of my application. Integrating Material-UI with React."
              />

              <Skill
                title='NPM'
                icon={npm}
                imgDescription='Skill icon'
                skillDescription='Installing and managing packages, working with package.json.'
              />

              <Skill
                title='GIT'
                icon={git}
                imgDescription='Skill icon'
                skillDescription='Good understanding how to create and switch between branches, how to merge branches together, and how to resolve conflicts when merging also have experience with forks and pull requests.'
              />
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
};
