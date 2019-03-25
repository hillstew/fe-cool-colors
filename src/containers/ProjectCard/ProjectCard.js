import React, { Component } from 'react';
import { PaletteCard } from '../../components/PaletteCard/PaletteCard';

export class ProjectCard extends Component {
  render() {
    const { matchingPalettes, project } = this.props;
    const palettes = matchingPalettes.map(palette => {
      return <PaletteCard palette={palette} />;
    });
    return (
      <div className="ProjectCard">
        <h1 className="project-name">{project.name}</h1>
        {palettes}
      </div>
    );
  }
}
