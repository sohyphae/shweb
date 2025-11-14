import React from 'react';
import ClusterGrowth from './ClusterGrowth';

const Header: React.FC = () => {
  return (
    <section id="header" className="header">
      <ClusterGrowth />
      <div className="logo logo-clip-4000">
        <h1>
            <span>S</span>
            <span>O</span>
            <span>P</span>
            <span>H</span>
            <span>I</span>
            <span>E</span>
        </h1>    
        <h1>
            <span>H</span>
            <span>Y</span>
            <span>P</span>
            <span>H</span>
            <span>A</span>
            <span>E</span>
        </h1>  
      </div>
    </section>
  );
};

export default Header;