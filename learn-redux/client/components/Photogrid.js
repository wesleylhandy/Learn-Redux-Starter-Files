import React from 'react';

import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, ind)=><Photo key={ind} i={ind} {...this.props} post={post}/>)}
      </div>
    )
  }
});

export default PhotoGrid;