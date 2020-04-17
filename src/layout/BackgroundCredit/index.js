import React from 'react';


const BackgroundCredit = () => {
    const creditStyle = {
        backgroundColor: 'rgba(255,255,255,0.3)',
        color: '#333',
        textDecoration: 'none',
        padding: '5px 6px 9px 6px',
        fontFamily: 'Helvetica, sans-serif',
        fontSize:'12px',
        fontWeight:'bold',
        lineHeight:'1.2',
        display:'inline-block',
        borderRadius:'3px',
        zIndex: '1'
    }
    const spanStyle = {
        height: '12px',
        width: 'auto',
        position: 'relative',
        verticalAlign: 'middle',
        top:'-2px',
        fill: '#333',
        display: 'inline-block',
        padding: '2px 3px 3px 3px',
        zIndex: '1'
    }

    return(
        <a 
        style={creditStyle} 
        href="https://unsplash.com/@timoun?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Tim Oun">
            <span style={spanStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    style={spanStyle} 
                    viewBox="0 0 32 32">
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
            </span>
        <span style={spanStyle}> Background: Tim Oun</span></a>
    );
}
export default BackgroundCredit;