import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  const path = props.location.pathname;
  return (
    <div style={{
      position: 'relative',
      top: '50%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      <code>THIS IS AN ERROR. WE CAN'T FIND THE PAGE <span style={{color: 'red'}}>'{path}'</span> : (</code>
      <br/>
      <code>PHONE <Link to='/'>HOME</Link></code>
    </div>
  );
}

Error404.propTypes = {
  path: PropTypes.string
};


export default Error404;
