import React from "react";

interface NavbarType {
    styleCss?: string;
    textName?: string;
}

const Navbar = ({styleCss, textName} : NavbarType) => {
    return <>
    <div className={styleCss}>sadsadsa</div>
    <h1 className="bg-yellow-500">{textName}</h1>
    </>
}


export default Navbar;