import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColors } from '../../actions';
import { updateColors } from '../../utils/helper';
import { postProject } from '../../thunks/postProject';

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      projectSelection: '',
      newProject: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { postProject } = this.props;
    const { newProject } = this.state;
    postProject({ name: newProject });
  };

  render() {
    const { projects, colors, setColors } = this.props;
    const { projectSelection } = this.state;
    const options = projects.map(project => {
      return (
        <option key={project.id} value={project.name}>
          {project.name}
        </option>
      );
    });
    return (
      <div className='color-controls'>
        <button
          className='generate-color-button'
          onClick={() => setColors(updateColors(colors))}
        >
          Generate!
        </button>
        <select
          name='projectSelection'
          value={projectSelection}
          onChange={this.handleChange}
        >
          {options}
          <option value='New Project'>New Project</option>
        </select>
        {projectSelection === 'New Project' && (
          <input
            name='newProject'
            placeholder='Project Name'
            onChange={this.handleChange}
          />
        )}
        <button onClick={this.handleClick}>Save</button>
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
  postProject: project => dispatch(postProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
