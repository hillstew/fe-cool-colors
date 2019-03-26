import React, { Component } from 'react';
import { PaletteCard } from '../../components/PaletteCard/PaletteCard';
import { connect } from 'react-redux';
import { deletePalette } from '../../thunks/deletePalette';

export class ProjectCard extends Component {
  render() {
    const { matchingPalettes, project, deletePalette, palettes } = this.props;
    const paletteCards = matchingPalettes.map(palette => {
      return (
        <PaletteCard
          palette={palette}
          deletePalette={deletePalette}
          palettes={palettes}
        />
      );
    });
    return (
      <div className="ProjectCard">
        <h3 className="project-name">{project.name}</h3>
        <button className="project-edit-button" />
        {paletteCards}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  palettes: state.palettes
});

export const mapDispatchToProps = dispatch => ({
  deletePalette: (id, palettes) => dispatch(deletePalette(id, palettes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCard);
