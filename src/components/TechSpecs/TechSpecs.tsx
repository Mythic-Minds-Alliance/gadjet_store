import React from 'react';

import './TechSpecs.scss';
import { Phone } from '../../types/phone';

const productDetails = [
  'Screen',
  'Resolution',
  'Processor',
  'RAM',
  'Built in memory',
  'Camera',
  'Zoom',
  'Cell',
];

type Props = {
  phone: Phone;
};

export const TechSpecs: React.FC<Props> = ({ phone }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = phone;

  return (
    <div className="TechSpecs">
      <ul className="TechSpecs--list">
        {productDetails.map(details => (
          <li className="TechSpecs--list-item">{details}</li>
        ))}
      </ul>

      <ul className="TechSpecs--characteristics">
        <li className="TechSpecs--characteristics-item">{screen}</li>
        <li className="TechSpecs--characteristics-item">{resolution}</li>
        <li className="TechSpecs--characteristics-item">{processor}</li>
        <li className="TechSpecs--characteristics-item">{ram}</li>
        <li className="TechSpecs--characteristics-item">{capacity}</li>
        <li className="TechSpecs--characteristics-item">{camera}</li>
        <li className="TechSpecs--characteristics-item">{zoom}</li>
        {cell.map(el => (
          <li className="TechSpecs--characteristics-item">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
