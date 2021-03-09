import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const PageConstruction = () => (
  <UnderConstruction
    background={{
      image: 'https://images.unsplash.com/photo-1478432780021-b8d273730d8c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: 'https://image.ibb.co/b7guP5/Rubbby_without_text.png',
      alt: 'alt text'
    }}
    title={{
      text: 'Murillo Dev'
    }}
    description={{
      text: 'The website is under construction. We\'ll be here soon!',
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'https://twitter.com/murillo_dev',
        image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
      },
      {
        url: 'https://www.linkedin.com/in/jhon-mario-murillo-cordoba-420528124/',
        image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
      },
      {
        url: 'mailto:jhonmurillo2014@gmail.com',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
      {
        url: 'https://medium.com/@jhonmurillo2014',
        image: 'https://www.flaticon.com/svg/vstatic/svg/2111/2111502.svg?token=exp=1615326488~hmac=47bf2ac1e63a840ecdf6ab6c04e7805e',
      },
    ]}
  />
);

export default PageConstruction;