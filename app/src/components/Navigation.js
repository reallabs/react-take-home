import React from "react";
import * as FaIcons from "react-icons/fa6";
import './styles/Navigation.css';

function Navigation() {
  return (
    <div className="navbar">
      <FaIcons.FaBars />
      <div className="campaign">CAMPAIGNS</div>
      <div className="total-visit">129.5k</div>
    </div>
  );
}

export default Navigation;
