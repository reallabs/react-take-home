import React, { useState } from "react"

export const CampaignContext = React.createContext()

const CampaignProvider = props => {
    const [campaigns, setCampaigns] = useState({})

    const getCampaigns = () => {
        return fetch("https://www.plugco.in/public/take_home_sample_feed")
            .then(res => res.json())
            .then(setCampaigns)
    }

    return (
        <CampaignContext.Provider value={{
            campaigns,
            getCampaigns
        }}>
            {props.children}
        </CampaignContext.Provider>
    )
}

export default CampaignProvider
