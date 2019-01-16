import "./css/style.css";
import 'ionicons/dist/css/ionicons.min.css';
import Zoom from 'react-reveal/Zoom';
import React, { Component } from 'react';

// import Dashboard Overview
import Dashboard_Overview from './whole_market/dashboard/Dashboard_Overview';
// import Exchange List
import Markets from './whole_market/exchange_list/Markets';
// import Candlestick Chart of whole market
import Overall_Candlestick from "./whole_market/charts/overall_candlestick/Overall_Candlestick";
// import Volume in total
import VolumeTotal from './whole_market/charts/volume_total/VolumeTotal';
// import Analysis of whole market
import Analysis from "./whole_market/analysis/Analysis";
// import landing page of Bitfinex
import Bitfinex from "./select_market/Bitfinex/Bitfinex";
// import landing page of Coinbase
import Coinbase from "./select_market/Coinbase/Coinbase";
// import landing page of Bitflyer
import Bitflyer from "./select_market/Bitflyer/Bitflyer";

// import React-Router module
import { BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import { Layout, Menu, Icon, Spin, Row, Col, Button } from 'antd';
import axios from "axios";
import io from 'socket.io-client';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 'appstore',
            collapsed: false,
            USD: [],
            JPY: [],
            EUR: []
        }
    }

    componentDidMount(){
        let that = this;

        axios
            .get("http://127.0.0.1:3000/api/all-usd-day")
            .then(response => {
                this.setState({
                    USD: parseFloat(response.data[response.data.length - 1].Close_price).toFixed(3)
                });
            })
            .catch(error => console.log(error));

        axios
            .get("http://127.0.0.1:3000/api/all-jpy-day")
            .then(response => {
                this.setState({
                    JPY: parseFloat(response.data[response.data.length - 1].Close_price).toFixed(3)
                });
            })
            .catch(error => console.log(error));

        axios
            .get("http://127.0.0.1:3000/api/all-eur-day")
            .then(response => {
                this.setState({
                    EUR: parseFloat(response.data[response.data.length - 1].Close_price).toFixed(3)
                });
            })
            .catch(error => console.log(error));

        const socket = io.connect('http://127.0.0.1:3000/');
        socket.on('news', function (data) {
            switch (data.market) {
                case 'Bitfinex-USD':
                    that.setState({
                        USD: parseFloat(data.price).toFixed(3)
                    });
                    break;
                case 'Bitfinex-EUR':
                    that.setState({
                        EUR: parseFloat(data.price).toFixed(3)
                    });
                    break;
                case 'Bitfinex-JPY':
                    that.setState({
                        JPY: parseFloat(data.price).toFixed(3)
                    });
                    break;
                case 'Coinbasepro-USD':
                    that.setState({
                        USD: parseFloat(data.price).toFixed(3)
                    });
                    break;
                case 'Coinbasepro-EUR':
                    that.setState({
                        EUR: parseFloat(data.price).toFixed(3)
                    });
                    break;
                case 'bitflyer-JPY':
                    that.setState({
                        JPY: parseFloat(data.price).toFixed(3)
                    });
                    break;
                default:
                    break;
            }
        });
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }
    

    render() { 
        return ( 
            <React.Fragment>
                {/*Left-size Navigation Bar*/}
                <Layout id="side-nav-bar">
                    <Sider id="side-nav-bar"
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                    <div className="logo">
                        BITCOIN STREAM
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        
                        <Menu.Item className="nav-side" key="1">
                            <NavLink to="/dashboard">
                            <Icon type="appstore" />
                            <span>Dashboard</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item className="nav-side" key="2">
                            <NavLink to="/dashboard/Markets">
                            <Icon type="hdd" />
                            <span>Exchange List</span>
                            </NavLink>
                        </Menu.Item>
                       
                        <SubMenu
                            className="nav-side-submenu"
                            key="sub1"
                            title={<span><Icon type="line-chart" /><span>Charts</span></span>}
                        >
                            <Menu.Item key="3" className="submenu-item"><NavLink to="/dashboard/Charts/Overall_Candlestick">Overall Candlestick</NavLink></Menu.Item>
                            <Menu.Item key="4" className="submenu-item"><NavLink to="/dashboard/Charts/Volume_Total">Volume in Total</NavLink></Menu.Item>
                        </SubMenu>
                        <Menu.Item className="nav-side" key="6">
                            <NavLink to="/dashboard/Analysis">
                            <Icon type="pie-chart" />
                            <span>Market Share</span>
                            </NavLink>
                        </Menu.Item>
                        <SubMenu
                            className="nav-side-submenu"
                            key="sub2"
                            title={<span><Icon type="bold" /><span>Select Market</span></span>}
                        >
                            <Menu.Item key="7" className="submenu-item"><NavLink to="/dashboard/Selected_Market/Bitfinex">Bitfinex</NavLink></Menu.Item>
                            <Menu.Item key="8" className="submenu-item"><NavLink to="/dashboard/Selected_Market/Coinbase">Coinbase</NavLink></Menu.Item>
                            <Menu.Item key="9" className="submenu-item"><NavLink to="/dashboard/Selected_Market/Bitflyer">Bitflyer</NavLink></Menu.Item>
                        </SubMenu>
                        <Menu.Item id="expand-triger" className="nav-side" key="10" onClick={this.toggle}>
                            <Icon 
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                size={30}
                            />
                            <span>Expand/Collapse</span>
                        </Menu.Item>

                        </Menu>
                    </Sider>

                    
                    <Layout>
                        <Menu 
                            theme="dark"
                            mode="horizontal"
                            style={{ lineHeight: '64px' }}
                        >
                            <Col id="average-price" span={18}>
                                {  }
                                Latest Price: {
                                    "USD " + this.state.USD + " / " +
                                    "JPY " + this.state.JPY + " / " +
                                    "EUR " + this.state.EUR
                                }
                            </Col>
                        </Menu>
                        
                        {/*Content of the page*/}
                        <Zoom>
                        <Content className="content" style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 680 }}>
                            <div >
                                <Switch>
                                    <Route exact path="/dashboard" component={Dashboard_Overview} />
                                    <Route path="/dashboard/Markets" component={Markets} />
                                    <Route path="/dashboard/Charts/Overall_Candlestick" component={Overall_Candlestick} />
                                    <Route path="/dashboard/Charts/Volume_Total" component={VolumeTotal} />
                                    <Route path="/dashboard/Analysis" component={Analysis} />
                                    <Route path="/dashboard/Selected_Market/Bitfinex" component={Bitfinex} />
                                    <Route path="/dashboard/Selected_Market/Coinbase" component={Coinbase} />
                                    <Route path="/dashboard/Selected_Market/Bitflyer" component={Bitflyer} />
                                </Switch>
                            </div>     
                        
                        </Content>
                        </Zoom>
                    </Layout>
                </Layout>
            </React.Fragment>
         );
    }
}
 
export default Dashboard;