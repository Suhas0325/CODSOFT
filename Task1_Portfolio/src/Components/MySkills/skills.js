import React from 'react';
import { skills } from './MySkills';
import './skills.css';

const Skills = () => {
  return (
    <div id="skills" className="container">
      <div className="wrapper">
        <div className="title">Skills</div>
        
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.title}>
              <h2 className="skill-title">{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <img className="skill-image" src={item.image} alt={item.name} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
