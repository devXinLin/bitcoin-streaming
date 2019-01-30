import React from 'react';
// import USD version of Overall_Candlestick - default
import Overall_Candlestick_USD from "./Overall_Candlestick_USD";
// import JPY version of Overall_Candlestick
import Overall_Candlestick_JPY from "./Overall_Candlestick_JPY";
// import EUR version of Overall_Candlestick_EUR
import Overall_Candlestick_EUR from "./Overall_Candlestick_EUR";
import { Row, Col, Button, Affix} from 'antd';
import { Route, Switch, NavLink} from 'react-router-dom';

export default class Overall_Candlestick extends React.Component {

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
                            <NavLink to="/dashboard/Charts/Overall_Candlestick"><Button id="currency">USD</Button></NavLink>
                            <NavLink to="/dashboard/Charts/Overall_Candlestick/Overall_Candlestick_JPY"><Button id="currency">JPY</Button></NavLink>
                            <NavLink to="/dashboard/Charts/Overall_Candlestick/Overall_Candlestick_EUR"><Button id="currency">EUR</Button></NavLink>
                        </Col>
                    </Row>
                </Affix>

                <Switch>
                    <Route exact path="/dashboard/Charts/Overall_Candlestick" component={Overall_Candlestick_USD} />
                    <Route path="/dashboard/Charts/Overall_Candlestick/Overall_Candlestick_JPY" component={Overall_Candlestick_JPY} />
                    <Route path="/dashboard/Charts/Overall_Candlestick/Overall_Candlestick_EUR" component={Overall_Candlestick_EUR} />
                </Switch>
            </div>
        )
    }
}