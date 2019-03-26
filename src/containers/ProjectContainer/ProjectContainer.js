import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';

export class ProjectContainer extends Component {
  render() {
    const { projects, palettes } = this.props;
    const projectCards = projects.map(project => {
      const matchingPalettes = palettes.filter(palette => {
        return palette.project_id === project.id;
      });

      return (
        <ProjectCard matchingPalettes={matchingPalettes} project={project} key={project.id} />
      );
    });

    return <div className="ProjectContainer">{projectCards}</div>;
  }
}

export const mapStateToProps = state => ({
  projects: state.projects,
  palettes: state.palettes
});

export const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer);
