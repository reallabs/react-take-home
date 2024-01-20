import React from "react";
import { fetchCampaign } from "../redux/campaigns/campaignsSlice";

function Details() {
  console.log('test');
  console.log(fetchCampaign());
  
  return (
    <div>
      Celebs icon
      Celebs-celebrity Lookalike
    </div>
  );
}

export default Details;
