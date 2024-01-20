import React, { useEffect } from "react";
import { fetchCampaign } from "../redux/campaigns/campaignsSlice";
import { useDispatch } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampaign());
  },[dispatch]);

  return (
    <div>
      Celebs icon
      Celebs-celebrity Lookalike
    </div>
  );
}

export default Details;
