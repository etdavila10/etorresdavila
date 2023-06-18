import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavBar = ({ activeNav }) => {

  return (
    <div id="nav-container">
      <nav id="top-nav">
        <ul>
        {activeNav === "home"
          ? <AnchorLink className="active" to="/#welcome" title="Home"/>
          : <AnchorLink to="/#welcome" title="Home"/>
        }
        {activeNav === "publications"
          ? <AnchorLink className="active" to="/#publications" title="Publications"/>
          : <AnchorLink to="/#publications" title="Publications"/>
        }
        {activeNav === "projects"
          ? <AnchorLink className="active" to="/#projects" title="Projects"/>
          : <AnchorLink to="/#projects" title="Projects"/>
        }
        {activeNav === "teaching"
          ? <AnchorLink className="active" to="/#teaching" title="Teaching"/>
          : <AnchorLink to="/#teaching" title="Teaching"/>
        }
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;