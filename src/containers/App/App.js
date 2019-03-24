import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';
import { setColors } from '../../actions';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { updateColors } from '../../utils/helper';
import ColorContainer from '../ColorContainer/ColorContainer';

export class App extends Component {
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchPalettes();
    this.props.setColors(updateColors());
  }

  render() {
    return (
      <div className="App">
        <h1>We're runnin!!!</h1>
        <ColorContainer />
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
