import { useEffect } from 'react'

const useSlider = (slideImage, slideText, images) => {
 let slideCounter = 0;

 useEffect(() => startSlider())

 const startSlider =() => {
    slideImage.current.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ), url(${images[0].src})`;
        slideText.current.innerHTML = images[0].text;
}