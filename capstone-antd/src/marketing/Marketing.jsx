import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import 'google-fonts';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Col } from 'antd';



class Marketing extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }

    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    render() { 
        return ( 
            <React.Fragment>
              <body>
                
                {/*-----------------------------------------------------------------
                                          Navigation Bar
                -------------------------------------------------------------------*/}
                <header id="landing-page" role="banner">
                  <nav className="navbar navbar-expand-md navbar-dark bg-light">
                    {/*  Logo and Name */}
                    <div className="container">
                      <a className="navbar-brand absolute">Bitcoin Stream</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </div>

                    {/*  Navigation List */}
                    <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                      <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                          <AnchorLink href="#landing-page"><a id="top-nav" className="nav-link active" href="#Section1">Home</a></AnchorLink>
                        </li>

                        <li className="nav-item">
                          <AnchorLink href="#service-features"><a id="top-nav" className="nav-link" href="#">Service</a></AnchorLink>
                        </li>

                        <li className="nav-item">
                          <AnchorLink href="#team-member"><a id="top-nav" className="nav-link" href="#">Team</a></AnchorLink>
                        </li>

                        <li className="nav-item">
                          <AnchorLink href="#background2"><a id="top-nav" className="nav-link" href="#">Testimonial</a></AnchorLink>
                        </li>

                        <li className="nav-item">
                          <AnchorLink href="#section-cover"><a id="top-nav" className="nav-link" href="#">Start</a></AnchorLink>
                        </li>

                      </ul>
                    </div>
                  </nav>
                </header>

                {/*-----------------------------------------------------------------
                            First Section - Better Investment - Enter Button
                -------------------------------------------------------------------*/}
                <section id="background" className="site-hero overlay" data-stellar-background-ratio="0.5">
                  <div className="container">
                    <div className="row align-items-center site-hero-inner justify-content-center">
                      <div className="col-md-12 text-center">
                        <div id="space">
                          <TypistLoop interval={3000}>
                            {[
                              'Plan to invest on bitcoin?',
                              'Wanna invest professionally?',
                              'Need better Strategy?',
                              'We can help you earn more',
                              ].map(text => <Typist key={text} startDelay={1000}><h1>{text}</h1></Typist>)}
                          </TypistLoop>
                      </div>
                        <p className="lead">Better Data, Better Analysis, Leads to Better Strategy</p>
                        <p><NavLink to="/dashboard"><a className="btn btn-primary">Click here to start, for FREE</a></NavLink></p>
                      </div>
                      </div>
                    </div>
                  </section>

                {/*-----------------------------------------------------------------
                            Second Section - Service Introduction
                -------------------------------------------------------------------*/}
                <section id="service-features" className="service-features d-flex">
                  <div className="inner">
                  <Col span={6}>      
                      <div id="service-intro" className="media-body">
                        <h4 id="service-intro-title" className="mt-0">Integrated System</h4>
                        <p>Our clients accelerated their financial revenue by up to 50% and increase inventory turns by 30% in average.</p>
                      </div>
                   </Col>

                   <Col span={6}> 
                    <div id="service-intro" className="media-body">
                      <h4 id="service-intro-title" className="mt-0">Real-Time Data</h4>
                      <p>Data on our system updates every 10 minutes - data efficency and accuracy guaranteed.</p>
                    </div>
                  </Col>

                  <Col span={6}> 
                    <div id="service-intro" className="media-body">
                      <h4 id="service-intro-title" className="mt-0">Data Visualization</h4>
                      <p>Three types of charts included, as well as two types of tables. No need to be an expert, we convert numbers to charts for you! </p>
                      <p></p>
                    </div>
                  </Col>

                  <Col span={6}> 
                    <div id="service-intro" className="media-body">
                      <h4 id="service-intro-title" className="mt-0">Market Analysis</h4>
                      <p>Market reports in detail, powered with data vidualization technique, you can feel the market trend at once.</p>
                    </div>
                  </Col>
                </div>
              </section>
              
              {/*-----------------------------------------------------------------
                            Third Section - Team Member
                -------------------------------------------------------------------*/}
              <section id="team-member" className="site-section">
                <div className="container">
                  <section className="service-features text-dark d-flex">

                    <div className="inner">

                    <div className="media d-block feature">
                        <Zoom>
                            <div id="team-member-1"></div>
                        </Zoom>
                        <div className="media-body">
                          <h3 className="mt-0">Xin Lin</h3>
                          <p>Backend Developer<br/>System Tester<br/>Team Leader</p>
                        </div>
                      </div>

                      <div className="media d-block feature">
                        <Zoom>
                        <div id="team-member-2"></div>
                        </Zoom>
                        <div className="media-body">
                          <h3 className="mt-0">Zeying Li</h3>
                          <p>Database administrator<br/>Librarian</p>
                        </div>
                      </div>

                      <div className="media d-block feature">
                        <Zoom>
                            <div id="team-member-3"></div>
                        </Zoom>
                        <div className="media-body">
                          <h3 className="mt-0">Feng Yi</h3>
                          <p>Front-end developer<br/>System tester<br/>UI designer<br/>Coordinator</p>
                        </div>
                      </div>

                      <div className="media d-block feature">
                        <Zoom>
                        <div id="team-member-4"></div>
                        </Zoom>
                        <div className="media-body">
                          <h3 className="mt-0">Hao Ma</h3>
                          <p>Front-end developer<br/>System tester<br/>UI designer<br/>Timer keeper</p>
                        </div>
                      </div>

                        <div className="media d-block feature">
                            <Zoom>
                                <div id="team-member-5"></div>
                            </Zoom>
                            <div className="media-body">
                                <h3 className="mt-0">He Zhao</h3>
                                <p>Backend developer<br/>System tester<br/>Supporter</p>
                            </div>
                        </div>

                  </div>
              </section>

              </div>
            </section>

            {/*-----------------------------------------------------------------
                            Forth Section - Customer Testimonials
                -------------------------------------------------------------------*/}
            <section id="background2" className="site-hero overlay" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row align-items-center site-hero-inner justify-content-left">
                  <div className="col-md-12 text-right">
                    <h1>John Doe, Bitcoin investor</h1>
                    <p className="lead"> - This is a realistic program for anyone looking for site for better investment strategy. You should not expect anything more. Excellent customer service!</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="background3" className="site-hero overlay" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row align-items-center site-hero-inner justify-content-left">
                  <div className="col-md-8 text-left">
                    <h1>Guill Mante, Student</h1>
                    <p className="lead"> - Bitcoin doubled in 17 days. You should not expect anything more. Best bitcoin analysis system ever!</p>
                  </div>
                </div>
              </div>
            </section>

            {/*-----------------------------------------------------------------
                            Fifth Section - Second Enter Button
                -------------------------------------------------------------------*/}
            <section id="section-cover" className="section-cover" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row justify-content-center align-items-center intro">
                  <p id="secondButton"><NavLink to="/dashboard"><a href="#" className="btn btn-primary">Click to start now, it's free</a></NavLink></p>
                </div>
              </div>
            </section>

              </body>
            </React.Fragment>
         );
    }
}
 
export default Marketing;