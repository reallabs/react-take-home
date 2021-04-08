import React, { useEffect, useContext } from "react"
import { CampaignContext } from "../CampaignProvider/CampaignProvider"
import { Container } from "react-bootstrap"
import CampaignTile from "../CampaignTile/CampaignTile"
import "./Home.css"

const Home = props => {
    const { campaigns, getCampaigns } = useContext(CampaignContext)

    const campaignTiles = campaigns && campaigns.campaigns ? campaigns.campaigns.map((campaign) => <CampaignTile key={campaign.id} campaign={campaign}/>) : ""
    
    useEffect(() => {
        getCampaigns()
    }, [])

    return(
        <Container className="homeContainer">
            {campaignTiles}
        </Container>
    )
}

export default Home
