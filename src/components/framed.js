import React, { useState, useEffect } from 'react';
import { slugify } from '../utils/slugify';
import Image from './image';

export default function Framed({ item, dark }) {
  return (
    <div class='image framed'>
      <Image
        nameClass={`${dark ? '' : ' inverted'}`}
        path={`/pismena/${item.text.charAt(0).toLowerCase()}.png`}
      />
      <h4
        className={`${dark ? '' : 'black'}`}
        style={{ fontWeight: 300, margin: '20px 0 -10px' }}
      >
        {item.type}
      </h4>
      <h4 style={{ fontWeight: 900 }}>{item.title}</h4>
      <div class='arrow'>
        <div class='line2 main-line'></div>
        <div class='triangle'>
          <div class='line2 top'></div>
          <div class='line2 bottom'></div>
        </div>
      </div>
    </div>
  );
}
