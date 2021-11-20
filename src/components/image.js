import React from 'react';

const Image = ({ nameClass, path, alt }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images${path}`}
      className={nameClass ? nameClass : null}
      alt={alt ? alt : path}
    />
  );
};
export default Image;
