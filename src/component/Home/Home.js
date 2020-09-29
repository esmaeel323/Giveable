import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import '../Navbar/NavBar.css'
import logo from '../assets/givable-logo.svg'
import dashboard from '../assets/dashboard.png'
import ui from '../assets/hero-ui.png'
import steps from '../assets/steps.png'
import brand from '../assets/branded.png'
import {Navbar,NavbarBrand} from 'reactstrap';
import '../Home/Home.css'

class Home extends Component {  

  render (){

    return (
      
        <div className="fullpage">
        <div>
        <Navbar className="navbar  navbar-dark" expand="md">
        <NavbarBrand href="/"><img src={logo}/></NavbarBrand>
        
      </Navbar>
    </div> 
                    <div className="header-content">
            <Container>

          
                    <Row>
                        <Col className="header-text" md="6">
                        <Fade left>
                        <h1 className="h1-text">An effortless donation experience for ambitious charities</h1>
                        </Fade>
                        <br></br>
                        <h4>Coming Soon ...</h4>
                        <a  target="_blank" className="andriod m-button"></a>
                        <a  target="_blank" className="iphone m-button"></a>
    
                        </Col>
    
                        <Col md="6">
                        <img className="givable-img" src={ui}  alt="Givable" />
                        </Col>
                      
                    </Row>
                   
                 </Container>
                 </div>


                 <section>
             <div className="contant1">
                 <div className="contant1-text">
                 <h3 style={{'color':'#0e1889'}}>
                 Increase online donation revenue & better understand your donors
                 </h3>
                 <p>Givable is a proven mobile-first 4 step donation funnel branded to your charity, including a beautifully simple donation dashboard with detailed reporting</p>
             </div >
             
             </div>
             </section>
              


                 
                <div className="contant">
                 <Container>
                <Row>
                    <Col md="6">
                    <img src={steps} style={{'width': '100%',    'max-height': 'auto'}}/>
                    </Col>

                    <Col md="6" className="contant-text">
                    <Fade>
                        <h2 style={{'color':'#0e1889'}}>Proven 4 step funnel</h2>
                        <p>A clear and simple experience consisting of the donation amount, donor details with address look-up, Gift Aid opt-in and payment details with multiple payment methods</p>
                    </Fade>
                    </Col>
                </Row>
             </Container>
             </div>

             <div className="contant">
                 <Container>
                <Row>
                    <Col md="6">
                    <img src={brand} style={{'width': '100%',    'max-height': 'auto'}}/>
                    </Col>

                    <Col md="6" className="contant-text">
                    <Fade>
                        <h2 style={{'color':'#0e1889'}}>Branded to your charity</h2>
                        <p>The givable user interface can be styled to sit inline with your brand by setting the colour palette, typography and tone of voice.</p>
                    </Fade>
                    </Col>
                </Row>
             </Container>
             </div>



             <div className="contant">
                 <Container>
                <Row>
                    <Col md="6">
                    <img src={dashboard} style={{'width': '100%',    'max-height': 'auto'}}/>
                    </Col>

                    <Col md="6" className="contant-text">
                        <Fade>
                        <h2 style={{'color':'#0e1889'}}>Donation dashboard</h2>
                        <p>Givable comes with a beautifully simple donation dashboard to provide an overview of your donation data with the ability to export reports.</p>
                        </Fade>
                    </Col>
                </Row>
             </Container>
             </div>

             <div className="footer">
         
                        <p>A test prosjekt by Esmaeel © 2020</p>
        </div>
             



      </div>
      
   
    )
  }
   
}

export default Home;
