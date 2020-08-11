import React, { useState } from 'react';
import './App.css';
import { Projects, Tasks } from './components';

export const App = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const onChangeProject = (id = null) => setCurrentProject(id);

  return (
    <div className="app">
      <Projects onChangeProject={onChangeProject} />

      {currentProject && <Tasks currentProject={currentProject} />}
    </div>
  );
};
