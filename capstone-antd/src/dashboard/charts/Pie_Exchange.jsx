import React from 'react';

export default class Pie extends React.Component {
    constructor(props) {
        super(props);

        this.echarts = this.props.echarts;
    }

    componentWillReceiveProps(nextProps) {
        this.data = nextProps.data;
        this.chartPie = this.echarts.init(document.getElementById('chartPie'));
        this.constructOption(this.data);
    }

    render() {
        return (
            <div id="chartPie" style={{ width: '100%', minHeight: 500 }}></div>
        )
    }

    constructOption = (rawData) => {
        let option = {
            title: {
                text: 'BTC Volume by Exchange Market',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Bitfinex', 'Coinbase', 'Bitflyer']
            },
            series: [
                {
                    name: 'BTC',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '60%'],
                    data: [
                        { value: rawData.Bitfinex, name: 'Bitfinex' },
                        { value: rawData.Coinbase, name: 'Coinbase' },
                        { value: rawData.Bitflyer, name: 'Bitflyer' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        this.chartPie.setOption(option);
    }
}