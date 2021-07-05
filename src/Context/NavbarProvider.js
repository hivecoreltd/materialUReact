import React, { useState } from 'react'



export const Navbar = React.createContext();



export const NavbarProvider = (props) => {
    const [Nav, setNav] = React.useState(true)
    return (
        <Navbar.Provider value={[Nav, setNav]}>
            {props.children}            
        </Navbar.Provider>
    )
}
