import React, { Component } from 'react'
import dropdownImg from '../imgs/dropdown.png'
import '../sass/DropdownContent.scss'

export class DropdownContent extends Component {
    render() {
        return (
            <div className="dropdownContent">
                <div className="leftContent">
                    <img className='dropdownImg' src={dropdownImg} alt = 'dropdown pic'></img>

                    <ul className="dropdownMenu">
                        <li><a href="#!">Shop All</a></li>
                        <li><a href="#!">New Arrivals</a></li>
                        <li><a href="#!">Favorites</a></li>
                        <li><a href="#!">Sale</a></li>
                    </ul>

                </div>
                <div className="rightContent">
                
                    <ul className="dropdownMenu">
                      <h2 className='dropdownCate'>Tops</h2>
                        <li><a href="#!">T-Shirts</a></li>
                        <li><a href="#!">Short Sleeve</a></li>
                        <li><a href="#!">Long Sleeve</a></li>
                    </ul>


                    <ul className="dropdownMenu">
                     <h2 className='dropdownCate'>Bottoms</h2>
                        <li><a href="#!">Shorts</a></li>
                        <li><a href="#!">Pants</a></li>
                    </ul>


                </div>
            </div>
        )
    }
}

export default DropdownContent
