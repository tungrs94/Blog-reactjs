import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

function Anhbia(props) {
    const images = [
        {url: "https://techtalk.vn/wp-content/uploads/2016/06/techtalk-reactjs.png"},
        {url: "https://sogo.edu.vn/wp-content/uploads/2019/08/javascript-la-gi.jpg"},
    ];
    return (
        <SimpleImageSlider
            width='100%'
            height='500px'
            images={images}
        />
    );
}

export default Anhbia;