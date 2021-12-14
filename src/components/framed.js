import React from 'react';
import Image from './image';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

export default function Framed({ item, dark, right }) {
  return (
    <div className={`framed colorful ${right ? 'right' : ''}`}>
      <Link to={`/chapter/${slugify(item.type)}`}>
        <Image
          nameClass={`${dark ? '' : ' inverted'}`}
          path={`/pismena/${item.text.charAt(0).toLowerCase()}.png`}
        />
        <h6
          className={`${dark ? '' : 'black'}`}
          style={{ fontWeight: 300, margin: '20px 0 -10px' }}
        >
          {item.type}
        </h6>
        <h6>{item.title}</h6>

        {right ? (
          <div className='arrow'>
            <div className='line2 main-line' style={{ float: 'right' }}></div>
            <div
              className='triangle'
              style={{ float: 'right', marginRight: 4 }}
            >
              <div className='line2' style={{ top: 3 }}></div>
              <div className='line2 bottom' style={{ top: -3 }}></div>
            </div>
          </div>
        ) : (
          <div className='arrow'>
            <div className='line2 main-line'></div>
            <div className='triangle'>
              <div className='line2 top'></div>
              <div className='line2 bottom'></div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
