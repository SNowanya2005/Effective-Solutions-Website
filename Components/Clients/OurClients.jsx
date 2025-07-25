import React from 'react';
import './OurClients.css';
import who from './who1.png';
import kandos from './kandos.jpeg';
import nestle from './Nestle-Logo.jpg';
import softlogic from './softlogic.jpeg';
import jat from './jatlogo.png';
import glomark from './glomark.jpg';
import mas from './mas.jpg';
import dilmah from './dilmah.jpeg';
import ohira from './ohira.png';
import netcracker from './netcracker.jpeg';
import fb from './F&B.png';
import odel from './odel.png';
import pn from './pn.png';
import thuru from './thuru.png';
import rsl from './rsl.png';
import police from './police.png';
import sierra from './sierra.png';
import tasty from './tasty.jpeg';
import solidaridad from './solidaridad.webp';
import lassanaflora from './lassanaflora.png';
import sl from './sl.png';

const OurClients = () => {
  const clients = [
    {
      id: 1,
      name: "World Health Organization",
      image: who,
      size: 'large'
    },
    {
      id: 2,
      name: "Kandos", 
      image: kandos,
      size: 'medium'
    },
    {
      id: 3,
      name: "Nestle",
      image: nestle,
      size: 'small'
    },
    {
      id: 4,
      name: "Softlogic",
      image: softlogic,
      size: 'large'
    },
    {
      id: 5,
      name: "JAT Holdings",
      image: jat,
      size: 'medium'
    },
    {
      id: 6,
      name: "GLOMARK",
      image: glomark,
      size: 'small'
    },
    {
      id: 7,
      name: "Sierra",
      image: sierra,
      size: 'large'
    },
    {
      id: 8,
      name: "OHIRA Co.",
      image: ohira,
      size: 'medium'
    },
    {
      id: 9,
      name: "Dilmah",
      image: dilmah,
      size: 'small'
    },
    {
      id: 10,
      name: "MAS",
      image: mas,
      size: 'large'
    },
    {
      id: 11,
      name: "ODEL",
      image: odel,
      size: 'medium'
    },
    {
      id: 12,
      name: "Thuru",
      image: thuru,
      size: 'small'
    },
    {
      id: 13,
      name: "RSL Delux",
      image: rsl,
      size: 'medium'
    },
    {
      id: 14,
      name: "LassanaFlora",
      image: lassanaflora,
      size: 'large'
    },
    {
      id: 15,
      name: "Netcracker",
      image: netcracker,
      size: 'small'
    },
    {
      id: 16,
      name: "F&W",
      image: fb,
      size: 'medium'
    },
    {
      id: 17,
      name: "Solidaridad",
      image: solidaridad,
      size: 'large'
    },
    {
      id: 18,
      name: "Tasty Lanka",
      image: tasty,
      size: 'small'
    },
    {
      id: 19,
      name: "Sri Lanka Police",
      image: police,
      size: 'medium'
    },
    {
      id: 20,
      name: "Sri Lanka Army",
      image: sl,
      size: 'large'
    }
  ];

  return (
    <section className="our-clients">
      <div className="our-clients__center">
          <h5 className="our-clients__tagline">
            Trust Drives Our Success
          </h5>
        </div>
      <div className="our-clients__container">

        {/* Scattered Client Logos */}
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`client-logo client-logo--${client.size}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <img
                src={client.image}
                alt={client.name}
                className="client-logo__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;