import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { withRouter, Route, Switch } from 'react-router-dom';
import { setColors } from '../../actions';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { generateColors } from '../../utils/helper';
import ColorContainer from '../ColorContainer/ColorContainer';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

export class App extends Component {
  componentDidMount() {
    const { fetchProjects, fetchPalettes, setColors } = this.props;
    fetchProjects();
    fetchPalettes();
    setColors(generateColors());
  }

  render() {
    return (
      <div className='App'>
        <ColorContainer />
        <ProjectContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  projects: state.projects,
  palettes: state.palettes,
  error: state.error,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  setColors: colors => dispatch(setColors(colors)),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchPalettes: () => dispatch(fetchPalettes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
