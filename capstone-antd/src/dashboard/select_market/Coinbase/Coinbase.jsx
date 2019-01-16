import React, { Component } from 'react';

// import Candlestick_USD as default
import Candlestick_USD from "./candlestick/Candlestick_USD";
// import Candlestick_EUR 
import Candlestick_EUR from "./candlestick/Candlestick_EUR";

import "../../css/exchangeList.css";

import {Table, Icon, Row, Col, Button, Radio, Affix, Avatar} from 'antd';
import { Switch, Route, NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Coinbase extends Component {
    constructor(props) {
        super(props)   
    }

    state = {
        top: 10,
        bottom: 10,
      }
    
    render() { 
        return ( 
            <div>
                <Affix offsetTop={this.state.top}>
                    <Row>
                        <Col id="exchangelist_currency" span={24}>
                            <NavLink to="/dashboard/Selected_Market/Coinbase"><Button id="currency">USD</Button></NavLink>
                            <NavLink to="/dashboard/Selected_Market/Coinbase/Candlestick_EUR"><Button id="currency">EUR</Button></NavLink>
                            <span id="buttonSpan"></span>
                            <Button id="currency"><AnchorLink href="#section1">Candlestick Chart</AnchorLink></Button>
                        </Col>
                    </Row>
                </Affix>

                <Switch>
                    <Route exact path="/dashboard/Selected_Market/Coinbase" component={Candlestick_USD} />
                    <Route path="/dashboard/Selected_Market/Coinbase/Candlestick_EUR" component={Candlestick_EUR} />
                </Switch>
            </div>
         );
    }
}
 
export default Coinbase;