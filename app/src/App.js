import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Offer from './components/Offer';
import NavTakeHome from './components/NavTakeHome';
import CarouselTakeHome from './components/CarouselTakeHome';

function App() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then(resp => resp.json())
      .then(resp => setUserData(resp.campaigns));
  }, []);
  console.log(userData);
  return (
    <div className="App">
      <div>
        <NavTakeHome />
        <div className="app-body">
          {userData && userData.length > 0 ? userData.map(offer =>
            <div key={offer.id} className="offer-page">
              <div >
                <Offer 
                  id={offer.id}
                  campaign_name={offer.campaign_name}
                  campaign_icon_url={offer.campaign_icon_url}
                  pay_per_install={offer.pay_per_install} />
              </div>
              <CarouselTakeHome medias={offer.medias}/>
            </div>
          )
            : <div>XX</div>
          }
        </div>
      </div>
    </div>
  );
}
export default App;
