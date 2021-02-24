import React, { Component } from 'react'
import logo from'../imgs/nav_logo.png'
import searchIcon from'../imgs/search_icon.png'
import loginIcon from'../imgs/login_icon.png'
import checkoutIcon from'../imgs/checkout_icon.png'
import burgerIcon from '../imgs/burger.png'
import dropdownImg from '../imgs/dropdown.png'
import Dropdown from './DropdownContent'
import '../sass/Navbar.scss'
import '../sass/MobileNav.scss'
import { slide as Menu } from 'react-burger-menu'

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
         show:'none',
         open1: false,
         open2: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Search: ' + this.state.value);
        this.setState({value: '' });
        event.preventDefault();
      }

      handleClick(){
        if(this.state.show === 'none')
            this.setState({show:'block'})
        else if(this.state.show === 'block')
            this.setState({show:'none'})
      }
      


    render() {
        var dis = this.state.show;
        var collapIcon1 = this.state.open1? "+": "-"
        var collapIcon2 = this.state.open2? "+": "-"
        return (
            
            <nav className="nav">

                    <Menu customBurgerIcon={ <img src={burgerIcon} alt='burger' /> }>

                        <div className="services menu-item">
                            <h2 onClick={function(){this.setState({open1:!this.state.open1})}.bind(this)} 
                                    className="BurgerTitle">Tops<span>{collapIcon1}</span></h2>
                            <ul className={this.state.open1? "panel-collapse": "panel-collapse panel-close"}>
                                <li >
                                    <a className="menu-item" href="#!">T-Shirts</a>
                                </li>
                                <li>
                                    <a  className="menu-item" href="#!">Short Sleeve</a>
                                </li>
                                <li >
                                    <a className="menu-item" href="#!">Long Sleeve</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="services menu-item">
                            <h2 onClick={function(){this.setState({open2:!this.state.open2})}.bind(this)} 
                                    className="BurgerTitle">Bottoms <span>{collapIcon2}</span></h2>
                            <ul className={this.state.open2? "panel-collapse": "panel-collapse panel-close"}>
                                <li >
                                    <a className="menu-item" href="#!">Shorts</a>
                                </li>
                                <li>
                                    <a  className="menu-item" href="#!">Pants</a>
                                </li>
                            </ul>
                        </div>
                        <div className="leftContent menu-item menuPic ">
                            <img className='dropdownImg' src={dropdownImg} alt = 'dropdown pic'></img>

                            <ul className="dropdownMenu">
                                <li><a className="menu-item" href="#!">Shop All</a></li>
                                <li><a className="menu-item" href="#!">New Arrivals</a></li>
                                <li><a className="menu-item" href="#!">Favorites</a></li>
                                <li><a className="menu-item" href="#!">Sale</a></li>
                            </ul>

                        </div>
                    </Menu>


                    <a className="site-logo" href='/'>
                        <img src={logo} alt='site-logo' srcSet={logo}></img>
                    </a>

                    <ul className="navmenu">
                        
                        <li><a href="#!">Men's</a></li>
                        <Dropdown/>
                        <li><a href="#!">Women's</a></li>
                        <li><a href="#!">Accessories</a></li>
                        <li><a href="#!">Sale!</a></li>
                    </ul>

                    <div id="mobileSearch"  onSubmit={this.handleSubmit} style={{display:dis}}>
                        <form id="searchFormMobile">
                            <input id="searchInput" type="text" placeholder="What are you searching for?" value={this.state.value} onChange={this.handleChange} />
                            <input  id="searchBtn" type="submit" value="GO" />
                        </form>
                    </div>

                    <div className="navIcon">
                        
                        <form id="searchForm" onSubmit={this.handleSubmit} style={{display:dis}}>
                            <input id="searchInput" type="text" placeholder="What are you searching for?" value={this.state.value} onChange={this.handleChange} />
                            <input  id="searchBtn" type="submit" value="GO" />
                        </form>
                        <a onClick={this.handleClick} className='icon' href='#!'>
                            <img id="searchIcon" src={searchIcon} alt='search Icon' srcSet={searchIcon}></img>
                        </a>
                        <a className='icon' href='#!'>
                            <img src={loginIcon} alt='login Icon' srcSet={loginIcon}></img>
                        </a>
                        <a className='icon' href='#!'>
                            <img src={checkoutIcon} alt='checkout Icon' srcSet={checkoutIcon}></img>
                        </a>
                    </div>

                 

                </nav>
        )
    }
}

export default Navbar
