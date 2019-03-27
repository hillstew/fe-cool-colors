import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setColors } from '../../actions';
import { updateColors } from '../../utils/helper';
import { postProject } from '../../thunks/postProject';
import { postPalette } from '../../thunks/postPalette';
import { postPaletteToProject } from '../../thunks/postPaletteToProject';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      projectSelection: '',
      newProject: '',
      newPalette: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { projects, colors, postPaletteToProject, postPalette } = this.props;
    const { newProject, newPalette, projectSelection } = this.state;
    if (projectSelection === 'New Project') {
      postPaletteToProject({ name: newProject }, {
        name: newPalette,
        color_1: colors[0].hex,
        color_2: colors[1].hex,
        color_3: colors[2].hex,
        color_4: colors[3].hex,
        color_5: colors[4].hex
      });
    } else {
      let projId;
      projects.forEach(project => {
        if (project.name === projectSelection) {
          projId = project.id
        }
      })

      postPalette({
        name: newPalette,
        color_1: colors[0].hex,
        color_2: colors[1].hex,
        color_3: colors[2].hex,
        color_4: colors[3].hex,
        color_5: colors[4].hex,
        project_id: projId
      })
    }
  };

  render() {
    const { projects, colors, setColors } = this.props;
    const { projectSelection, newProject, newPalette } = this.state;
    const options = projects.map(project => {
      return (
        <option key={project.id} value={project.name}>
          {project.name}
        </option>
      );
    });
    return (
      <div className='Controls'>
        <button
          className='generate-color-button'
          onClick={() => setColors(updateColors(colors))}>
          Generate colors
        </button>
        <select
          name='projectSelection'
          value={projectSelection}
          onChange={this.handleChange}
        >
          <option value='Select Project'>Select Project</option>
          {options}
          <option value='New Project'>New Project</option>
        </select>
        <label>Project Name
        <input
          name='newProject'
          value={
            projectSelection !== 'New Project' ? projectSelection : newProject
          }
          placeholder='Select Existing Project or New Project Above'
          onChange={this.handleChange}
        />
        </label>
        <label>Palette Name
        <input
          name='newPalette'
          value={newPalette}
          placeholder='Palette Name'
          onChange={this.handleChange}
        />
        </label>
        <button onClick={this.handleClick} className='save-colors-button'>Save</button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  colors: state.colors,
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  setColors: colors => dispatch(setColors(colors)),
  postProject: project => dispatch(postProject(project)),
  postPalette: palette => dispatch(postPalette(palette)),
  postPaletteToProject: (project, palette) =>
    dispatch(postPaletteToProject(project, palette))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

Controls.propTypes = {
  projects: PropTypes.array,
  colors: PropTypes.array,
  setColors: PropTypes.func,
  postProject: PropTypes.func,
  postPalette: PropTypes.func,
  postPaletteToProject: PropTypes.func
}