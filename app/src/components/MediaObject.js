import React, { useEffect } from "react";
import { fetchCampaign } from "../redux/campaigns/campaignsSlice";
import { useDispatch, useSelector } from "react-redux";
import './styles/MediaObject.css';

function MediaObject() {
  const dispatch = useDispatch();
  const campaignHeader = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(fetchCampaign());
  },[dispatch]);

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
                  <li><img src={media.cover_photo_url} alt="#"/></li>
              ))}
              </ul>
            </div>
              <div>
                <ul>
                  <li>{campaign.tracking_link}</li>
                  <li><img src={campaign.download_url} alt="Download" /></li>
                </ul>
              </div>
            </>
        ))},
      </div>
    </div>
  );
}

export default MediaObject;
