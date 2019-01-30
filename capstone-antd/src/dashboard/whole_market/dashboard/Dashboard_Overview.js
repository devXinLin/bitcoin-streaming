import React, { Component } from 'react';
// import USD version - default
import MarketsUSD from "../exchange_list/Markets_USD";
// import USD version of Overall_Candlestick - default
import OverallCandlestickUSD from "../charts/overall_candlestick/Overall_Candlestick_USD";
// import USD version of Volume_Total - default
import VolumeTotalUSD from "../charts/volume_total/VolumeTotal_USD";
// import USD version of Market Analysis - default
import AnalysisExchange from "../analysis/Analysis_Exchange";

class Dashboard_Overview extends Component {
    constructor(props) {
        super(props)   
    }

    state = {  };

    render() { 
        return ( 
            <div>
                <section id="overview1">
                    <MarketsUSD />
                </section>
            
                <section id="overview2">
                    <OverallCandlestickUSD />
                </section>

                <section id="overview3">
                    <VolumeTotalUSD />
                </section>

                <section id="overview5">
                    <AnalysisExchange />
                </section>
            </div>
         );
    }
}
 
export default Dashboard_Overview;