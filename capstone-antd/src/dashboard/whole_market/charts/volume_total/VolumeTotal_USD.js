import React from 'react';
import "../../../css/exchangeList.css";
import echarts from 'echarts';
import Line from '../../../charts/Line';
import axios from "axios";

export default class VolumeTotal_USD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nData: []
        }
    }

    componentDidMount(){
        axios
            .get("http://127.0.0.1:3000/api/all-usd-volume")
            .then(response => {
                const newData = response.data.map(d => {
                    return {
                        date: d._id.year + "/" + d._id.month + "/" + d._id.day,
                        volume: d.total
                    };
                });
                //console.log(newData);
                const newState = Object.assign({}, this.state, {
                    nData: newData
                });

                this.setState(newState);
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
            {type: 'line', title: 'Bitcoin Volume in BTC/USD Trading Market'}
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
            case 'line':
                return <Line echarts={echarts} data={this.state.nData} />;
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
