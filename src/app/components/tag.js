import "../styling/tag.css"
import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ tag, onClick }) {
    return (
      <div>
        <p className="tag" onClick={onClick}>{tag}</p>
      </div>
    );
  }
  
Tag.propTypes = {
  tags: PropTypes.string,
  onClick: PropTypes.func
}

Tag.defaultProps = {
  tags: ""
}