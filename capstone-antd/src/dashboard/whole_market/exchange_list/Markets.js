import React from 'react';
import "../../css/exchangeList.css";
// import USD version - default
import Markets_USD from "./Markets_USD";

import { Row, Col, Affix} from 'antd';
import { Switch, Route } from 'react-router-dom';

export default class Markets extends React.Component {
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
                        </Col>
                    </Row>
                </Affix>
   
                <Switch>
                    <Route exact path="/dashboard/Markets" component={Markets_USD} />
                </Switch>
            </div>
        )
    }
}
