import React, { useEffect, useContext } from "react"
import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap"
import ReactPlayer from "react-player"
import "./Medias.css"

const Medias = props => {
    const { media } = props
    
    return(
        <Col className="mediaCol">
            <Card>
                { media.media_type === "video" 
                    ? <ReactPlayer className="mediaImg" light={media.cover_photo_url} url={media.tracking_link} />
                    : <Card.Img className="mediaImg" style={{objectFit: "cover"}} rounded variant="top" src={media ? media.cover_photo_url : ""} />
                }
                <Card.Body>
                    <ButtonGroup className="buttonGroup">
                        <Button variant="secondary" className="copyButton"><i class="fas fa-link"></i></Button>
                        <Button variant="secondary" className="downloadButton"><i class="fas fa-download"></i></Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Medias
