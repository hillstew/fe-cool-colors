import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { withRouter, Route, Switch } from 'react-router-dom';
import { setProjects } from '../../actions'
import { fetchProjects } from '../../thunks/fetchProjects'


export class App extends Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div className="App">
        <h1>We're runnin!!!</h1>
      </div>
    );
  }
}


export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
  error: state.error,
  isLoading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  setProjects: (projects) => dispatch(setProjects(projects)),
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
