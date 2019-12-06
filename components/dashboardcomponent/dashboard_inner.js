import React, { Component } from 'react';
import Dashboardheader from './headercomponent/dashboardHeader';
import PerformancePage from './PerformanceSection/performancePage';
import PerformanceCategories from './performance_Categories/Performancecategories';
import DashboardChart from './chart/dashboardChart';

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
                    <PerformanceCategories/>
                    <DashboardChart/>
                </div>
            </div>
            
            
        )
    }
}
export default Dashboard;