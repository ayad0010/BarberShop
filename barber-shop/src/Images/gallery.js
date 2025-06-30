import React from "react";
import Gallery from 'react-photo-gallery';
import barber1 from './barber-background.jpg';


const photos = [
  { src: barber1, width: 4, height: 3 },
  // add more as needed
];



export default function BarberGallery() {
    return <Gallery photos={photos}/>;
}