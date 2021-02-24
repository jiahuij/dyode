import React, { Component } from 'react'
import mailIcon from '../imgs/mail_icon.png'
import '../sass/SubscriptionBanner.scss'

export class SubscriptionBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Subscriber: ' + this.state.value);
        this.setState({value: '' });
        event.preventDefault();
      }

    render() {
        return (
            <div className="subBannerWrape">
                <h1 className="subTitle"><img src={mailIcon} alt='mail icon'></img> Sign Up & Stay Connected</h1>
                <div className="subFormWrape">
                    <p className="subDesc">Sign up for the newsletter and get 20% off! Gain access to exclusive <br/>offers and be the first to know when new stuff drops!</p>
                    <form id="subForm" onSubmit={this.handleSubmit}>
                        <input id="subEmailInput" type="email" placeholder="Enter Your Email Address" value={this.state.value} onChange={this.handleChange} />
                        <input  id="subBtn" type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        )
    }
}

export default SubscriptionBanner
