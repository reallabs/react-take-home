import React, { useEffect } from "react";
import { fetchCampaign } from "../redux/campaigns/campaignsSlice";
import { useDispatch, useSelector } from "react-redux";
import './styles/MediaObject.css';
import { FaLink, FaDownload, FaPlay } from "react-icons/fa6";

function MediaObject() {
  const dispatch = useDispatch();
  const campaignHeader = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(fetchCampaign());
  },[dispatch]);

  // const handleMediaType = () => {
  //   let mediaType = campaignHeader.campaigns.medias.media_type;
  //   (mediaType === "video") ? <FaPlay /> : " ";

  //   }

  return (
    <div className="photo-container">
      <div className="scrollable-list">
        {campaignHeader.campaigns.map((campaign) => (
          <>
            <div className="header">
              <div className="campaign-icon">
                <img src={campaign.campaign_icon_url} alt="Campaign Icon"/>
              </div>
              <div>
                <ul className="name-pay">
                  <li>{campaign.campaign_name}</li>
                  <li> {campaign.pay_per_install}</li>
                </ul>
              </div>
            </div>
            <div className="scrollable-container">
              <ul className="photo">
                {campaign.medias.map((media) => (
                  <li key={campaign.id} className="media-item">
                    <img src={media.cover_photo_url} alt="#" />
                    <div className="button-container">
                      <button type="button" className="link">
                        <a
                          href={media.tracking_link}
                          className="tracking-link"
                          target="blank"
                          rel="noreferrer"
                        >
                          <FaLink className="link-size" />
                        </a>
                      </button>
                      <button type="button" className="link">
                        <a
                          href={media.download_url}
                          className="download"
                          download
                        >
                          <FaDownload className="link-size" />
                        </a>
                      </button>
                    </div>
                    <div className="media-type">
                      {media.media_type === "video" ? <FaPlay className="play" /> : " "};
                    </div>
                  </li>
                ))}
              </ul>
            </div>             
          </>
        ))}
      </div>
    </div>
  );
}

export default MediaObject;
