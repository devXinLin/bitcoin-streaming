import React from 'react';
// import USD version of Volume in Total - default version
import VolumeTotal_USD from "./VolumeTotal_USD";
// import JPY version of Volume in Total
import VolumeTotal_JPY from "./VolumeTotal_JPY";
// import EUR version of Volume in Total - default version
import VolumeTotal_EUR from "./VolumeTotal_EUR";
import {Table, Icon, Row, Col, Button, Radio, Affix} from 'antd';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

export default class VolumeTotal extends React.Component {

    state = {
        top: 10,
        bottom: 10,
      }

    render() {

        const ButtonGroup = Button.Group;

        return (
            <div>
                <Affix offsetTop={this.state.top}>
                    <Row>
                        <Col id="exchangelist_currency" span={24}>
                            <NavLink to="/dashboard/Charts/Volume_Total"><Button id="currency">USD</Button></NavLink>
                            <NavLink to="/dashboard/Charts/Volume_Total/VolumeTotal_JPY"><Button id="currency">JPY</Button></NavLink>
                            <NavLink to="/dashboard/Charts/Volume_Total/VolumeTotal_EUR"><Button id="currency">EUR</Button></NavLink>
                        </Col>
                    </Row>
                </Affix>

                <Switch>
                    <Route exact path="/dashboard/Charts/Volume_Total" component={VolumeTotal_USD} />
                    <Route path="/dashboard/Charts/Volume_Total/VolumeTotal_JPY" component={VolumeTotal_JPY} />
                    <Route path="/dashboard/Charts/Volume_Total/VolumeTotal_EUR" component={VolumeTotal_EUR} />
                </Switch>
            </div>
        )
    }
}