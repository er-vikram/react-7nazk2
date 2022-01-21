import React from 'react';
import './style.css';

const data = [
  {
    heading: 'Office Map',
    desc: [],
  },
  {
    heading: 'New Employee',
    desc: ['materials', 'Training'],
  },
  {
    heading: 'Office Events',
    desc: [
      {
        heading: '2018',
        desc: [
          'Summer Picnic',
          {
            heading: 'New Employee',
            desc: ['materials', 'Training'],
          },
          'Summer Picnic',
        ],
      },
    ],
  },
  {
    heading: 'Office Map',
    desc: [],
  },
  {
    heading: 'Office Map',
    desc: [],
  },
];

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

const getNode = (node) => {
  const desc = node.desc.map((ele) => {
    if (!isObject(ele)) {
      return <div className="point">{ele}</div>;
    }
    return getNode(ele);
  });

  if (desc.length == 0) {
    return <div>{node.heading}</div>;
  }

  return (
    <details open>
      <summary>{node.heading}</summary>
      <div className="description">{desc}</div>
    </details>
  );
};

export default function App() {
  const comp = data.map((node) => {
    const details = getNode(node);
    return details;
  });

  return <div>{comp}</div>;
}
