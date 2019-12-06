import React, { Component } from 'react';
import ModernDatepicker from 'react-modern-datepicker';
const datepiker = {
    zIndex: '1',
}
class PorformancePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
    }
 
    handleChange(date) {
        this.setState({
            startDate: date,
        });
    }
    render() {
        return (
            <div className="container-fluid bg-color pb-5">
                <div className="row pt-5">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-3 col-4 pr-lg-0">
                                <img src="./dashboard/performance_dashboard_icon.png" className="w-100"/>
                            </div>
                            <div className="col-md-9 col-8 pl-lg-0 mt-lg-4 pt-xl-2 mt-2">
                                <h6 className="performance_title">Performance dashboard</h6>
                                <h6 className="member">Member: <span className="pr-3 example_member">Example Member</span><span className="border_left pl-3 member">ribe:</span><span className="example_member"> Freedom Entrepreneurs 7pm PT</span></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 pt-xl-2">
                        <div className="calendar mt-lg-4 mt-2 ml-lg-5">
                        {/* <DatePicker
                            className='mt-2 border-0 ml-4 pt-2 pr-lg-5 w-100 shadow-none foucs-0'
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            dateFormat="d, MMMM, yyyy"
                            /> */}
                            <ModernDatepicker
                            className='mt-2 ml-4 pt-2 w-75 float-left' style = {datepiker}
                                date={this.state.startDate}
                                dateFormat="MMMM, d, yyyy"
                                hideBorder
                                onChange={date => this.handleChange(date)}
                            />
                            <i className="fa fa-calendar float-right mt-3 pt-1 pr-3" onChange={this.handleChange} ></i>
                        </div>
                       
                    </div>
                </div>
                <div className="border_bottom mt-md-0 mt-3"></div>
                <style jsx>{`
                    .bg-color{
                        background-color:#f4fcfa; 
                    }
                    .performance_title{
                        font-size:29px;
                        color: #345771;
                        font-weight:800;
                        text-transform:uppercase; 
                    }
                    .cXcRCo{
                        z-index: 111px;
                    }
                    .member{
                        color: #a0b0b9;
                        font-weight:normal
                    }
                    .example_member{
                        color: #345771;
                        font-weight:bold;
                    }
                    .border_left{
                        border-left:2px solid #f0efef;
                    }
                    .calendar{
                        background-color:white;
                        height: 60px;
                        width: 80%;
                        border-radius: 30px;
                        box-shadow:1px 1px 10px 4px #0000001a;
                    }
                    .fa-calendar{
                        font-size: 20px;
                        color: #99abb8;
                    }
                    .react-datepicker-ignore-onclickoutside:focus{
                        outline: none !important;
                    }
                    .border_bottom{
                        border-bottom: 2px solid #e7e7e7;
                        width: 94%;
                        margin: 0 auto;
                    }
                    .DayPickerInput > input {
                        border: none !important;
                        width: 100%;
                    }
                    .foucs-0:focus {
                        outline: none;
                    }
                    input:focus {
                        outline-offset: 0px !important;
                    }
                    :focus{
                        outline: none !important;
                    }
                    @media only screen and (max-width: 440px){
                        .calendar{
                            width: 100%;

                        }
                    }
                    `}</style>
            </div>
        )
    }
}
export default PorformancePage;