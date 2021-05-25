
import React from 'react';
import './BadgeNew.scss';
const src = "https://theme.hstatic.net/1000230642/1000679613/14/new.png?v=894" ;
function BadgeNew(props) {
    return (
        <>
            <img src = {src} className = "badge-new" alt = "badge-new" />
        </>
    );
}

export default BadgeNew;