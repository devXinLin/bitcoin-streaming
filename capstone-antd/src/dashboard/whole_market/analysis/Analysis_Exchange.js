import React from 'react';
import "../../css/exchangeList.css";
import echarts from 'echarts';
import Pie from '../../charts/Pie_Exchange';
import axios from "axios";

export default class Analysis_Exchange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Bitfinex: [],
            Coinbase: [],
            Bitflyer: []
        }
    }

    componentDidMount(){
        axios
            .get("http://127.0.0.1:3000/api/bitfinex-volume")
            .then(response => {
                this.setState({
                    Bitfinex: response.data[0].total
                });
            })
            .catch(error => console.log(error));
        axios
            .get("http://127.0.0.1:3000/api/coinbase-volume")
            .then(response => {
                this.setState({
                    Coinbase: response.data[0].total
                });
            })
            .catch(error => console.log(error));
        axios
            .get("http://127.0.0.1:3000/api/bitflyer-volume")
            .then(response => {
                this.setState({
                    Bitflyer: response.data[0].total
                });
            })
            .catch(error => console.log(error));

    };

    render() {

        return (
            <div>
                <div id="section_content">
                    <ul style={styles.container}>
                        {this.getAllCharts()}
                    </ul>
                </div>
            </div>
        )
    }
    getAllCharts = () => {
        const charts = [
            {type: 'pie', title: ''}
        ];

        return charts.map((item, index) => {
            return (
                <li key={item.type} className="box" style={styles.item}>
                    {this.renderTitle(item)}
                    <div style={{ padding: '0 10px'}}>
                        {this.renderChart(item.type)}
                    </div>
                </li>
            )
        })
    };

    renderTitle = (item) => {
        return (
            <div style={{padding: 10}}>{item.title}</div>
        )
    };

    renderChart = (type) => {
        switch (type) {
            case 'pie':
                return <Pie echarts={echarts} data={this.state} />;
            default:
                break;
        }
    }
}

const styles = {
    container: {
        padding: '10px 0'
    },
    item: {
        margin: '10px 0',
        background: '#FFFFFF'
    }
};

