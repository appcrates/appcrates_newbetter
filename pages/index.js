import $ from 'jquery';
import Instafeed from 'instafeed.js';
import Header from '../components/Header';
import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Subscribe from "../components/subscribeForm";


const ignoreStyle = {
    color: '#345771',
};

class Jquery extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        $("#plus").click(function () {
            $(".pera-1").slideDown("slow");
            $(".pera-1").css('display', 'block');
            $("#plus").hide();
            $(".heading_4").css('color', '#cf4949');
            $("#minus").show();
            $("#minus").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#minus").click(function () {
            $(".pera-1").slideUp("slow");
            $("#minus").hide();
            $(".heading_4").css('color', '#345771');
            $("#plus").show();
            $("#plus").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#plus-1").click(function () {
            $(".pera-2").slideDown("slow");
            $(".heading-1").css('color', '#cf4949');
            $(".pera-2").css('display', 'block');
            $("#plus-1").hide();
            $("#minus-1").show();
            $("#minus-1").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#minus-1").click(function () {
            $(".pera-2").slideUp("slow");
            $(".heading-1").css('color', '#345771');
            $("#minus-1").hide();
            $("#plus-1").show();
            $("#plus-1").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#plus-2").click(function () {
            $(".pera-3").slideDown("slow");
            $(".heading-2").css('color', '#cf4949');
            $(".pera-3").css('display', 'block');
            $("#plus-2").hide();
            $("#minus-2").show();
            $("#minus-2").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#minus-2").click(function () {
            $(".pera-3").slideUp("slow");
            $(".heading-2").css('color', '#345771');
            $("#minus-2").hide();
            $("#plus-2").show();
            $("#plus-2").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#plus-3").click(function () {
            $(".pera-4").slideDown("slow");
            $(".heading-3").css('color', '#cf4949');
            $(".pera-4").css('display', 'block');
            $("#plus-3").hide();
            $("#minus-3").show();
            $("#minus-3").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#minus-3").click(function () {
            $(".pera-4").slideUp("slow");
            $(".heading-3").css('color', '#345771');
            $("#minus-3").hide();
            $("#plus-3").show();
            $("#plus-3").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#plus-4").click(function () {
            $(".pera-5").slideDown("slow");
            $(".heading-4").css('color', '#cf4949');
            $(".pera-5").css('display', 'block');
            $("#plus-4").hide();
            $("#minus-4").show();
            $("#minus-4").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#minus-4").click(function () {
            $(".pera-5").slideUp("slow");
            $(".heading-4").css('color', '#345771');
            $("#minus-4").hide();
            $("#plus-4").show();
            $("#plus-4").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#plus-5").click(function () {
            $(".pera-6").slideDown("slow");
            $(".heading-5").css('color', '#cf4949');
            $(".pera-6").css('display', 'block');
            $("#plus-5").hide();
            $("#minus-5").show();
            $("#minus-5").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#minus-5").click(function () {
            $(".pera-6").slideUp("slow");
            $(".heading-5").css('color', '#345771');
            $("#minus-5").hide();
            $("#plus-5").show();
            $("#plus-5").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#plus-6").click(function () {
            $(".pera-7").slideDown("slow");
            $(".heading-6").css('color', '#cf4949');
            $(".pera-7").css('display', 'block');
            $("#plus-6").hide();
            $("#minus-6").show();
            $("#minus-6").css({'display': 'block', 'margin-left': 'auto'});
        });
        $("#minus-6").click(function () {
            $(".pera-7").slideUp("slow");
            $(".heading-6").css('color', '#345771');
            $("#minus-6").hide();
            $("#plus-6").show();
            $("#plus-6").css({'display': 'block', 'margin-left': 'auto'});
        });

        $(document).ready(function () {
            $('.tbs').bind('click', function () {
                $('.active-1').removeClass('active-1')
                $(this).addClass('active-1');
            });
            $(".tbs-1").click(function () {
                $("#tbs-3").css('display', 'none');
                $("#tbs-1").css('display', 'block');
                $("#tbs-3").css('display', 'none');
                $("#tbs-2").css('display', 'none');
                $(".tribe").css('color', 'black');
                $(".tribe_1").css('color', '#345771');
                $(".tribe-2").css('color', '#345771');
                $(".img__1").css('display', 'none');
                $(".img__12").css('display', 'block');
                $(".img__14").css('display', 'block');
                $(".img__3").css('display', 'none');
                $(".img__13").css('display', 'block');
                $(".img__2").css('display', 'none');
                $("#tbs-1").show();
                $("#tbs-3").hide();
            });
            $(".tbs-2").click(function () {
                $("#tbs-2").show();
                $(".img__12").css('display', 'none');
                $(".img__1").css('display', 'block');
                $(".img__14").css('display', 'block');
                $(".img__3").css('display', 'none');
                $(".img__2").css('display', 'block');
                $(".img__13").css('display', 'none');
                $("#tbs-1").css('display', 'none');
                $("#tbs-3").css('display', 'none');
                $("#tbs-2").css('display', 'block');
                $(".tribe-1").css('color', 'black');
                $(".tribe").css('color', '#345771');
                $(".tribe-2").css('color', '#345771');
                $("#tbs-1").hide();
            });
            $(".tbs-3").click(function () {
                $("#tbs-3").show();
                $(".img__1").css('display', 'block');
                $(".img__12").css('display', 'none');
                $(".img__13").css('display', 'block');
                $(".img__2").css('display', 'none');
                $(".img__14").css('display', 'none');
                $(".img__3").css('display', 'block');
                $("#tbs-3").css('display', 'block');
                $("#tbs-2").css('display', 'none');
                $("#tbs-1").css('display', 'none');
                $(".tribe-2").css('color', 'black');
                $(".tribe-1").css('color', '#345771');
                $("#tbs-2").hide();
            });
            $('.find_more_1').bind('click', function () {
                $('.active-2').removeClass('active-2');
                $(this).addClass('active-2');
            });
            $(".tabs-1").click(function () {
                $("#tbs-3").css('display', 'none');
                $("#tbs-1").css('display', 'block');
                $("#tbs-3").css('display', 'none');
                $("#tbs-2").css('display', 'none');
                $(".tribe").css('color', 'black');
                $(".tribe_1").css('color', '#345771');
                $(".tribe-2").css('color', '#345771');
                $(".img__1").css('display', 'none');
                $(".img__12").css('display', 'block');
                $(".img__14").css('display', 'block');
                $(".img__3").css('display', 'none');
                $(".img__13").css('display', 'block');
                $(".img__2").css('display', 'none');
                $("#tbs-1").show();
                $("#tbs-3").hide();
            });
            $(".tabs-2").click(function () {
                $("#tbs-2").show();
                $(".img__12").css('display', 'none');
                $(".img__1").css('display', 'block');
                $(".img__14").css('display', 'block');
                $(".img__3").css('display', 'none');
                $(".img__2").css('display', 'block');
                $(".img__13").css('display', 'none');
                $("#tbs-1").css('display', 'none');
                $("#tbs-3").css('display', 'none');
                $("#tbs-2").css('display', 'block');
                $(".tribe-1").css('color', 'black');
                $(".tribe").css('color', '#345771');
                $(".tribe-2").css('color', '#345771');
                $("#tbs-1").hide();
            });
            $(".tabs-3").click(function () {
                $("#tbs-3").show();
                $(".img__1").css('display', 'block');
                $(".img__12").css('display', 'none');
                $(".img__13").css('display', 'block');
                $(".img__2").css('display', 'none');
                $(".img__14").css('display', 'none');
                $(".img__3").css('display', 'block');
                $("#tbs-3").css('display', 'block');
                $("#tbs-2").css('display', 'none');
                $("#tbs-1").css('display', 'none');
                $(".tribe-2").css('color', 'black');
                $(".tribe-1").css('color', '#345771');
                $("#tbs-2").hide();
            });
        });

        let userFeed = new Instafeed({
            get: 'user',
            userId: '14562296571',
            clientId: process.env.IG_CLIENT_ID,
            accessToken:  process.env.IG_ACCESS_TOKEN,
            resolution: 'standard_resolution',
            template: '<div class="col-md-2 mt-2 col-6"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="layer_img w-100"/></a></div>',
            sortBy: 'most-recent',
            limit: 7,
            links: false
        });
        userFeed.run();

    };

    render() {
        return (
            <div>
                <Head>
                    <title>Better Together</title>
                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                          crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://use.typekit.net/iav6lfa.css"/>
                </Head>
                <Header/>
                <div>
                    <div className="banner">
                        <div className="container">
                            <div className="row text_items">
                                <div className="col-lg-6 sction mt-lg-0 mt-5">
                                    <div className="brder text-left mt-3 pt-2">
                                        <span className="master_text pl-2">The Mastermind Network That Holds You</span>
                                    </div>
                                    <div className="pt-3">
                                        <h5 className="account pl-4 ml-2">Accountable to the</h5>
                                        <h1 className="dreams pl-4 ml-2">Dreams that matter m
                                            <img src='./images/O_logo.png' className="layer_121 mr-1"/>st
                                        </h1>
                                    </div>
                                    <div className="ml-4 sct">
                                        <div className="mt-3 search_1">
                                            <Subscribe
                                                customButton={<button type="submit" className="scrh"><img src='./images/Layer_202.png' className="layer_122 text-white"/></button>}
                                            />
                                        </div>
                                        <div className="row mt-2">
                                            {/*<div className="col-1 pl-xl-5 pl-0"/>*/}
                                            <div className="col-3">
                                                <div className="trnsp">
                                                    <h2 className="mb-0 numberss">1000+</h2>
                                                    <div className="goal">GOALS DONE</div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="trnsp_1">
                                                    <h2 className="mb-0 numberss">87%</h2>
                                                    <div className="goal">PERCENT DONE</div>
                                                </div>
                                            </div>
                                            <div className="col-3 text-center">
                                                <div className="trnsp_1">
                                                    <h2 className="numberss mb-0">$2016</h2>
                                                    <div className="total">TOTAL DONATIONS</div>
                                                </div>
                                            </div>
                                            <div className="col-2"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 mt-3">
                                    <div className="text-right">
                                        {/* <img src='./images/group_64.png'   className=" ml-auto" />
                                        // Stats bubbles on the top left of the hero section*/}
                                    </div>
                                    <img src='./images/Graphix.png' className="w-100 graphix pb-5 mt-xl-5 mt-0 pt-5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner_1 container-fluid mt-md-5 mt-2">
                        <div className="row">
                            <div className="col-md-6 text-right">
                                <img src= '../images/hands.png'   className="banner_1_img" />
                            </div>
                            <div className="col-md-6 sctinss">
                                <h6 className="text-heading">There's a Dream You</h6>
                                <h1 className="ignore heading_eight">CAN'T IGN<img src='./images/Layer_123.png' className="heading_eight layer_1212"/>RE.
                                </h1>
                                <img src='./images/line.png' className="line" alt='Group Holding Hands'/>
                                <p className="pera">You want a better life and know you're capable of accomplishing
                                    more... but you're not as consistent, organized and focused as you should be.</p>
                                <p className="pera" id="pera">Other things keep getting in the way. You're tried <span
                                    className="font-weight-bold">everything... new routines... planners... courses... </span>but
                                    nothing really sticks. And you've been really hard on yourself because of it. </p>
                                <p className="pera">But you should be deeply proud of your efforts.
                                Every system that doesn't work is one step closer to finding what does work.</p>
                                <h6 className="heading">YOU WERE MISSING THE ESSENTIAL INGREDIENT: COMMUNITY
                                    ACCOUNTABILITY.</h6>
                                {/*<button className="bnt" id="learn">Learn More</button>*/}
                            </div>
                        </div>
                    </div>
                    {/*<div className="row position-relative text-center container-fluid mt-5 pt-4">*/}
                    {/*    <div className="col-md-12 pl-md-5 pl-4 pr-md-5 pr-0 video">*/}
                    {/*        <iframe className="videos ml-2" src="https://www.youtube.com/embed/kmGel9P8ekk"*/}
                    {/*                frameBorder="0"*/}
                    {/*                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                    {/*                allowFullScreen/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* {DisplayText &&  */}
                    <div className="banner_2">
                        <div className="text-center fms">
                            <p className="intro pb-0 mb-0">INTRODUCING A SYSTEM FOR ACHIEVING YOUR GOALS THAT
                                LEVERAGES</p>
                            <h1 className="leverage">LEVERAGES THE P<img src='./images/Layer_121.png' className="layer_126"/>WER
                                OF COMMUNITY ACCOUNTABILITY</h1>
                            <img src='./images/Shape_1396.png' className=""/>
                        </div>

                    </div>
                    <div className="container-fluid pr-0 tabes_1 position-relative">
                        <div className="">
                            <span className="find_more_1 p-2 tabs-1 active-2 heading_eight">FIND YOUR TRIBE</span>
                            <span className="find_more_1 p-2 tabs-2 heading_eight">REAL ACCOUNTABILITY</span>
                            <span className="find_more_1 p-2 tabs-3 heading_eight">DATA DRIVEN</span>
                        </div>
                    </div>
                    <div className="clear_fix"/>
                    <div className="container-fluid position-relative tabes">
                        <div className="row ">
                            <div className="col-md-9 m-auto ">
                                <div className="row boxsss">
                                    <div className="col-lg-4 mt-4 col-sm-6">
                                        <div className="bg_img_1">
                                            <div className="text-left tbs tbs-1 active-1">
                                                <div className="">
                                                    <img src='./images/0212.png' className="w-25 pt-4 ml-4 img__12"/>
                                                    <img src='./images/0312.png' className="w-25 pt-4 ml-4 img__1"/>
                                                    <h4 className="ml-1 tre tribe_121 tribe-1 tribe pb-4 font-weight-italic">FIND
                                                        YOUR <br/>TRIBE</h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 mt-4 col-sm-6">
                                        <div className="bg_img_2">
                                            <div className="text-left tbs tbs-2">
                                                <div className="">
                                                    <img src='./images/Layer_221.png' className="w-25 pt-4 ml-4 img__13"/>
                                                    <img src='./images/221.png' className="w-25 pt-4 ml-4 img__2"/>
                                                    <h4 className="tribe_1 tribe-1 tre pb-4 font-weight-italic">REAL<br/> ACCOUNTABILITY
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-4 col-sm-6">
                                        <div className="bg_img_3">
                                            <div className="text-left tbs tbs-3">
                                                <div className="">
                                                    <img src='./images/Layer_222.png' className="w-25 pt-4 ml-4 img__14"/>
                                                    <img src='./images/22.png' className="w-25 pt-4 ml-4 img__3"/>
                                                    <h4 className="ml-1 pb-4 tre tribe-121-2 tribe-2 font-weight-italic">DATA <br/> DRIVEN
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="tbs-2">
                        <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 mt-lg-0 mt-5">
                            <div className="col-md-6 lever">
                                <div className="ml-auto">
                                    <h1 className="ignore_3 gether_12 heading_eight" style={ignoreStyle}>LEVERAGE <br/>ACC<img
                                        src='./images/Layer_123.png' className="layer_1212_1 heading_eight"/>UNTABILITY</h1>
                                    <img src='./images/line.png' className="underline"/>
                                    <p className="real_matter">For what REALLY matters</p>
                                    <p className="pera_1 text-left mt-3">Why do we always get stuff done for a tough
                                        boss often even at the expense of our own health and dreams? The boss holds you
                                        accountable with real consequences. But a boss won't hold you to your
                                        dreams.</p>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <h6 className="number121 text-left ">$1000+ <br/> <span className="charity">GOAL DONATIONS</span>
                                            </h6>
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className="number122 text-left ">$3623+ <br/> <span className="charity">RAISED FOR CHARITY</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <button className="bnt">LEARN MORE</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src= './images/img_copy_2.png' className="w-100" />
                            </div>
                            <div className="col-md-10 mt-4">
                                <div className="bg-white p-2 boxes">
                                    <div className="row">
                                        <div className="col-md-2 col-4 ">
                                            <img src='./images/Quate.png' className="w-75 mt-md-0 mt-0"/>
                                        </div>
                                        <div className="col-md-10 col-8 pr-md-2 pl-md-0 pl-1 pr-2 mt-2 pt-1">
                                            <div className="average average_12">"You are average of the five people you
                                                spend the most time with."<span className="jin"> - JIM ROHN</span></div>
                                        </div>
                                    </div>
                                    {/*<img src= './images/coma.png' className="coma"/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="tbs-3">
                        <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 mt-lg-0 mt-4">
                            <div className="col-md-6 lever">
                                <div className="ml-auto">
                                    <h1 className="ignore_1 heading_eight">DATA DRIVEN INSIGHTS INT<img src='./images/Layer_123.png'
                                                                                                        className="layer_1212_1 heading_eight"/> YOU
                                    </h1>
                                    <img src='./images/line.png' className="under_line"/>
                                    <p className="real_matter">Take the 'woo' out of personal development</p>
                                    <p className="pera_1 text-left mt-3">Use our tools to rate your performance each
                                        week in key areas of life, including: focus, clarity, mindfulness, courage,
                                        productivity & energy. This data is presented in your performance dashboard -
                                        giving you key insights into the relationship between different aspects of
                                        life.</p>
                                    {/*<button className="bnt">EXAMPLE DASHBOARD</button>*/}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src='./images/Group_3.png' className="w-100"/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="bg-white p-2 boxes">
                                    <div className="row">
                                        <div className="col-md-2 col-4">
                                            <img src='./images/Quate.png' className="w-75 mt-md-0 mt-1"/>
                                            {/* <i className="fa fa-quote-left coma"></i> */}
                                        </div>
                                        <div className="col-md-9 col-8 pr-md-2 pl-md-3 pl-1 pr-3 mt-3">
                                            <div className="average htd">"What gets measured, gets managed." <span
                                                className="jin">-PETER DRUCKER</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_1 container mt-3" id="tbs-1">
                        <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 mt-md-3 mt-0">
                            <div className="col-md-6 lever">
                                <div className="">
                                    <h1 className="ignore_1 heading_eight" >FIND Y<img src='./images/Layer_123.png' className="heading_eight layer_1212_1"/>UR
                                        TRIBE</h1>
                                    <img src='./images/line.png' className="line-12"/>
                                    <h6 className="real_matter">Crowd source your success</h6>
                                    <p className="pera_1 text-left mt-3">The economy is changing. There's more remote
                                        workers, feelancers and enterpreneurs then ever before. This means we're more
                                        empowered... but also more isolated.</p>
                                    <h6 className="heading_1 text-left ">SOMEONE'S INSIGHT CAN SAVE WEEKS OUR EVEN
                                        MONTHS OF TRYING TO FIGURE OUT SOMETHING ON YOUR OWN. </h6>
                                    <button className="bnt_112">Apply Now</button>
                                </div>
                            </div>
                            <div className="col-md-6 pl-md-3 pl-0 mt-md-0 mt-5">
                                <img src= './images/img_copy_3.png'   className="w-75 img_3"  />
                            </div>
                        </div>
                    </div>
                    <div className="banner_3">
                        <div className="">
                            {/*<img src= './images/top_curve.png'   className="top_curve w-100"/>*/}
                        </div>
                        <div className="container container_1">
                            <div className="row sctins">
                                <div className="col-lg-6 pt-5">
                                    <img src='./images/Group_51_copy.png' className="w-100 pl-md-5 pl-0 group_51"/>
                                </div>
                                <div className="col-lg-6 sctinsss mt-lg-5 mt-0 ">
                                    <div className="ml-auto">
                                        <h6 className="text-heading-12 text-white">THE SYSTEM CREATED TO REALIZE</h6>
                                        <h1 className="ignore_21 text-white">MY DREAMS, SHARED WITH <br/> Y<img
                                            src='./images/Layer_121.png' className="layer_126_1 mr-1"/>U</h1>
                                        <img src='./images/Shape_1396.png' className="line-1221"/>
                                        <h6 className="heading_2 text-white text-left ">HI! I'M ANDREW, DIGITAL NOMAD,
                                            SOFTWARE ENGINEER AND FOUNDER OF BETTER TOGETHER.</h6>
                                        <p className="pera_2-1 text-white text-left mt-3 ml-2">I realized that it was
                                            hard for me to find people that would routinely ask me the hard questions.
                                            Did i do the things that i said i was going to do? Am i living up to my
                                            potential? When i had conversations with my friends that asked the hard
                                            questions...</p>
                                        {/*<button className="bnt_12">LEARN MORE</button>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container container_1">
                        <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 qust">
                            <div className="col-lg-6 mt-md-5 mt-0 pl-lg-3 pl-0 qust-1 pr-lg-2 pr-4">
                                <div className="pl-md-5 pl-0 ml-lg-3 ml-0 FREQUENTLY_ASKED">
                                    <p className="pb-0 mb-0 fraq">FREQUENTLY ASKED</p>
                                    <h1 className="ignore-1-1 ">QUESTI<img src='./images/Layer_123.png'
                                                                           className="layer_12121"/>NS</h1>
                                    <img src='./images/line.png' className="lnise"/>
                                </div>
                                <div className="row bottom_border pt-md-4 pt-0 pl-md-2 pl-0 ml-1">
                                    <div className="col-1 pl-0">
                                        <div className="number heading-1">01</div>
                                    </div>
                                    <div className="col-7 pl-md-0 pl-3">
                                        <p className="heading_12 heading-1">WHAT IS A MASTERMIND?</p>
                                    </div>
                                    <div className="col-4 text-right pr-0 sis">
                                        <img src='./images/plus.png' className="plus" id="plus-1"/>
                                        <img src='./images/minus.png' className="minus" id="minus-1"/>
                                    </div>
                                    <div>
                                        <p className="pera-2 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past,
                                            and while there's nothing currently planned, there will eventually be live
                                            retreatsand business hackathons in the digital nomad spirt. For these, we
                                            meet in person for focused work and personal develpoment sessions.</p>
                                    </div>
                                </div>

                                <div className="row bottom_border pt-2 pl-md-2 pl-0 ml-1">
                                    <div className="col-1 pl-0 ">
                                        <span className="number heading-2">02</span>
                                    </div>
                                    <div className="col-9 pl-md-0 pl-3">
                                        <p className="heading_12 heading-2">WHAT MAKES YOUR MASTERMIND DIFFERENT THAN
                                            OTHERS?</p>
                                    </div>
                                    <div className="col-2 text-right pr-0 sis pt-1">
                                        <img src='./images/plus.png' className="plus" id="plus-2"/>
                                        <img src='./images/minus.png' className="minus" id="minus-2"/>
                                    </div>
                                    <div>
                                        <p className="pera-3 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past,
                                            and while there's nothing currently planned, there will eventually be live
                                            retreatsand business hackathons in the digital nomad spirt. For these, we
                                            meet in person for focused work and personal develpoment sessions.</p>
                                    </div>
                                </div>

                                <div className="row bottom_border pt-1 pl-md-2 pl-0 ml-1">
                                    <div className="col-1 pl-0">
                                        <span className="number heading-3">03</span>
                                    </div>
                                    <div className="col-8 pl-md-0 pl-3">
                                        <p className="heading_12 heading-3">HOW DOES BETTER TOGETHER WORK?</p>
                                    </div>
                                    <div className="col-3 text-right pr-0 sis pt-1">
                                        <img src='./images/plus.png' className="plus" id="plus-3"/>
                                        <img src='./images/minus.png' className="minus" id="minus-3"/>
                                    </div>
                                    <div>
                                        <p className="pera-4 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past,
                                            and while there's nothing currently planned, there will eventually be live
                                            retreatsand business hackathons in the digital nomad spirt. For these, we
                                            meet in person for focused work and personal develpoment sessions.</p>
                                    </div>
                                </div>

                                <div className="row bottom_border pt-2 pl-md-2 pl-0 ml-1">
                                    <div className="col-1 pl-0">
                                        <span className="number heading-4">04</span>
                                    </div>
                                    <div className="col-9 pl-md-0 pr-md-0 pr-2 pl-3">
                                        <p className="heading_12 heading-4">HOW MANY PEOPLE WILL BE IN MY
                                            MASTERMIND?</p>
                                    </div>
                                    <div className="col-2 text-right pr-0 sis pt-1">
                                        <img src='./images/plus.png' className="plus" id="plus-4"/>
                                        <img src='./images/minus.png' className="minus" id="minus-4"/>
                                    </div>
                                    <div>
                                        <p className="pera-5 ml-lg-5 pr-5 mt-1">we've hosted live retreats in the past,
                                            and while there's nothing currently planned, there will eventually be live
                                            retreatsand business hackathons in the digital nomad spirt. For these, we
                                            meet in person for focused work and personal develpoment sessions.</p>
                                    </div>
                                </div>

                                <div className="row bottom_border pt-2 pl-md-2 pl-0 ml-1">
                                    <div className="col-1 pl-0">
                                        <span className="number heading-5">05</span>
                                    </div>
                                    <div className="col-9 pr-md-0 pr-2 pl-md-0 pl-3">
                                        <p className="heading_12 heading-5">IS THERE A LIMIT TO THE NUMBER OF PEOPLE
                                            THAT CAN JOIN THE NETWORK?</p>
                                    </div>
                                    <div className="col-2 text-right pr-0 sis pt-1">
                                        <img src='./images/plus.png' className="plus" id="plus-5"/>
                                        <img src='./images/minus.png' className="minus" id="minus-5"/>
                                    </div>
                                    <div>
                                        <p className="pera-6 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past,
                                            and while there's nothing currently planned, there will eventually be live
                                            retreatsand business hackathons in the digital nomad spirt. For these, we
                                            meet in person for focused work and personal develpoment sessions.</p>
                                    </div>
                                </div>

                                <div className="row bottom_border pt-1 pl-md-2 pl-0 ml-1">
                                    <div className="col-1 pl-0">
                                        <span className="number heading-6">06</span>
                                    </div>
                                    <div className="col-9 pr-md-0 pr-2 pl-md-0 pl-3">
                                        <p className="heading_12 heading-6">ARE THERE ANY EVENTS WITH THE ENTIER
                                            NETWORK?</p>
                                    </div>
                                    <div className="col-2 text-right pr-0 sis pt-1">
                                        <img src='./images/plus.png' className="plus" id="plus-6"/>
                                        <img src='./images/minus.png' className="minus" id="minus-6"/>
                                    </div>
                                    <div>
                                        <p className="pera-7 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past,
                                            and while there's nothing currently planned, there will eventually be live
                                            retreatsand business hackathons in the digital nomad spirt. For these, we
                                            meet in person for focused work and personal develpoment sessions.</p>
                                    </div>
                                </div>

                                <div className="row pl-md-2 pt-1 pl-0 ml-1">
                                    <div className="col-1 pl-0">
                                        <span className="number_1 heading_4 pl-1">07</span>
                                    </div>
                                    <div className="col-7 pl-md-0 pl-3">
                                        <p className="heading_12 heading_4">ARE THERE ANY LIVE EVENTS?</p>
                                    </div>
                                    <div className="col-4 text-right pr-0 sis pt-1">
                                        <img src='./images/plus.png' className="plus" id="plus"/>
                                        <img src='./images/minus.png' className="minus" id="minus"/>
                                    </div>
                                    <div>
                                        <p className="pera-1 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past,
                                            and while there's nothing currently planned, there will eventually be live
                                            retreatsand business hackathons in the digital nomad spirit. For these, we
                                            meet in person for focused work and personal development sessions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="pl-md-5 pl-0 ml-lg-3 ml-0 pt-2 mt-5 FREQUENTLY_ASKED_1">
                                    <p className="pb-0 mb-0 fraq">FREQUENTLY ASKED</p>
                                    <h1 className="ignore-1-1 ">QUESTI<img src='./images/Layer_123.png'
                                                                           className="layer_12121"/>NS</h1>
                                    <img src='./images/line.png' className="lnise"/>
                                </div>
                                <div className="text-center ml-1 FREQUENTLY_ASKED_1">
                                    <img src='./images/FAQ.png' className="faq_img FREQUENTLY_ASKED_1"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="banner_4">
                        <div className="container pt-5 text-center">
                            <h6 className="pt-5 member">MEMBER</h6>
                            <h1 className="ignore_45 text-white">TESTIM<img src='./images/Layer_121.png'
                                                                            className="data_image data_image_12"/>NIALS
                            </h1>
                            <img src='./images/Shape_1396.png' className="lnise-1"/>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row cardsss ">
                            <div className="col-md-10 col-12 m-auto">
                                <div id="carouselExampleIndicators" className="carousel slide h-50"
                                     data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                            className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-12 text_field ">
                                                    <div className="row w-100 pl-5 ml-2 mt-3">
                                                        <div className="col-3 col-lg-4"></div>
                                                        <div className="col-9 col-lg-8">
                                                            <h5 className="ignore_4 insgd">Author & Podcaster
                                                                Extraordinaire </h5>
                                                            <div className="textsss">
                                                                <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve
                                                                    never felt so much clarity, consistency, and
                                                                    direction both creatively and professionally.
                                                                    Joining the Mastermind has made life go by slower
                                                                    because I use time more efficiently. With a weekly
                                                                    board of advisers to guide my entrepreneurial
                                                                    endeavors, I’m seeing a wealth of growth & learning
                                                                    and even entrepreneurial success with my progress.
                                                                    This isn’t just an investment, it’s a road map to
                                                                    fulfillment.”</p>
                                                                <h6 className="ignore_5 quin">-OUIN, HOST OF MANIA
                                                                    PODCAST</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-12 text_field ">
                                                    <div className="row w-100 pl-5 ml-2 mt-3">
                                                        <div className="col-3 col-lg-4"></div>
                                                        <div className="col-9 col-lg-8">
                                                            <h5 className="ignore_4 insgd">Author & Podcaster
                                                                Extraordinaire </h5>
                                                            <div className="textsss">
                                                                <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve
                                                                    never felt so much clarity, consistency, and
                                                                    direction both creatively and professionally.
                                                                    Joining the Mastermind has made life go by slower
                                                                    because I use time more efficiently. With a weekly
                                                                    board of advisers to guide my entrepreneurial
                                                                    endeavors, I’m seeing a wealth of growth & learning
                                                                    and even entrepreneurial success with my progress.
                                                                    This isn’t just an investment, it’s a road map to
                                                                    fulfillment.”</p>
                                                                <h6 className="ignore_5 quin">-OUIN, HOST OF MANIA
                                                                    PODCAST</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-12 text_field">
                                                    <div className="row w-100 pl-5 ml-2 mt-3">
                                                        <div className="col-3 col-lg-4"></div>
                                                        <div className="col-9 col-lg-8">
                                                            <h5 className="ignore_4 insgd">Author & Podcaster
                                                                Extraordinaire </h5>
                                                            <div className="textsss">
                                                                <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve
                                                                    never felt so much clarity, consistency, and
                                                                    direction both creatively and professionally.
                                                                    Joining the Mastermind has made life go by slower
                                                                    because I use time more efficiently. With a weekly
                                                                    board of advisers to guide my entrepreneurial
                                                                    endeavors, I’m seeing a wealth of growth & learning
                                                                    and even entrepreneurial success with my progress.
                                                                    This isn’t just an investment, it’s a road map to
                                                                    fulfillment.”</p>
                                                                <h6 className="ignore_5 quin">-OUIN, HOST OF MANIA
                                                                    PODCAST</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                       data-slide="prev">
                                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                       data-slide="next">
                                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-auths">
                            <div id="carouselExampleIndicators" className="carousel slide h-50" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                        className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-10 m-auto">
                                                <div className="row mt-3">
                                                    <div className="col-12 mobile-auth">
                                                        <h5 className="ignore_4 insgd">Author & Podcaster
                                                            Extraordinaire </h5>
                                                        <div className="">
                                                            <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve
                                                                never felt so much clarity, consistency, and direction
                                                                both creatively and professionally. Joining the
                                                                Mastermind has made life go by slower because I use time
                                                                more efficiently. With a weekly board of advisers to
                                                                guide my entrepreneurial endeavors, I’m seeing a wealth
                                                                of growth & learning and even entrepreneurial success
                                                                with my progress. This isn’t just an investment, it’s a
                                                                road map to fulfillment.”</p>
                                                            <h6 className="ignore_5 quin ml-0">-OUIN, HOST OF MANIA
                                                                PODCAST</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-10 m-auto">
                                                <div className="row mt-3">
                                                    <div className="col-12 mobile-auth">
                                                        <h5 className="ignore_4 insgd">Author & Podcaster
                                                            Extraordinaire </h5>
                                                        <div className="">
                                                            <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve
                                                                never felt so much clarity, consistency, and direction
                                                                both creatively and professionally. Joining the
                                                                Mastermind has made life go by slower because I use time
                                                                more efficiently. With a weekly board of advisers to
                                                                guide my entrepreneurial endeavors, I’m seeing a wealth
                                                                of growth & learning and even entrepreneurial success
                                                                with my progress. This isn’t just an investment, it’s a
                                                                road map to fulfillment.”</p>
                                                            <h6 className="ignore_5 quin ml-0">-OUIN, HOST OF MANIA
                                                                PODCAST</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-10 m-auto">
                                                <div className="row mt-3">
                                                    <div className="col-12 mobile-auth">
                                                        <h5 className="ignore_4 insgd">Author & Podcaster
                                                            Extraordinaire </h5>
                                                        <div className="">
                                                            <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve
                                                                never felt so much clarity, consistency, and direction
                                                                both creatively and professionally. Joining the
                                                                Mastermind has made life go by slower because I use time
                                                                more efficiently. With a weekly board of advisers to
                                                                guide my entrepreneurial endeavors, I’m seeing a wealth
                                                                of growth & learning and even entrepreneurial success
                                                                with my progress. This isn’t just an investment, it’s a
                                                                road map to fulfillment.”</p>
                                                            <h6 className="ignore_5 quin ml-0">-OUIN, HOST OF MANIA
                                                                PODCAST</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="conatiner_fuild">
                    </div>
                    <div className="container">
                        <div className="mt-md-0 mt-5 text-center pt-md-4 pt-0 we_are_better">
                            <h3 className="fraq-1">WE'RE BETTER</h3>
                            <h1 className="ignore_3 gether_12" style={ignoreStyle}>T<img src='./images/Layer_123.png'
                                                                                         className="data_image"/>GETHER
                            </h1>
                            <img src='./images/line.png' className="line_1"/>
                        </div>
                        <div className="row">
                            <div className="col-md-11 m-xl-auto m-lg-0 m-auto">
                                <div className="row">
                                    <div className="col-lg-4 pr-0 col-md-6">
                                        <div className=" bg-img-1 posit">
                                            <div className="text-center mt-4 pt-md-4 pt-5">
                                                <img src='./images/Layer_262.png' className="layer_262"/>
                                                <div className="row">
                                                    <div className="col-md-10 m-auto">
                                                        <h3 className="ignore_6">APPLY & GET MATCHED WITH YOUR
                                                            TRIBE.</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className=" bg-img-1">
                                            <div className="text-center mt-4 pt-md-4 pt-5">
                                                <img src='./images/Layer_263.png' className="layer_262"/>
                                                <div className="row">
                                                    <div className="col-2 text-left pl-4">
                                                        <img src='./images/layer_122.png' className="arrow"/>
                                                    </div>
                                                    <div className="col-8">
                                                        <h3 className="ignore_6 meet_weekly">MEET WEEKLY <br/>IN A
                                                            CURATED SMALL GROUP.</h3>
                                                    </div>
                                                    <div className="col-2 pl-1">
                                                        <img src='./images/layer_122.png' className="arrow-1"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className=" bg-img-1 posit_1">
                                            <div className="text-center mt-4 pt-md-4 pt-5">
                                                <img src='./images/Layer_264.png' className="layer_262"/>
                                                <div className="row">
                                                    <div className="col-md-10 m-auto">
                                                        <h3 className="ignore_6">TRACK YOUR PROGRESS USING OUR
                                                            TOOLS.</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner_7">
                        <div className="container container_1 pt-5 pl-xl-5">
                            <div className="row join_us pl-xl-5">
                                <div className="col-lg-5">
                                    <h4 className="text-white join_us_1">JOIN US!</h4>
                                    <h1 className="ignore_2 community text-white">C<img src='./images/Layer_121.png'
                                                                                        className="imgs_data"/>MMUNITY
                                    </h1>
                                    <img src='./images/Shape_1396.png' className="shape"/>
                                    <div className="row">
                                        <div className="col-lg-7 pr-0">
                                            <h5 className="text-white font-weight-bold mb-0 chosen_1">MEMBERSHIP DUES
                                                ARE</h5>
                                            <p className="text-white pt-0 chosen">Members are selectively chosen.</p>
                                        </div>
                                        <div className="col-md-5 pl-lg-0 pl-4">
                                            <button className="bnt_3">$99/MONTH</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-7">
                                    <div className="mt-3 search_1">
                                        <Subscribe
                                            formClass="footerSub"
                                            inputClass="footerInput"
                                            customButton={<div><button className="bnt_2">JOIN US</button></div>}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid mt-5">
                            <div className="row" id="instafeed"></div>
                        </div>
                    </div>
                    <div className="container pb-5 mt-3 pt-1">
                        <div className="row">
                            <div className="col-md-10 m-auto pl-gl-0 pr-lg-0">
                                <div className="row brde pb-4">
                                    <div className="col-sm-3 col-7">
                                        <img src='./images/footer_logo.png' className="w-100"/>
                                    </div>
                                    <div className="col-sm-9 mt-3 pr-0">
                                        <div className="float-right pr-2">
                                            <ul className="nav">
                                                <li className="nav-item pl-md-4 pl-0">
                                                    <h6 className="nav-link">Home</h6>
                                                </li>
                                                <li className="nav-item pl-md-4 pl-0">
                                                    <h6 className="nav-link" href="#">Why This Project?</h6>
                                                </li>
                                                <li className="nav-item pl-md-4 pl-0">
                                                    <h6 className="nav-link" href="#">Our Values</h6>
                                                </li>
                                                <li className="nav-item pl-md-4 pl-0">
                                                    <h6 className="nav-link" href="#">Application</h6>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-9 pl-md-0 pl-4">
                                            <div className="copy-right_1 pt-4">
                                                <p className="mb-0 pb-0 mt-4 float-left copy_right">&#9400; 2019 <span
                                                    className="better">BETTER TOGETHER.</span> All Right Reserved. </p>
                                                <div className="float-left ml-3 mt-4 brdss">Privacy Policy</div>
                                                <div className="mt-4 ml-3 float-left brdss">Term and Conditions</div>
                                            </div>
                                        </div>
                                        <div className="col-3 mt-4 pt-3 pl-lg-4">
                                            <div className="text-right">
                                                <div className="row mt-md-0 mt-3 ml-lg-2">
                                                    <div className="col-md-5">
                                                    </div>
                                                    <div className="col-md-3 mt-md-0 mt-4 pt-md-0 pt-2">
                                                        <a href="https://www.instagram.com/we_are_bettertogether/"
                                                           target="_blank">
                                                            <div className="msg">
                                                                <img src='./images/Layer_44.png' className="imgssss"/>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4 mt-md-0 mt-2">
                                                        <a href="mailto:andrew@bettertogethermm.com">
                                                            <div className="msg">
                                                                <img src='./images/Shape_1419.png' className="imgssss"/>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
          .banner{
    background-image: url(./images/Banner.png);
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    padding-bottom:100px;
    font-family: proxima-nova, sans-serif;
    font-style: normal;
}
*{
    font-family: proxima-nova, sans-serif !important;
}
body h1{
    font-weight: 800 !important;
}
body h4{
    font-weight: 800 !important;
}
body h3{
    font-weight: 900 !important;
}
body h6{
    font-weight: 800 !important;
}
.layer_img.w-100:hover {
    opacity: 0.8;
    box-shadow: 0 1px 8px black;
}
ul li h6{
    cursor: pointer;
}
ul li h6:hover{
    color: #ca3535 !important;
}
.brdss{
    cursor: pointer;
}
.brdss:hover{
    color: #ca3535 !important;
}
.banner_1{
    background-color: white;
    font-family: proxima-nova, sans-serif;
}
.brder{
    border-left: 3px solid #fbde06;
    margin-left: 33px;
}
.master_text{
    color: #fbde06;
    font-size: 16px;
    letter-spacing: .3px;
}
.text_items{
    align-items: center;
}
.account{
    color: white;
    letter-spacing: 12.7px;
    font-size: 20px;
    text-transform: uppercase;
}
.layer_121{
    width: 8.5%;
    margin-top: -8px;
}
.layer_125{
    width: 8%;
    margin-top: -5px;
}
.layer_126{
    width: 3.6%;
    padding-bottom: 10px;
}
.layer_126_1{
    width:8%;
    padding-bottom: 10px;
}
.sction{
    padding-left: 70px;
    padding-top: 62px;
}
.dreams {
    width: 100%;
    margin: auto;
    font-family: proxima-nova,sans-serif;
    font-weight: 700;
    line-height: 57px;
    text-transform: uppercase;
    color: white;
    font-size: 56px;
    letter-spacing: 5px;
}
.sctinss{
    padding-left: 78px;
    margin-top: 12px;
}
.sct{
    padding-top:13px

}
.search{
    float: left;
    width: 80% !important;
    border: none;
}
.search:focus{
    outline: none;
    box-shadow: none !important;
    border: none !important;
}
.layer_122{
    background: #ca3535;
    padding: 6px 13px;
    border-radius: 50%;
    margin-right: 8px;
    float: right;
}
.banner_1_img{
    width: 63%;
}
.search_1{
    // width: 93%;
    // margin-left: 9px;
    // border-radius: 30px;
    // padding: 6px 0px 6px 14px;
    height: 50px;
    cursor: pointer;
}
.group_64{
    position: absolute;
    top: 0px;
    right: -83px
}
.text-heading{
    font-size: 18px;
    color: #ffdd00;
    text-transform: uppercase;
    margin-bottom: 0px;
    margin-top: 4px;
    padding-left: 0px;
    letter-spacing: 2px;
    margin-left: -3px;
}
.text-heading-12{
    font-size: 18px;
    color: #ffdd00;
    text-transform: uppercase;
    margin-bottom: 0px;
    margin-top: 2px;
    padding-left: 34px;
    letter-spacing: 2px;
}
.ignore{
    color: #345771;
    font-size: 49px;
    margin-bottom: 0px;
    margin-left: -5px;
    letter-spacing: 3px;
}
.numberss{
    font-size: 33px;
    font-weight: 700;
    color: white;
    padding-top: 43px;
    margin-left: 6px;
}
.trnsp{
    background: linear-gradient(45deg, #00000038, #00000030);
    height: 135px;
    width: 142px;
    text-align: center;
    border-radius: 50%;
}
.layer_1212{
    width: 6%;
    margin-top: -9px;
}
.layer_1212_1{
    width: 7.5%;
    margin-top: -9px;
}
.layer_12121{
    width: 10.5%;
    margin-top: -9px;
}
.underline{
    margin-top: -22px;
    width: 10%;
    margin-left: 1px;
}
.under_line{
    margin-left: 22px;
}
.trnsp_1{
    background: linear-gradient(45deg, #00000038, #00000030);
    height: 135px;
    width: 142px;
    text-align: center;
    border-radius: 50%;
}
.total{
    font-size: 12px;
    font-weight: 600;
    color: white;
    margin-top: -10px;
}
.goal{
    font-size: 13px;
    font-weight: 500;
    color: white;
    margin-left: 12px;
    margin-top: -9px;
}
.line{
    margin-top: -22px;
    width: 8%;
    margin-left: -6px;
}
.line_1{
    margin-top: -30px;
    width: 4%;
}
.pera{
    font-size: 17px;
    width: 73%;
    margin-left: -5px;
    margin-bottom: 0px;
    font-weight: 500;
    margin-top: 3px;
    line-height: 24.9px;
}
.img_3{
    margin-top: -40px;
    margin-left: 10px;
    width: 82%;
}
.heading{
    width: 75%;
    font-size: 18px;
    color: #345771;
    font-weight: 700;
    margin-top: 15px;
    margin-left: -6px;
    letter-spacing: 0.5px;
}
.bnt{
    background: white;
    border: 1.5px solid #e8e8e8;
    padding: 11px 26px;
    border-radius: 30px;
    color: #cf4949;
    font-weight: 700;
    margin-top: 21px;
    letter-spacing: 1px;
    margin-left: -5px;
}
.find_more_1.p-2.heading_eight {
    font-weight: 800 !important;
}
.bnt_1{
    background: transparent;
    border: 1.5px solid #fffdfd;
    padding: 11px 21px;
    border-radius: 30px;
    color: #fbde06;
    font-weight: 700;
    margin-top: 9px;
    margin-left: 6px;
}
.bnt_12{
    background: transparent;
    border: 1.5px solid #fffdfd;
    padding: 11px 21px;
    border-radius: 30px;
    color: #fbde06;
    font-weight: 700;
    margin-top: 9px;
    margin-left: 34px;
}
.bnt_12:hover{
    background: #fbde06;
    color: white;
    border: 1.5px solid #fbde06;
}
.videos{
    border:10px solid white;
    box-shadow: 4px -12px 14px -3px #efefef;
    border-radius: 10px;
    width: 75%;
    height: 488px;
}
.banner_2{
    background-image: url(./images/start_video.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    padding-bottom: 363px;
    margin-top: 8%;
}
.leverage{
    width: 69%;
    margin: 0 auto;
    font-size: 50px;
    font-weight: 800;
    line-height: 36px;
    letter-spacing: 3.5px;
    color: white;
    margin-top: 1px;
}
.leverage-1{
    width: 69%;
    margin: 0 auto;
    font-size: 50px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 3px;
    color: white;
    margin-top: -5px;
}
.intro{
    font-weight: 600;
    font-size: 21px;
    margin-top: 51px;
    margin-left: -5px;
    color: white;
    letter-spacing: .1px;
}
.bg_img_1{
    background-image: url(./images/01001.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 4px -12px 14px -19px #efefef;
}
.mobile-auths{
    display: none;
}
.bg_img_2{
    background-image: url(./images/020.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    border-radius: 20px;
    box-shadow: 4px -12px 14px -19px #efefef;
    cursor: pointer;
}
.bg_img_3{
    background-image: url(./images/030.png);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 4px -12px 14px -19px #efefef;
    cursor: pointer;
}
.coma{
    background: #e8f7f2;
    padding: 22px 23px;
    border-radius: 50%;
    font-size: 40px;
    color: #19b582;
    margin-left: 5px;
}
.img__1{
    display: none;
}
.img__2{
    display: none;
}
.img__3{
    display: none;
}
.boxes{
    box-shadow: 3px 1px 13px 8px #ececec;
    border-radius: 60px;
}
.average{
    color: #345771;
    font-size: 19px;
    font-weight: 500;
}
.average_12{
    margin-top: 18px;
}
.tribe_1{
    color: #345771;
    font-size: 27px;
    width: 75%;
    padding: 19px 26px;
    letter-spacing: 1px;
    line-height: 28px;
    margin-top: 6px;
}
.tribe-121-2{
    color: #345771;
    font-size: 27px;
    width: 75%;
    padding: 19px 15px;
    letter-spacing: 2.9px;
    line-height: 28px;
    margin-top: 7px;
}

.tribe_121{
    color: black;
    font-size: 26px;
    width: 75%;
    padding: 19px 23px;
    letter-spacing: 3px;
}
.ignore_45{
    letter-spacing: 2px;
    width: 100%;
    font-size: 55px;
    margin-bottom: 0px;
    margin-top: -13px;
}
.lnise-1 {
    margin-left: 2px;
    margin-top: -28px !important;
    width: 4%;
}
.lasga{    
    width: 8%;
    margin-top: -7px;
}
.jin{
    color: #cf4949;
    font-weight: 700;
    font-size: 20px;
}
.active-1{
    background-color: rgb(251, 223, 13);
    border-radius: 20px;
    box-shadow: 4px 4px 14px -3px #efefef;
    border-bottom: 6px solid rgb(220, 195, 4);
    padding-bottom: 0px !important;
}
.active-2{
    background-color: rgb(251, 223, 13);
    border-radius: 5px;
    box-shadow: 4px 4px 14px -3px #efefef;
    border-bottom: 6px solid rgb(220, 195, 4);
}
.carousel-inner{
    height: 380px;
}
#tbs-2{
    display: none;
}
#tbs-3{
    display: none;
}
.active-1:after {
    left: 45%;
    content: " ";
    position: absolute;
    bottom: -13px;
    border: 15px solid transparent;
    border-top-color: rgb(220, 195, 4);
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    border-bottom: none;
  }
  .fms{
      padding-top: 30%;
  }
  .imgssss{
    margin-top: 8px;
    width: 23px;
  }
  .msg{
    box-shadow: 0px 3px 11px 3px #e6e6e6;
    height: 40px;
    width: 40px;
    text-align: center;
    border-radius: 50%;
  }
  .boxsss{
    position: absolute;
    width: 96%;
    top: -348px;
    margin-left: 10px;
  }
.pera_1{
    font-size: 16px;
    width: 95%;
    margin-left: 15px;
    letter-spacing: .5px;
    font-weight: 500;
    margin-bottom: 0px;
}

.pera_2{
    font-size: 14px;
    width: 79%;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 22px;
}
.quin{
    padding-top: 15px;
}
.pera_2-1{
    font-size: 15px;
    width: 80%;
    letter-spacing: 1.2px;
    font-weight: 500;
    margin-top: 0px !important;
    line-height: 22px;
    padding-left: 27px;
}
.heading_1{
    width: 97%;
    font-size: 19px;
    color: #345771;
    font-weight: 800;
    margin-top: 17px;
    letter-spacing: .3px;
    margin-left: 16px;
    word-spacing: 1px;
}
.bnt_112{
    background: white;
    border: 1.5px solid #e8e8e8;
    padding: 11px 26px;
    border-radius: 30px;
    color: #cf4949;
    font-weight: 700;
    margin-top: 20px;
    letter-spacing: 1px;
    margin-left: 18px;
}
.heading_2{
    width: 82%;
    font-size: 18px;
    color: #345771;
    font-weight: 600;
    margin-top: 2px;
    margin-left: 34px;
}
.line-1221{
    width: 9%;
    margin-left: 31px;
    margin-top: -28px;
}
.line-12{
    margin-left: 14px;
    width: 9%;
    margin-top: -23px;
}
.ignore_1{
    color: #345771;
    font-size: 54px;
    margin-bottom: 0px;
    margin-top: -10px;
    margin-left: 15px;
}
.ignore-1-1{
    color: #345771;
    font-size: 54px;
    margin-bottom: 0px;
    letter-spacing: .4px;
    margin-top: -7px;
    margin-left: 19px;
}
.faq_img{
    width: 470px;
}
.lnise{
    margin-left: 19px;
    margin-top: -22px !important;
    width: 13%;
}
.ignore_2{
    width: 85%;
    letter-spacing: 4px;
    font-size: 48px;
    line-height: 50px;
    margin-left: 3px;
    margin-bottom: 0px;
}
.ignore_21{
    width: 79%;
    letter-spacing: 4.2px;
    font-size: 49px;
    line-height: 51px;
    margin-left: 31px;
    margin-top: 2px;
    margin-bottom: 0px;
}
.scrh{
    background: transparent;
    border: none;
    padding: 0px;
    float: right;
}
.banner_3{
    background-image: url(./images/Clip@2x.png);
    background-size: cover;
    background-position: center center;
    padding: 12%;
}
.join_us{
    margin-top: 100px;
}

.view_img{
    display: none;
}
.banner_7{
    background-image: url(./images/join_video.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    padding-bottom: 215px;
    margin-top: 30px;
}
.banner_4{
    background-image: url(./images/TESTIMONIALS.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 210px;
}
.number{
    font-size: 15px;
    font-weight: 700;
    color: #34577178;
    margin-top: -2px;
    margin-left: 3px;
}
.sis{
    margin-top: -4px;
}
.bnt_112:hover{
    background-color: #fbde06;
    color: white;

}
.heading_3{
    font-size: 15px;
    font-weight: 700;
    color: #345771;
    margin-top: 3px;
}
.heading_12{
    font-size: 14px;
    font-weight: 700;
    color: #345771;
    letter-spacing: 1.1px;
}
.heading_13{
    font-size: 14px;
    font-weight: 700;
    color: #345771;
    letter-spacing: 1.1px;
}
.heading_14{
    font-size: 14px;
    font-weight: 700;
    color: #345771;
    letter-spacing: 1.1px;
}

.heading_15{
    font-size: 14px;
    font-weight: 700;
    color: #345771;
    letter-spacing: 1.1px;
}
.heading_16{
    font-size: 14px;
    font-weight: 700;
    color: #345771;
    letter-spacing: 1.1px;
}
.heading_17{
    font-size: 14px;
    font-weight: 700;
    color: #345771;
    letter-spacing: 1.1px;
}
.heading_18{
    font-size: 14px;
    font-weight: 700;
    color: #345771;
    letter-spacing: 1.1px;
}
.col-1{
    max-width: 7.44444% !important
}
.number_1{
    font-size: 15px;
    font-weight: 700;
    color: #34577178;
}
.bottom_border{
    border-bottom: 2px solid #f7f6f6;
}
.pera-1{
    font-size: 14px !important;
    width: 100%;
    font-weight: 400;
    display: none;
    color: #000000;
}
.pera-2{
    font-size: 16px !important;
    width: 100%;
    font-weight: 400;
    display: none;
    color: #b5b5b5;
}
.pera-3{
    font-size: 16px !important;
    width: 100%;
    font-weight: 400;
    display: none;
    color: #b5b5b5;
}
.pera-4{
    font-size: 16px !important;
    width: 100%;
    font-weight: 400;
    display: none;
    color: #b5b5b5;
}
.pera-5{
    font-size: 16px !important;
    width: 100%;
    font-weight: 500;
    display: none;
}
.pera-6{
    font-size: 16px !important;
    width: 100%;
    font-weight: 400;
    display: none;
    color: #b5b5b5;
}
.pera-7{
    font-size: 16px !important;
    width: 100%;
    font-weight: 400;
    display: none;
    color: #b5b5b5;
}
.plus{
    cursor: pointer;
}
.minus{
    cursor: pointer;
    display: none;
}
.member{
    align-items: center;
    font-weight: 600;
    font-size: 21px;
    color: white;
    margin-top: 35px;
}
.ignore_3{
    width: 100%;
    font-size: 48px;
    margin-bottom: 0px;
}
.ignore_4{
    width: 100%;
    font-size: 21px;
    margin-bottom: 0px;
    padding-top: 43px;
    color: #345771;
}
.ignore_5{
    font-weight: 800;
    width: 100%;
    font-size: 18px;
    margin-bottom: 0px;
    color: #cf4949;
}
.imgs_data{
    width: 10%;
    margin-top: -8px;
}
.shape{
    width: 9%;
    margin-left: 4px;
    margin-top: -11px;
}
.data_image{
    width: 3.7%;
    margin-top: -10px;
}
.text_field{
    background-image: url(./images/group60.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 26%;
    padding-bottom: 100px;
    border-radius: 20px;
    box-shadow: 0px 0px 0px -53px #888888;
}
.bg-img-1{
    height: 305px;   
    width: 333px;
    border-radius: 50%;
    box-shadow: 4px 4px 14px 4px #efefef;
}
.real_matter{
    font-size: 19px;
    margin-top: 4px;
    color: #00b582;
    margin-left: 15px;
    letter-spacing: 1px;
}
.charity{
    font-size: 14px;
    font-weight: 500;
    color: #345771;
    margin-left: 5px;
}
.number121{
    width: 100%;
    font-size: 55px;
    color: #cc3535;
    line-height: 23px;
    font-weight: 800;
    border-left: 5px solid #cc3535;
    padding-top: 10px;
    padding-left: 10px;
}
.number122{
    width: 100%;
    font-size: 55px;
    color: #00b582;
    line-height: 23px;
    font-weight: 800;
    border-left: 5px solid #00b582;
    padding-top: 10px;
    padding-left: 10px;
}
.posit{
    position: relative;
    left: 50px;

}
.posit_1{
    position: relative;
    right:50px;
}
.layer_262{
    margin-top: 25px;
    margin-left: -19px;
    width: 41%;
}
.ignore_6{
    width: 91%;
    margin: auto;
    font-size: 23px;
    margin-bottom: 0px;
    padding-top: 17px;
    color: #345771;
}
.inpt{
    border-radius: 30px;
    padding: 30px 22px !important;
    width: 74%;
    margin-left: 68px;
}
.bnt_2{
    background: #fbde06;
    padding: 12px 20px;
    border: 1px solid #fbde06;
    border-radius: 60px;
    margin-top: 12px;
    font-weight: 700;
    font-size: 20px;
}
.chosen{
    font-weight: 100;
    font-size: 15px;
    margin-top: -3px;
    margin-left: 5px;
    letter-spacing: .5px;
}
.gether_12{
    font-size: 56px;
    margin-bottom: 0px;
    margin-top: -10px;
    margin-left: 3px;
}
.chosen_1{
    font-size: 18px;
    margin-left: 6px;
    margin-top: 6px;
    letter-spacing: 1px;
}
.bnt_3{
    font-weight: 800;
    color: #fbde06;
    background: transparent;
    border: 1px solid #fbde06;
    padding: 1px 11px;
    font-size: 20px;
    border-radius: 30px;
    margin-top: 9px;
}
.layer_img {
    margin-top: 10px;
}
.brde{
    border-bottom: 1px solid #ececec;
    padding-bottom: 13px;
}
.brdss{
    border-left: 2px solid #e0e0e0;
    padding-left: 15px;
    font-weight: 600;
    letter-spacing: .7px;
}
.copy_right{
    font-weight: 600;
    letter-spacing: 1.06px;
}
.better{
    color: #345771;
    font-weight: 700;
}
.copy-right_1{
    font-size: 13px;
}
.gether_1{
    color: #345771;
}
nav h6{
    text-transform: uppercase;
    color: white !important;
    text-align: center;
    padding: 10px 15px !important;
}
nav button{
    text-transform: uppercase;
    background-color: #fbde06;
    border: 1px solid #fbde06;
    border-radius: 25px;
    padding: 6px 13px;
    font-weight: 700;
    margin-left: 10px;
}
.FREQUENTLY_ASKED{
    display: none;
}
.video{
    position: absolute;
}
.cardsss{
    margin-top: -270px;
    margin-left: -22px;
}
.tabes_1{
    display: none;
}
.clear_fix{
    clear: both;
}
.find_more_1{
    font-size: 11px;
    font-weight: 800 !important;
    color: #345771
}
.per{
    width: 95%;
    letter-spacing: 1.7px;
    line-height: 23px;
}
.insgd{
    padding-top: 39px;
    letter-spacing: .5px;
}
.fraq{
    font-size: 18px;
    color: #cf4949;
    font-weight: 600;
    letter-spacing: 2px;
    margin-left: 19px;
    padding-top: 13px;
}
.fraq-1{
    font-size: 18px;
    color: #cf4949;
    font-weight: 600;
    letter-spacing: 2.1px;
    padding-top: 0px;
}
.bnt:hover{
    background-color: #fbde06;
    color: white;
}
.heading_eight {
    font-weight: 800;
}
.bnt_1:hover{
    background-color: #fbde06;
    color: white;
}
.bnt_2:hover{
    background-color: transparent;
    color: black;
}
.arrow{
    position: absolute;
    top: -5px;
    left: 26px;
    width: 21%;
}
.arrow-1{
    position: absolute;
    top: -5px;
    right: 26px;
    width: 21%;
}
.join_us_1{
    font-size: 21px;
    margin-left: 10px;
    margin-top: 1px;
}
.community{
    margin-top: -5px;
}
@media screen and (max-width: 1440px) , screen and (max-height: 990px) {
    .banner_4{
        height: 520px;
    }
    .banner_7{
        height: 720px;
    }
  }
  @media screen and (max-width: 1900px) and (min-width:1799px){
    .banner_4{
        height: 585px;
    }
    .banner_7{
        height: 950px;
    }
    .banner_3{
        height: 935px;
    }
    .group_51{
        margin-top: 95px;
    }
  }
@media only screen and (max-width: 1170px) and (min-width: 970px){
    .group_64{
        right: 10px;
        top: 20px;
    }
    .pera_2-1{
        width: 100%;
    }
    .ignore_21{
        width: 100%;
    }

    .banner_3{
        height: 900px;
    }
    .pera_2{
        width: 100%;
    }
    .join_us{
        padding-top: 70px;
    }
    .arrow{
        display: none;
    }
    .arrow-1{
        display: none;
    }
    .trnsp_1{
        height: 123px;
        width: 130px;
    }
    .trnsp{
        height: 123px;
        width: 130px;
    }
    .numberss{
        font-size: 24px;
        padding-top: 40px;
        margin-left: 0px;
    }
    .goal{
        font-size: 14px;
        margin-top: 1px;
    }
    .ignore-1-1{
        font-size: 46px;
    }
    .videos{
        height: 300px;
    }
    .ignore_2{
        width: 100%;
    }
    .total{
        font-size: 12px;
        margin-top: 1px;
    }
    .video{
        position: relative;
        top: 0;
    }
    .search{
        width: 70% !important;
    }
    .fms{
        padding-top: 12% !important;
    }
    .dreams{
        font-size: 43px;
        letter-spacing: 0px;
    }
    .tribe_121{
        width: 100% !important;
        font-size: 22px;
        margin-top: 10px;
        font-weight: 800 !important;
    }
    .boxsss{
        top: -338px;
    }
    .faq_img{
        width: 100%;
    }
    .ignore_1{
        font-size: 43px;
        margin-top: 30px;
    }
    .posit{
        left: 0px;
    }
    .posit_1{
        right: 0px;
    }
    .gether_12{
        font-size: 43px;
        margin-top: 30px;
        margin-left: 10px;
    }
    .line{
        margin-left: 3px;
    }
    .tribe-1{
        letter-spacing: -1px !important;
    }
    .leverage{
        font-size: 35px;
    }
    .intro{
        font-size: 14px;
        padding: 0px 12px;
    }
    .ignore{
        font-size: 32px;
    }
    .pera{
        width: 100%;
    }
    .heading{
        width: 100%;
    }
    .banner_1_img{
        width: 100%;
    }
    .graphix{
        width: 100% !important;
    }
    .account{
        letter-spacing: 4.7px;
    }
    .search_1{
        width: 85%;
        margin-right: auto;
        margin:0px;
    }
    .tribe_1{
        font-size: 20px;
    }
    .tribe_121{
        width: 100%;
    }
    .boxsss{
        position: relative !important;
        top: 0px;
    }
    .video{
        position: relative;
        top: 0;
    }
    .img_3{
        margin-top: 20px !important;
        margin-left: 0px !important;
    }
}

@media only screen and (max-width:1004px){
    .textsss{
        height: 51px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .ignore_21{
        width: 100%;
    }

    .banner_1_img{
        width: 100%;
    }
    .fms{
        padding-top: 0% !important;
    }
    .boxsss{
        top: -338px;
    }
    .intro{
        font-size: 14px;
        padding:0px 12px;

    }
    .data_image{
        width: 9%;
        margin-top: -6px;
    }
    .leverage{
        font-size:26px;
        line-height: 27px;
        letter-spacing: 3px;
    }
    .ignore{
        font-size: 32px;
    }
    .pera{
        width: 100%;
    }
    .heading{
        width: 100%;
    }
    .graphix{
        width: 75% !important;
    }
    .search_1{
        width: 74% ;
        margin-right: auto;
        margin:0px;
    }
    .tribe_1{
        font-size: 20px;
    }
    .tribe_121{
        width: 100%;
    }
    .boxsss{
        position: relative !important;
        top: 0px;
    }
    .video{
        position: relative;
        top: 0;
    }
    .img_3{
        margin-top: 20px !important;
        margin-left: 0px !important;
    }
    .sction{
        padding-top: 0px !important;
        padding-left: 0px !important;
    }
    .sctinss{
        margin-top: 0px !important;
        margin-left: 0px !important;
    }
}
@media only screen and (max-width: 1280px) and (min-width: 1171px){
    .group_64{
        right: 0px;
        top: 50px;
    }
    .faq_img{
        width: 100%;
    }
    .fms{
        padding-top: 25% !important;
    }
    .boxsss{
        top: -338px;
    }
    .numberss{
        font-size: 29px;
        padding-top: 38px;
    }
    .trnsp{
        height: 140px;
        width: 142px;
    }
    .trnsp_1{
        height: 140px;
        width: 142px;
    }
    .goal{
        font-size: 14px;
    }
    .total{
        font-size: 12px;
    }
    .intro{
        font-size: 13px;
    }
    .fms{
        padding-top: 35%;
    }
    .ignore{
        font-size: 32px;
    }
    .pera{
        width: 100%;
    }
    .heading{
        width: 100%;
    }
    .graphix{
        width: 75% !important;
    }
    .search_1{
        width: 74% ;
        margin-right: auto;
        margin:0px;
    }
    .img_3{
        margin-top: 20px !important;
    }
    .leverage{
        font-size:40px;
    }
    .tribe_1{
        font-size: 20px;
    }
    .tribe_121{
        width: 100%;
    }
    .boxsss{
        position: relative !important;
        top: 0px;
    }
}
  @media only screen and (max-width:810px){
    .fraq{
        margin-left: 0px !important;
    }
    .faq_img{
        width: 100%;
    }
    .layer_1212_1{
        width: 10%;
    }
    .group_51{
        margin-top: 35px;
    }
    .mobile-auths{
        display: block;
    }
    .member {
        margin-top: 48px !important;
    }
    .cardsss{
        display: none;
    }
    .mobile-auth{
        background: white;
        box-shadow: 0px 0px 16px 0px #d0d0d0;
        border-radius: 10px;
        padding: 12px;
    }
    .carousel-inner{
        height: 350px !important;
    }
    .arrow{
        display: none;
    }
    .member{
        margin-top: 125px;
    }
    .arrow-1{
        display: none;
    }
    .number121{
        font-size: 33px;
        margin-top: 15px;
    }
    .jin{
        font-size: 16px;
    }
    .number122{
        font-size: 33px;
        margin-top: 15px;
    }
    .tribe_121{
        width: 100%;
    }
    .average{
        font-size: 11px;
        margin-left: 0px;
        margin-top: 0px;
    }
    .ignore_2{
        font-size: 42px;
        width:100%;
        letter-spacing: 0px;
    }
    .textsss{
        height: 94px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .group_64{
        right: 29px;
    }
    .sction{
        padding-top: 0px !important;
        padding-left: 0px !important;
    }
    .sctinss{
        margin-top: 0px !important;
        margin-left: 0px !important;
    }
    .intro{
        padding-top: 107px !important;
    }
    .videos{
        height: 200px;
        width: 100% !important;
    }
    .search{
        width: 75% !important;
    }
    .leverage-1{
        font-size: 22px;
        width: 100%;
    }
    .ignore-1-1{
        margin-left: 0px;
        font-size: 37px
    }
    .lnise{
        margin-left: 0px;
    }
    .dreams{
        font-size: 45px;
        letter-spacing: 0px;
        line-height: 40px !important;
    }
    .account{
        letter-spacing: 10px;
        font-size: 17px;
    }
    .col-md-6{
        text-align: left !important;
    }
    .pera_2{
        font-size: 13px;
        width: 100%;
        margin-left: 5px;
    }
    .text-heading{
        font-size: 16px;
        margin-top: 25px;
    }
    .ignore_3{
        color: #345771;
        font-size: 32px;
    }
    .carousel-inner{
        height: 166px;
    }
    .imgs_data{
        width: 8%;
        margin-top: -5px;
    }
    .ignore_4{
        font-size: 17px;
        padding-top:20px ;
        margin-left: 0px;
    }
    .ignore_5{
        font-size: 15px;
        padding-top:10px ;
        margin-left: 20px;
    }
    .ignore_6{
        width: 64%;
        margin: auto;
        font-size: 15px;
    }
    .meet_weekly{
        width: 75% !important; 
        margin-top: 10px;
    }
    .posit{
        left:0px;
    }
    .bg-img-1{
        margin-top: 10px;
    }
    .bg_img_1{
        padding-bottom: 0px;
        box-shadow: 4px 3px 20px -8px #d2d2d2;
    }
    .bg_img_2{
        margin-top: 0px;
        padding-bottom: 0px;
        box-shadow: 4px 3px 20px -8px #d2d2d2;
    }
    .bg_img_3{
        margin-top: 10px;
        padding-bottom: 0px;
        box-shadow: 4px 3px 20px -8px #d2d2d2;
    }
    .bg_img_2 .active-1{
        margin-top: 10px;
        padding-bottom: 0px !important;
    }
    .posit_1{
        right: 0px;
    }
    .banner_2{
        padding-bottom: 260px;
    }
    .data_image {
        width: 3%;
        margin-top: -6px;
    }
    .imgs_data {
        width: 5%;
        margin-top: -5px;
    }
    .cardsss{
        margin-top: 0px !important;
    }
    .copy_right{
        margin-left: 14px;
    }
    .bg-img-1 {
        height: 250px;
        width: 250px;
        margin: 20px auto;
    }
    .inpt{
        margin-left: 0px;
        width: 100%;
    }
    .layer_126_1 {
        width: 6%;
        padding-bottom: 10px;
    }
    .layer_12121 {
        width: 4%;
        margin-top: -9px;
    }
    .active-1:after {
        bottom: -9px;
    }
    .data_image_12{
        width: 5.5%;
        margin-top: -12px;
    }
    .layer_121 {
        width: 4.5%;
        margin-top: -8px;
        margin-left: 4px;
    }
    .layer_1212_1 {
        width: 10.5%;
        margin-top: -9px;
    }
    .bnt_2{
        margin-left: 0px;
    }
    .layer_262{
        margin-top: 10px;
        margin: auto;
    }
    .msg{
        padding: 8px 7px !important;
        
    }
    .imgssss{
        margin-top: 0px;
    }
    .graphix{
        width: 100% !important;
    }
    .banner_3 {
        height: 1200px;
    }
  }
  @media only screen and (max-width:440px){
    .layer_img{
        margin-top: 10px;
    }
    .join_us{
        margin-top: 0px;
    }
    .mobile-auths{
        display: block;
    }
    .mobile-auth{
        background: white;
        box-shadow: 0px 0px 16px 0px #d0d0d0;
        border-radius: 10px;
        padding: 12px;
    }
    .carousel-inner{
        height: 430px !important;
    }
    .ignore_5{
        padding-top:0px !important;
    }
    .cardsss{
        display: none;
    }
    .view_img{
        display: block;
    }
    .FREQUENTLY_ASKED_1{
        display: none;
    }
    .tabes{
        display: none;
    }
    .tabes_1{
        display: block;
    }
    .FREQUENTLY_ASKED{
        display: block;
    }
    .banner_4 {
        height: 400px;
    }
    .banner_7 {
        height: auto;
    }
    .banner_3 {
        height: 1100px;
    }
    .text-heading-12{
        font-size: 12px;
        margin-top: 20px;
        padding-left: 0px;
    }
    .ignore_45{
        font-size: 36px;
        margin-top: -3px;
    }
    .bnt_12{
        margin-left: 0px;
    }
    .jin {
        font-size: 12px
    }
    .average {
        font-size: 14px;
        margin-left: 0px;
        padding-right: 8px
    }
    .htd{
        margin-top: 10px;
    }
    .ignore_4{
        padding-top: 0px;
    }
    .trnsp_1{
        height: 100px !important;
        width: 100px !important;
    }
    .copy_right{
        margin-left: 0px;
        font-size: smaller;
    }
    .trnsp{
        height: 100px !important;
        width: 100px !important;
    }
    .numberss{
        font-size: 20px !important;
        padding-top: 30px;
        margin-left: 0px;
    }
    .brdss{
        font-size: smaller;
    }
    .goal{
        font-size: 13px !important;
        margin-left: 0px;
        margin-top: 0px;
    }
    .total{
        font-size: 12px !important;
        margin-left: 0px;
        margin-top: -3px;
    }
    .arrow{
        display: none;
    }
    .arrow-1{
        display: none;
    }
    .dreams{
        font-size: 40px;
        letter-spacing: 2px;
    }
    .w-75{
        width: 100% !important;
    }
    .sction{
        padding-top: 0px !important;
        padding-left: 0px !important;
    }
    .sctinss{
        padding-top: 15px !important;
        padding-left: 15px !important;
    }
    .text_field {
        height: 186px !important;
    }
    .account{
        letter-spacing: 9px;
        font-size: 15px;
    }
    .textsss{
        height: 93px;
    }
    .layer_12121 {
        width: 7.5%;
        margin-top: -9px;
    }
    .carousel-indicators li{
        display: none;
    }
    .master_text{
        font-size: 12px;
    }
    .search_1{
        width: 74%;
        margin-right: 1px !important;
        margin: 10px !important;
    }
    .leverage {
        width: 100%;
        font-size: 20px;
    }
    .leverage-1{
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        width: 100%;
    }
    .ignore_1 {
        font-size: 35px !important;
        margin-left: 15px;
        margin-top: 20px;
    }
    .line-1221 {
        width: 10%;
        margin-left: 8px;
        margin-top: 0px;
    }
    .ignore_21{
        font-size: 32px;
        line-height: 35px;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 10px;
        width: 100%;
        letter-spacing: 2px;
    }
    .data_image {
        width: 7%;
        margin-top: -4px;
    }

    .ignore_2 {
        font-size: 26px!important;
        line-height: 29px;
        letter-spacing: 0px;
    }
    .layer_126 {
        width: 4%;
        padding-bottom: 3px;
    }
    .layer_1212_1{
        width: 7% !important;
    }
    .faq_img{
        width: 100%;
    }
    .lnise-1{
        margin-left: 0px;
        margin-top: 0px !important;
        width: 10%;
    }
    .bg-img-1 {
        height: 250px;
        width: 250px;
    }
    .layer_262{
        margin-top: 10px;
        margin: auto;
    }
    .ignore-1-1{
        margin-left: 0px;
    }
    .lnise{
        margin-left: 0px;
    }
    .layer_126_1 {
        width: 8.5%;
        margin-right: 4px;
        padding-bottom: 3px;
    }
    /* .pera_2{
        margin-left: 8px !important;
    } */
    .heading_2{
        width: 100%;
        margin-left: 0px;
    }
    .pera_2-1{
        width: 100%;
        padding-left: 0px;
        margin-left: 0px !important;
    }
    .imgs_data{
        width: 6%;
        margin-top: -4px;
    }
    .layer_121{
        width: 7%;
    }
  }
  @media only screen and (max-width:969px) and (min-width:769px){
    .sction{
        margin-top: 0px !important;
        padding-left: 20px !important;
    }
    .sctinss{
        margin-top: 0px !important;
        padding-left: 20px !important;
    }
  }
  @media only screen and (max-width:1650px) and (min-width:1441px){
    .container{
        max-width: 1450px;
        padding-bottom: 190px;
    }
    .data_image {
        width: 3%;
    }
    .posit {
        left: 145px;
    }
    .posit_1 {
        right: 145px;
    }
    .layer_126_1 {
        width: 6%;
    }
    .layer_12121 {
        width: 8.5%
    }
    .banner_3{
        padding-top: 0px;
        padding-bottom: 0px;
        height: 925px;
    }
    .group_51{
        margin-top: 80px;
    }
    .container_1{
        padding-bottom: 100px !important;
    }
    .search_1{
        width: 72%;
    }
    .layer_121 {
        width: 6.5%;
    }
    .banner{
        padding-bottom: 0px;
    }
    .tribe-121-2{
        padding: 24px 15px;
        margin-top: 1px;
    }
    .group_64{
        right: -50px;
    }
    .sctins{
        padding-top: 90px;
    }
    .text_field{
        padding-top: 43px;
        height: 440px;
    }
    .carousel-inner {
        height: 425px;
    }
    .we_are_better{
        margin-top: 50px !important;
    }
    .banner_4{
        padding-bottom: 130px;
    }
    .banner.container {
        padding-bottom: 135px;
    }
    .cardsss{
        margin-top: -200px;
    }
    .sctinsss{
        padding-top: 110px;
    }
    .layer_1212 {
        width: 5%;
    }
    .layer_1212_1 {
        width: 5%;
    }
    .imgs_data {
        width: 8%;
    }
    .banner_7 {
        height: 900px;
    }
  }
  @media only screen and (max-width:1950px) and (min-width:1651px){
    .container{
        max-width: 1590px;
        padding-bottom: 190px;
    }
    .banner_2{
        padding-bottom: 388px;
    }
    .bg-img-1 {
        height: 363px;
        width: 400px;
    }
    .layer_121 {
        width: 5.5%;
    }
    .text_fiuld {
        height: 530px;
    }
    .layer_1212 {
        width: 4.5%;
    }
    .layer_1212_1 {
        width: 4.5%;
    }
    .posit {
        left: 130px;
    } 
    .posit_1 {
        right: 130px;
    }
    .search_1 {
        width: 65%;
    }
    .container_1{
        max-width: 1590px;
        padding-bottom: 0px !important;
    }
    .ignore_1 {
        font-size: 55px;
    }
    .layer_126_1 {
        width: 6%;
    }
    .banner{
        padding-bottom: 0px;
    }
    .sctins{
        padding-top: 90px;
    }
    .group_64{
        right: -20px;
    }
    .insgd{
        font-size: 34px;
    }
    .per {
        line-height: 30px;
        font-size: 23px;
    }
    .quin{
        font-size: 22px;
    }
    .banner_4{
        padding-bottom: 130px;
    }
    .banner.container {
        padding-bottom: 135px;
    }
    .qust{
        padding-top: 90px;
    }
    .qust-1{
        padding-top: 40px;
        line-height: 35px;
    }
    .banner_7 {
        padding-top: 75px;
        padding-bottom: 258px;
        height: 900px;
    }
    .banner_4{
        padding-top: 42px;
        padding-bottom: 215px;
    }
    .carousel-inner {
        height: 516px !important;
    }
    .we_are_better{
        margin-top: 40px !important;
    }
    .lever{
        margin-top: 70px;
    }
    .average{
        margin-top: 16px;
        font-size: 29px;
    }
    .heading_2 {
        width: 81%;
    }
    .bnt_12 {
        padding: 11px 21px;
        line-height: normal;
    }
    .layer_12121 {
        width: 7.5%;
    }
    .data_image {
        width: 2.7%;
    }
    .imgs_data {
        width: 7%;
    }
    .average_12 {
        margin-top: 32px !important;
    }
    .jin{
        font-size: 25px;
    }
    .boxsss {
        top: -200px;
    }
    .active-1:after{
        left: 46%;
        bottom: -14px;
    }
    .tribe_1{
        width: 100%;
    }
    .cardsss{
        margin-top: -280px;
    }
    .sctinsss{
        padding-top: 35px;
        line-height: 72px;
    }
    #tbs-1{
        padding-top: 100px;
    }
    #tbs-2{
        padding-top: 100px;
    }
    #tbs-3{
        padding-top: 100px;
    }
    .layer_126 {
        width: 2.8%;
    }
    /* .lever{
        margin-top: 130px;
    } */
    .ignore_6 {
        width: 75%;
    }
  }
  @media only screen and (max-width:2561px) and (min-width:1951px){
    .container{
        max-width: 2200px;
        padding-bottom: 190px;
    }
    .sctins{
        padding-top: 90px;
    }
    .text_fiuld{
        padding-top: 55px;
        height: 482px;
    }
    .banner_4{
        padding-bottom: 130px;
    }
    .banner.container {
        padding-bottom: 135px;
    }
    .qust{
        padding-top: 90px;
    }
    .qust-1{
        padding-top: 40px;
        line-height: 35px;
    }
    .banner_7{
        padding-top: 75px;
        padding-bottom: 185px;
    }
    .banner_4{
        padding-top: 42px;
        padding-bottom: 190px;
    }
    .active-1:after{
        left: 46%;
        bottom: -14px;
    }
    .tribe_1{
        width: 100%;
    }
    .cardsss{
        margin-top: -280px;
    }
    .sctinsss{
        padding-top: 110px;
        line-height: 72px;
    }
    #tbs-1{
        padding-top: 100px;
    }
    #tbs-2{
        padding-top: 100px;
    }
    #tbs-3{
        padding-top: 100px;
    }
    .lever{
        margin-top: 130px;
    }
    .banner_2{
        padding-bottom: 23%;
    }
  }
  @media only screen and (max-width:360px){
    .htd{
        margin-top: 5px;
    }
  }
        `}</style>
            </div>
        )
    }
}

export default Jquery;