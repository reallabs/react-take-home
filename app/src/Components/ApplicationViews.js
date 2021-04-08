import React from "react"
import { Route } from "react-router-dom"

import CampaignProvider from "./CampaignProvider/CampaignProvider"
import NavBar from "./NavBar/NavBar"
import Home from './Home/Home'

export const ApplicationViews = () => {
    return <>
        <main>
            <CampaignProvider>
                <Route render={props => <NavBar {...props} />} />
                <Route exact path="/" render={props => <Home {...props} />} />
            </CampaignProvider>
        </main>
    </>
}
