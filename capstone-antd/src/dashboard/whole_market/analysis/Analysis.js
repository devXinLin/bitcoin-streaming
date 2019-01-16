import React from 'react';
import "../../css/exchangeList.css";
// import Exchange version - default
import Analysis_Exchange from "./Analysis_Exchange";
// import Currency version
import Analysis_Currency from "./Analysis_Currency";
import {Table, Icon, Row, Col, Button, Radio, Affix} from 'antd';
import { Switch, Route, NavLink } from 'react-router-dom';

export default class Analysis extends React.Component {

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
                            <NavLink to="/dashboard/Analysis"><Button id="currency">Exchange</Button></NavLink>
                            <NavLink to="/dashboard/Analysis/Analysis_Currency"><Button id="currency">Currency</Button></NavLink>
                        </Col>
                    </Row>
                </Affix>

                <Switch>
                    <Route exact path="/dashboard/Analysis" component={Analysis_Exchange} />
                    <Route path="/dashboard/Analysis/Analysis_Currency" component={Analysis_Currency} />
                </Switch>
            </div>
        )
    }
}