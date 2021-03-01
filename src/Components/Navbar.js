import React, { Component } from 'react'

//resources
import logo from'../imgs/nav_logo.png'
import searchIcon from'../imgs/search_icon.png'
import loginIcon from'../imgs/login_icon.png'
import checkoutIcon from'../imgs/checkout_icon.png'
import burgerIcon from '../imgs/burger.png'
import dropdownImg from '../imgs/dropdown.png'
import upArrow from '../imgs/upArrow.png'
import downArrow from '../imgs/downArrow.png'
import '../sass/Navbar.scss'
import '../sass/MobileNav.scss'
import Dropdown from './DropdownContent'

//mobile side nav menu library
import { slide as Menu } from 'react-burger-menu'

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
         SearchForm:'none', // state managing search form and search icon show and hide
         searchIcon:'flex',


         Menu1Expand: false, // state managing mobile side menu expand and collapse
         Menu2Expand: false};
    
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
      }

      //handling search form submission  
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Search: ' + this.state.value);
        this.setState({value: '' });
        event.preventDefault();
      }

      //toggle display show and hide for search form and icon
      handleClick(){
        if(this.state.SearchForm === 'none')
            this.setState({SearchForm:'flex'})
        else if(this.state.SearchForm === 'flex')
            this.setState({SearchForm:'none'})

        if(this.state.searchIcon === 'none')
            this.setState({searchIcon:'flex'})
        else if(this.state.searchIcon === 'flex')
            this.setState({searchIcon:'none'})
      }
      


    render() {
        var dis = this.state.SearchForm;

        //display different icons based on menu state
        var collapIcon1 = this.state.Menu1Expand? upArrow: downArrow;
        var collapIcon2 = this.state.Menu2Expand? upArrow: downArrow;

        return (
        <div className='top'>

            {/* Fixed top promo banner */}
            <div className="topBanner">
                    FREE SHIPPING ON ALL ORDERS OVER $75 
             </div>

            {/* Desktop and mobile nav */}
            <nav className="nav" >

                    {/*Mobile Nav using react-burger-menu*/}
                    <Menu customBurgerIcon={ <img src={burgerIcon} alt='burger' /> }>
                     
                        <hr className='menuLine'/>
                        <div className="services menu-item">
                            <h2 onClick={function(){this.setState({Menu1Expand:!this.state.Menu1Expand})}.bind(this)} 
                                    className="BurgerTitle">Tops<span><img src={collapIcon1} alt='up down arrow'></img></span></h2>
                            <ul className={this.state.Menu1Expand? "panel-collapse": "panel-collapse panel-closes"}>
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
                        <hr className='menuLine'/>
                        <div className="services menu-item">
                            <h2 onClick={function(){this.setState({Menu2Expand:!this.state.Menu2Expand})}.bind(this)} 
                                    className="BurgerTitle">Bottoms <span><img src={collapIcon2} alt='up down arrow'></img></span></h2>
                            <ul className={this.state.Menu2Expand? "panel-collapse": "panel-collapse panel-closes"}>
                                <li >
                                    <a className="menu-item" href="#!">Shorts</a>
                                </li>
                                <li>
                                    <a  className="menu-item" href="#!">Pants</a>
                                </li>
                            </ul>
                        </div>
                        <hr className='menuLine'/>
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
 
                    {/*Desktop Menu with dropdown component*/}
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

                    {/*Show search form and hide search icon when icon clicked*/}
                    <div id="mobileSearch" onMouseLeave={this.handleClick} onSubmit={this.handleSubmit} style={{display:dis}}>
                        <form id="searchFormMobile">
                            <input id="searchInput" type="text" placeholder="What are you searching for?" value={this.state.value} onChange={this.handleChange} />
                            <input  id="searchBtn" type="submit" value="GO" />
                        </form>
                    </div>

                    {/*Hide search form and show search icon when mouse leave search form*/}
                    <div className="navIcon" >
                        <div className='searchDiv' onMouseLeave={this.handleClick}>
                            <form id="searchForm" onSubmit={this.handleSubmit} style={{display:dis}}>
                                <input id="searchInput" type="text" placeholder="What are you searching for?" value={this.state.value} onChange={this.handleChange} />
                                <input  id="searchBtn" type="submit" value="GO"/>
                            </form>
                        </div>

                        {/*nav icons*/}
                        <a onClick={this.handleClick} className='icon' href='#!' style={{display: this.state.searchIcon}}>
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

             </div>
            
        )
    }
}

export default Navbar
