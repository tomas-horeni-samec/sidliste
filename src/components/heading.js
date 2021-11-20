import React from 'react';
import { Image } from './';

const Heading = ({ lines }) => {
  return (
    <section className='flex-center full' style={{ flexDirection: 'column' }}>
      {lines.map((line) => (
        <div className='flex-center letters'>
          {line.split('').map((letter) => (
            <Image
              path={`/pismena/${letter}.png`}
              nameClass={`letter-${letter}`}
            />
          ))}
        </div>
      ))}
    </section>
  );
};
export default Heading;
