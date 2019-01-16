import React, { Component } from 'react';
// import USD version - default
import Markets_USD from "../exchange_list/Markets_USD";
// import USD version of Overall_Candlestick - default
import Overall_Candlestick_USD from "../charts/overall_candlestick/Overall_Candlestick_USD";
// import USD version of Volume_Total - default
import VolumeTotal_USD from "../charts/volume_total/VolumeTotal_USD";
// import USD version of Market Analysis - default
import Analysis_Exchange from "../analysis/Analysis_Exchange";

import { Affix } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Dashboard_Overview extends Component {
    constructor(props) {
        super(props)   
    }

    state = {  }

    render() { 
        return ( 
            <div>
                <section id="overview1">
                    <Markets_USD />
                </section>
            
                <section id="overview2">
                    <Overall_Candlestick_USD />
                </section>

                <section id="overview3">
                    <VolumeTotal_USD />
                </section>

                <section id="overview5">
                    <Analysis_Exchange />
                </section>
            </div>
         );
    }
}
 
export default Dashboard_Overview;