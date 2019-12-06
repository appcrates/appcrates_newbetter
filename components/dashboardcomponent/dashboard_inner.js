import React, { Component } from 'react';
import Dashboardheader from '../headercomponent/dashboardHeader';
import PerformancePage from '../PerformanceSection/performancePage';
import PCategories from '../pCategories/Pcategories';
import DashboardChart from '../chart/dashboardChart';


class Dashboard extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="container-fluid pl-0 pr-0">
                    <Dashboardheader/>
                    <PerformancePage/>
                    <PCategories/>
                    <DashboardChart/>
                </div>
            </div>
            
            
        )
    }
}
export default Dashboard;