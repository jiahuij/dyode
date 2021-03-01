import React, { Component } from 'react'

//resource
import socialPic1 from '../imgs/Social1.png'
import socialPic2 from '../imgs/Social2.png'
import socialPic3 from '../imgs/Social3.png'
import socialPic4 from '../imgs/Social4.png'
import socialPic5 from '../imgs/Social5.png'
import '../sass/MediaGallery.scss'

//universal unique key generating library
import { v4 as uuidv4 } from 'uuid';


export class MediaGallery extends Component {
    render() {
        var n = 0;
        var gallery=[socialPic1,socialPic2,socialPic3,socialPic4,socialPic5]
        return (
            <div>
                <h1 className='cursiveHeader'>Follow Us On Instagram</h1>
                <div className="row">
                   
                   {gallery.map(pic =>( //for every img in the gallery, make an img tag
                       <img className="socialPic" id={'a'+n++}  src={pic} alt='social pictures' key={uuidv4()}></img>
                   ))}
               </div>
            </div>
           
        )
    }
}

export default MediaGallery
 