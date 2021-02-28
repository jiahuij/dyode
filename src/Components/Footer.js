import React, { Component } from 'react'
import facebookIcon from '../imgs/facebook.png'
import InsIcon from '../imgs/ins.png'
import TwiIcon from '../imgs/twitter.png'
import '../sass/Footer.scss'

export class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open1: true,
          open2: true,
        }
      }

    render() {
        var collapIcon1 = this.state.open1? "+": "-"
        var collapIcon2 = this.state.open2? "+": "-"
        return (
            <div className="Footer">
                <div className="services"> 
                    <h2 onClick={function(){this.setState({open1:!this.state.open1})}.bind(this)} 
                                className="footerTitle">Customer Service <span>{collapIcon1}</span></h2>
                    <ul className={this.state.open1? "panel-collapse": "panel-collapse panel-close"}>
                        <li className="footerMenuItem">
                            <a href="#!">Accessibility</a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!">Contact Us</a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!">Return Policy</a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!">FAQ</a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!">Gift Certificates</a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!"> Wishlist</a>
                        </li>
                    </ul>
                </div>

                <div className="company">
                    <h2 onClick={function(){this.setState({open2:!this.state.open2})}.bind(this)} 
                        className="footerTitle">Company <span>{collapIcon2}</span></h2>
                    <ul className={this.state.open2? "panel-collapse": "panel-collapse panel-close"}>
                        <li className="footerMenuItem">
                            <a href="#!">About Us</a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!">Careers </a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!">Press</a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!">Affiliates</a>
                        </li>
                    </ul>
                </div>

                <div className="social">
                    <h2 className="footerTitle">Follow Us</h2>
                    <ul>
                        <li className="footerMenuItem">
                            <a href="#!"><img src={facebookIcon} alt='facebook icon'></img></a>
                        </li>
                        <li className="footerMenuItem" id='insIcon'>
                            <a href="#!"><img src={InsIcon} alt='instagram icon'></img></a>
                        </li>
                        <li className="footerMenuItem">
                            <a href="#!"><img src={TwiIcon} alt='twitter icon'></img></a>
                        </li>
                    </ul>

                </div>
                
            </div>
        )
    }
}

export default Footer
