import React from 'react';

export default class Line extends React.Component {
    constructor(props) {
        super(props);

        this.echarts = this.props.echarts;
    }

    componentWillReceiveProps(nextProps) {
        this.data = nextProps.data;
        this.chartLine = this.echarts.init(document.getElementById('chartLine'));
        this.constructOption(this.data);
    }

    render() {
        return (
            <div id="chartLine" style={{ width: '100%', minHeight: 350 }}></div>
        )
    }


    constructOption = (rawData) => {

        var dates = rawData.map(function (item) {
            return item.date;
        });

        var volume = rawData.map(function (item) {
            return item.volume;
        });

        let option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dates
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: volume,
                type: 'line',
            }]
        };


        this.chartLine.setOption(option);
    }
}