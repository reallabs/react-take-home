import React, { useEffect } from "react";
import { fetchCampaign } from "../redux/campaigns/campaignsSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const campaignHeader = useSelector((state) => state.campaigns.campaigns);

  useEffect(() => {
    dispatch(fetchCampaign());
  },[dispatch]);

  console.log('CampaignHeader', campaignHeader);


  return (
    <div className="header">
      {campaignHeader.campaigns.map((campaign) => (
        <>
          <div className="campaign-icon">
            <img src="{campaign.campaign_icon_url}" alt="Campaign Icon"/>
          </div>
          <div>
            <ul>
              <li>{campaign.campaign_name}</li>
              <li> {campaign.pay_per_install}</li>
            </ul>
          </div>
          <div className="scrollable-list">
              {campaign.cover_photo_url.map((photo) => (
                <ul>
                  {<li>photo</li>}
                </ul>
              ))}  
          </div>
      </>
      ))}
    </div>
  );
}

export default Header;
