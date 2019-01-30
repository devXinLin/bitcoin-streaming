import React from 'react';
import "../../css/exchangeList.css";
import { Table } from 'antd';
import axios from "axios";
import io from 'socket.io-client';

export default class Markets_USD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [{
                key: 1, market: 'Bitfinex / USD', open: '', latest: '', change: '', high: '', low: ''
            },{
                key: 2, market: 'Bitfinex / JPY', open: '', latest: '', change: '', high: '', low: ''
            },{
                key: 3, market: 'Bitfinex / EUR', open: '', latest: '', change: '', high: '', low: ''
            },{
                key: 4, market: 'Coinbase / USD', open: '', latest: '', change: '', high: '', low: ''
            },{
                key: 5, market: 'Coinbase / EUR', open: '', latest: '', change: '', high: '', low: ''
            },{
                key: 6, market: 'Bitflyer / JPY', open: '', latest: '', change: '', high: '', low: ''
            }]
        }
    }

    componentDidMount(){
        let that = this;
        let newData = that.state.tDate;

        axios
            .get("http://127.0.0.1:3000/api/bitfinex-usd-day")
            .then(response => {
                newData[0].open = response.data[response.data.length - 1].Open_price;
                newData[0].latest = response.data[response.data.length - 1].Close_price;
                newData[0].high = response.data[response.data.length - 1].Highest_price;
                newData[0].low = response.data[response.data.length - 1].Lowest_price;
                newData[0].change = newData[0].latest - that.state.tDate[0].open;

                newData[0].open = newData[0].open.toFixed(3);
                newData[0].latest = newData[0].latest.toFixed(3);
                newData[0].high = newData[0].high.toFixed(3);
                newData[0].low = newData[0].low.toFixed(3);
                newData[0].change = newData[0].change.toFixed(3);
                this.setState(newData);
            })
            .catch(error => console.log(error));

        axios
            .get("http://127.0.0.1:3000/api/bitfinex-jpy-day")
            .then(response => {
                newData[1].open = response.data[response.data.length - 1].Open_price;
                newData[1].latest = response.data[response.data.length - 1].Close_price;
                newData[1].high = response.data[response.data.length - 1].Highest_price;
                newData[1].low = response.data[response.data.length - 1].Lowest_price;
                newData[1].change = newData[1].latest - that.state.tDate[1].open;

                newData[1].open = newData[1].open.toFixed(3);
                newData[1].latest = newData[1].latest.toFixed(3);
                newData[1].high = newData[1].high.toFixed(3);
                newData[1].low = newData[1].low.toFixed(3);
                newData[1].change = newData[1].change.toFixed(3);
                this.setState(newData);
            })
            .catch(error => console.log(error));

        axios
            .get("http://127.0.0.1:3000/api/bitfinex-eur-day")
            .then(response => {
                newData[2].open = response.data[response.data.length - 1].Open_price;
                newData[2].latest = response.data[response.data.length - 1].Close_price;
                newData[2].high = response.data[response.data.length - 1].Highest_price;
                newData[2].low = response.data[response.data.length - 1].Lowest_price;
                newData[2].change = newData[2].latest - that.state.tDate[2].open;

                newData[2].open = newData[2].open.toFixed(3);
                newData[2].latest = newData[2].latest.toFixed(3);
                newData[2].high = newData[2].high.toFixed(3);
                newData[2].low = newData[2].low.toFixed(3);
                newData[2].change = newData[2].change.toFixed(3);
                this.setState(newData);
            })
            .catch(error => console.log(error));

        axios
            .get("http://127.0.0.1:3000/api/coinbase-usd-day")
            .then(response => {
                newData[3].open = response.data[response.data.length - 1].Open_price;
                newData[3].latest = response.data[response.data.length - 1].Close_price;
                newData[3].high = response.data[response.data.length - 1].Highest_price;
                newData[3].low = response.data[response.data.length - 1].Lowest_price;
                newData[3].change = newData[3].latest - that.state.tDate[3].open;

                newData[3].open = newData[3].open.toFixed(3);
                newData[3].latest = newData[3].latest.toFixed(3);
                newData[3].high = newData[3].high.toFixed(3);
                newData[3].low = newData[3].low.toFixed(3);
                newData[3].change = newData[3].change.toFixed(3);
                this.setState(newData);
            })
            .catch(error => console.log(error));

        axios
            .get("http://127.0.0.1:3000/api/coinbase-eur-day")
            .then(response => {
                newData[4].open = response.data[response.data.length - 1].Open_price;
                newData[4].latest = response.data[response.data.length - 1].Close_price;
                newData[4].high = response.data[response.data.length - 1].Highest_price;
                newData[4].low = response.data[response.data.length - 1].Lowest_price;
                newData[4].change = newData[4].latest - that.state.tDate[4].open;

                newData[4].open = newData[4].open.toFixed(3);
                newData[4].latest = newData[4].latest.toFixed(3);
                newData[4].high = newData[4].high.toFixed(3);
                newData[4].low = newData[4].low.toFixed(3);
                newData[4].change = newData[4].change.toFixed(3);
                this.setState(newData);
            })
            .catch(error => console.log(error));

        axios
            .get("http://127.0.0.1:3000/api/bitflyer-jpy-day")
            .then(response => {
                newData[5].open = response.data[response.data.length - 1].Open_price;
                newData[5].latest = response.data[response.data.length - 1].Close_price;
                newData[5].high = response.data[response.data.length - 1].Highest_price;
                newData[5].low = response.data[response.data.length - 1].Lowest_price;
                newData[5].change = newData[4].latest - that.state.tDate[5].open;

                newData[5].open = newData[5].open.toFixed(3);
                newData[5].latest = newData[5].latest.toFixed(3);
                newData[5].high = newData[5].high.toFixed(3);
                newData[5].low = newData[5].low.toFixed(3);
                newData[5].change = newData[5].change.toFixed(3);
                this.setState(newData);
            })
            .catch(error => console.log(error));

        const socket = io.connect('http://127.0.0.1:3000/');
        socket.on('news', function (data) {

            switch (data.market) {
                case 'Bitfinex-USD':
                    newData[0].latest = data.price;
                    newData[0].change = data.price - that.state.tDate[0].open;
                    newData[0].latest = parseFloat(newData[0].latest).toFixed(3);
                    newData[0].change = newData[0].change.toFixed(3);
                    that.setState(newData);
                    break;
                case 'Bitfinex-EUR':
                    newData[2].latest = data.price;
                    newData[2].change = data.price - that.state.tDate[2].open;
                    newData[2].latest = parseFloat(newData[2].latest).toFixed(3);
                    newData[2].change = newData[2].change.toFixed(3);
                    that.setState(newData);
                    break;
                case 'Bitfinex-JPY':
                    newData[1].latest = data.price;
                    newData[1].change = data.price - that.state.tDate[1].open;
                    newData[1].latest = parseFloat(newData[1].latest).toFixed(3);
                    newData[1].change = newData[1].change.toFixed(3);
                    that.setState(newData);
                    break;
                case 'Coinbasepro-USD':
                    newData[3].latest = data.price;
                    newData[3].change = data.price - that.state.tDate[3].open;
                    newData[3].latest = parseFloat(newData[3].latest).toFixed(3);
                    newData[3].change = newData[3].change.toFixed(3);
                    that.setState(newData);
                    break;
                case 'Coinbasepro-EUR':
                    newData[4].latest = data.price;
                    newData[4].change = data.price - that.state.tDate[4].open;
                    newData[4].latest = parseFloat(newData[4].latest).toFixed(3);
                    newData[4].change = newData[4].change.toFixed(3);
                    that.setState(newData);
                    break;
                case 'bitflyer-JPY':
                    newData[5].latest = data.price;
                    newData[5].change = data.price - that.state.tDate[5].open;
                    newData[5].latest = parseFloat(newData[5].latest).toFixed(3);
                    newData[5].change = newData[5].change.toFixed(3);
                    that.setState(newData);
                    break;
                default:
                    break;
            }

        });
    };

    render() {
        const columns = [{
            key: 1,
            title: 'Market / Pair',
            width: '25%',
            dataIndex: 'market'
        }, {
            key: 2,
            title: 'Open',
            width: '15%',
            dataIndex: 'open',
        }, {
            key: 3,
            title: 'Latest',
            width: '15%',
            dataIndex: 'latest'
        }, {
            key: 4,
            title: 'Change',
            width: '15%',
            dataIndex: 'change',
        },{
            key: 5,
            title: 'High',
            width: '15%',
            dataIndex: 'high',
        },{
            key: 6,
            title: 'Low',
            width: '15%',
            dataIndex: 'low',
        }];


        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
        };

        return (
            <div>
                <div id="section_content">
                    <h1>Exchange Markets Overview</h1>
                    <Table columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
                </div>
            </div>
        )
    }
}
