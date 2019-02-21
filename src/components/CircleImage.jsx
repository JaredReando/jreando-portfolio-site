import React from 'react';



function CircleImage(props) {
  const styleObject = {
    height: props.imageSize,
    width: props.imageSize,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid black'
  };

  return (
    <img style={styleObject} src={props.imagePath}></img>
  );
}

export default CircleImage;
