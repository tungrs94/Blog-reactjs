import React from 'react';
import ContentTop from "./Content/ContentTop";
import ContentBottom from "./Content/ContentBottom";
import ContenBetween from "./Content/ContenBetween";


function Content(props) {
    return (
        <div>
            <ContentTop/>
            <ContenBetween/>
            <ContentBottom/>
        </div>
    );
}

export default Content;