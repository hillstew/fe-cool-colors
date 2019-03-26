import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PaletteCard } from '../../components/PaletteCard/PaletteCard';
import { deletePalette } from '../../thunks/deletePalette';
import { deleteProject } from '../../thunks/deleteProject';
import { setColors } from '../../actions';

export class ProjectCard extends Component {
  render() {
    const {
      matchingPalettes,
      project,
      deletePalette,
      palettes,
      deleteProject,
      projects,
      setColors
    } = this.props;
    const paletteCards = matchingPalettes.map(palette => {
      return (
        <PaletteCard
          palette={palette}
          deletePalette={deletePalette}
          palettes={palettes}
          setColors={setColors}
          key={palette.id}
        />
      );
    });
    return (
      <div className='ProjectCard'>
        <h3 className='project-name'>{project.name}</h3>
        <button className='project-edit-button' />
        <button
          className='delete-project-button'
          onClick={() => deleteProject(project.id, palettes, projects)}
        />
        {paletteCards}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  palettes: state.palettes,
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  deletePalette: (id, palettes) => dispatch(deletePalette(id, palettes)),
  deleteProject: (id, palettes, projects) =>
    dispatch(deleteProject(id, palettes, projects)),
  setColors: (colors) => dispatch(setColors(colors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCard);
