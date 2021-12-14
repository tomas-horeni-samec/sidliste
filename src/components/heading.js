import React from 'react';
import { Image } from './';

const Heading = ({ text, color }) => {
  return (
    <div
      className={`flex-center`}
      style={{ flexWrap: 'wrap', alignContent: 'center' }}
    >
      {text.split(' ').map((word) => (
        <div className={`flex-center letters filter-${color}`}>
          {word.split('').map((letter) => (
            <Image
              path={`/pismena/${letter}.png`}
              nameClass={`letter-${letter}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Heading;
