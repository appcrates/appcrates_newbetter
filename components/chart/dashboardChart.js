import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };

class DashboardChart extends Component{

    render() {
        return (
            <div className="container-fluid bg-color">
                <div className="bg-color-1 mr-4">
                    <div className="row p-4">
                        <div className="col-md-6">
                            <HighchartsReact highcharts={Highcharts} options={options} className="rounded" />
                        </div>
                        <div className="col-md-6">
                            <HighchartsReact highcharts={Highcharts} options={options}  className="rounded"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <HighchartsReact highcharts={Highcharts} options={options}  className="rounded"/>
                        </div>
                    </div>
                </div>
                
                <style jsx>{`
                        .bg-color{
                            background-color:#f4fcfa; 
                        }
                        .bg-color-1{
                            background-color: white;
                            border-radius: 8px;
                            margin-left:40px;
                        }
                    `}
                    </style>
            </div>
        )
    }
}
export default DashboardChart;