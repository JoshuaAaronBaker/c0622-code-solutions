import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  '../images/brook.webp',
  '../images/chopper.webp',
  '../images/franky.webp',
  '../images/luffy.webp',
  '../images/nami.webp',
  '../images/nicorobin.webp',
  '../images/sanji.webp',
  '../images/usopp.webp',
  '../images/zoro.webp'
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel images = {images} />);
