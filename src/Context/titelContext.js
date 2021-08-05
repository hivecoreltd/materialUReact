import React from "react";


export const TitelContext = React.createContext();

export const TitelProvider = (props) => {

    const [titel, setTitel] = React.useState("3s ERP")
    // const [showSubs, setShowsubs] = React.useState(false)

    return (
        <TitelContext.Provider value={[titel, setTitel]}>
            {props.children}
        </TitelContext.Provider>
    )
}