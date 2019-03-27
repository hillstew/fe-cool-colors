import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { isLoading, error } = this.props;
    return (
      <div className='App'>
        {isLoading && <h1 className='notice'>Loading...</h1>}
        {error && <h1 className='notice'>We're sorry, there seems to have been an error.</h1>}
        <ColorContainer />
        <ProjectContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
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

App.propTypes = {
  fetchProjects: PropTypes.func,
  fetchPalettes: PropTypes.func,
  setColors: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};
