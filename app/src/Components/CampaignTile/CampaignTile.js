import React, { useEffect, useContext } from "react"
import { CampaignContext } from "../CampaignProvider/CampaignProvider"
import Medias from "../Medias/Medias"
import { Card, Row, Col } from "react-bootstrap"
import "./CampaignTile.css"

const CampaignTile = props => {
    const { campaign } = props

    const campaignMedias = campaign && campaign.medias ? campaign.medias.map((media) => <Medias key={media.id} media={media} />) : "" 

    return(
        <Card className="campaignCard">
            <Row noGutters>
                <Col className="campaignCol">
                    <Card.Img className="cardImg" style={{objectFit: "cover"}} rounded variant="top" src={campaign.campaign_icon_url ? campaign.campaign_icon_url : ""} />
                </Col>
                <Col className="campaignCol campaignTitle">
                    {campaign.campaign_name ? <h3 className="campaignTitleText">{campaign.campaign_name}</h3> : ""}
                    {campaign.pay_per_install ? <h4 className="per_install">{campaign.pay_per_install} per install</h4> : ""}
                </Col>
            </Row>
            <Row className="mediaRow">
                {campaignMedias}
            </Row>
        </Card>
    )
}

export default CampaignTile
