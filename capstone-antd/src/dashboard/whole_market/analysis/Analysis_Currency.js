import React from 'react';
import "../../css/exchangeList.css";
import echarts from 'echarts';
import Pie from '../../charts/Pie_Currency';
import axios from "axios";

export default class Analysis_Currency extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            USD: [],
            JPY: [],
            EUR: []
        }
    }

    componentDidMount(){
        axios
            .get("http://127.0.0.1:3000/api/usd-volume")
            .then(response => {
                this.setState({
                    USD: response.data[0].total
                });
            })
            .catch(error => console.log(error));
        axios
            .get("http://127.0.0.1:3000/api/jpy-volume")
            .then(response => {
                this.setState({
                    JPY: response.data[0].total
                });
            })
            .catch(error => console.log(error));
        axios
            .get("http://127.0.0.1:3000/api/eur-volume")
            .then(response => {
                this.setState({
                    EUR: response.data[0].total
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
