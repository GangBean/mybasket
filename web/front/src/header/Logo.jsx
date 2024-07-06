import React from "react";

const Logo = ( {imageUrl, logoUrl} ) => {
    return (
        <div className="logo">
            <LogoImage imageUrl={imageUrl} />
            <LogoLink logoUrl={logoUrl} />
        </div>
    );
};

const LogoLink = ( {logoUrl} ) => {
    return (
        <a className='logoLink' href={logoUrl} />
    );
};

const LogoImage = ( {imageUrl} ) => {
    return (
        <img className='logoImage' src={imageUrl}></img>
    );
};

export default Logo;
