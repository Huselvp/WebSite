import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

const Carousell = ({ images }) => {
    return (
        <Carousel showThumbs={false} showStatus={false} showArrows={true} autoPlay={true} infiniteLoop={true}>
            {images.map((image, index) => (
                <div>
                    <img
                        key={index}
                        src={image}
                    />
                </div>
            ))}
        </Carousel>
    )
}

export default Carousell