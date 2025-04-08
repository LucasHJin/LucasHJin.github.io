import "../styling/tag.css"
import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ tag }) {
    return (
      <div>
        <p className="tag">{tag}</p>
      </div>
    );
  }
  
Tag.propTypes = {
  tags: PropTypes.string
}

Tag.defaultProps = {
  tags: ""
}