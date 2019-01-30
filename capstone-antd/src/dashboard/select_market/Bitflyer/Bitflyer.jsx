import React, { Component } from 'react';

// import Candlestick_USD as default
import Candlestick_JPY from "./candlestick/Candlestick_JPY";

import "../../css/exchangeList.css";

import { Row, Col, Button, Affix } from 'antd';
import { Switch, Route, NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Bitflyer extends Component {
    constructor(props) {
        super(props)   
    }

    state = {
        top: 10,
        bottom: 10,
      };
    
    render() { 
        return ( 
            <div>
                <Affix offsetTop={this.state.top}>
                    <Row>
                        <Col id="exchangelist_currency" span={24}>
                            <NavLink to="/dashboard/Selected_Market/Bitflyer"><Button id="currency">JPY</Button></NavLink>
                            <span id="buttonSpan"></span>
                            <Button id="currency"><AnchorLink href="#section1">Candlestick Chart</AnchorLink></Button>
                        </Col>
                    </Row>
                </Affix>

                <Switch>
                    <Route exact path="/dashboard/Selected_Market/Bitflyer" component={Candlestick_JPY} />
                </Switch>
            </div>
         );
    }
}
 
export default Bitflyer;