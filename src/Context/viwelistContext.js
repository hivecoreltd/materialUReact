import React from "react";


export const ViewlistContext = React.createContext();

export const ViwelistProvider = (props) => {

    const [viewlist, setViewList] = React.useState([])
    // const [showSubs, setShowsubs] = React.useState(false)

    return (
        <ViewlistContext.Provider value={[viewlist, setViewList]}>
            {props.children}
        </ViewlistContext.Provider>
    )
}