import React, { Component } from 'react'
import '../sass/SingleCategory.scss'

export class SingleCategory extends Component {
    render() {
        return (
           
                <a href='/'>
                     <div className="category" style={{ backgroundImage: `url(${this.props.img})` }}>
                        <p className="categoryTitle">{this.props.title}</p> 
                    </div>
                </a>
                
        )
    }
}

export default SingleCategory
 