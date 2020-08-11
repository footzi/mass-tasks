import React, { useEffect, useState } from 'react';
import './projects.css';
import { Api } from '../../modules/api';

export const Projects = ({ onChangeProject = () => {} }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async function () {
      const projects = await Api.getProjects();

      setProjects(projects);
    })();
  }, []);

  return (
    <ul className="projects">
      {projects.map(({ id, name }) => {
        return (
          <li className="projects__item" key={id}>
            <button onClick={() => onChangeProject(id)}>{name}</button>
          </li>
        );
      })}
    </ul>
  );
};
