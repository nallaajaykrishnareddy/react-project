import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem key={repo.id} repo={repo} />)
    // return repos.map(repo => {console.log(repo)})
}
Repos.propTypes = {
    repos: PropTypes.array.isRequired
}
export default Repos;