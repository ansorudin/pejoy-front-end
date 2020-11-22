import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import flash from './../Support/Images/flash-without-border.png'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdStar from 'react-ionicons/lib/MdStar'
import sbag from './../Support/Images/shopping-bag.png'
import sbagWhite from './../Support/Images/shopping-bag-white.png'


const CardProduct = () => {
    const [onHover, setOnhover] = useState(false)

    const [colorHeart, setColorHeart] = useState(false)
    const [colorsAvail, setColorsAvail] = useState(false)
    const [bagHover, setBagHover] = useState(false)




    return (
        <div className='col-md-3 ' style={{height : 500, padding : 10, backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className='card-container' onMouseEnter={() => {setOnhover(true)}} onMouseLeave={() => {setOnhover(false)}} >
                <div className=' container-image w-100' style={{padding : 10}} >
                    <img 
                    alt='img-card'
                    className='image-card'
                    src={onHover ? 'https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' : 'https://dynamic.zacdn.com/sVNGtZBV4nqK6j1nAV87tIY7YlI=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3730-8123452-3.jpg'}
                    />
                </div>
                <span style={{position : 'absolute',top : 25, left : 18,}}>
                    <img
                    alt='flash' 
                    style={{height : 25, width : 25}}
                    src={flash} 
                    />
                </span>
                <span onMouseEnter={() => setColorHeart(true)} onMouseLeave={() => setColorHeart(false)} style={{position : 'absolute',bottom : 133, left : 25,}}>
                    <MdHeart shake={colorHeart}  style={{width : 25, height : 25}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color={ colorHeart ?  "#c44536" : 'rgba(52,52,52,0.7)' } />
                </span>

                <span onMouseEnter={() => setBagHover(true)} onMouseLeave={() => setBagHover(false)} style={{visibility : onHover ? 'visible' : 'hidden',position : 'absolute',bottom : 160, right : 25, backgroundColor : bagHover ? 'black' : 'white', paddingTop : 4, paddingBottom : 4, paddingLeft : 8, paddingRight : 8}}>
                    <span style={{display : 'flex', justifyContent : 'center'}}>
                        <p style={{color : bagHover ? 'white' : 'black', fontSize : 14, marginRight : 8}}>Add to Cart</p>
                        <img alt='bag' src={bagHover ? sbagWhite : sbag} style={{ height : 20, width : 20}}/>
                    </span>
                </span>

                <div style={{marginTop : 10, padding : 10}}>
                    <p style={{fontSize : 12, color : 'green'}}>Lactacid</p>
                    <p style={{fontSize : 16}}>
                        Hometown fresh milk 1 lt
                    </p>
                    <p style={{marginTop : 5}}>
                        <s>Rp. 13.500</s>
                    </p>
                    <p style={{color : "green"}}>
                        Rp. 10.000
                    </p>
                    <div style={{marginTop : 5}}>
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                            
                    </div>
                </div>
                    
                <div className='choice-varian-container w-50' onMouseEnter={() => setColorsAvail(true)} onMouseLeave={() => setColorsAvail(false)}>
                    {
                        colorsAvail ? 
                        <div>
                            <FontAwesomeIcon icon={faSquare} className='icon-varian' style={{color : 'red'}} />
                            <FontAwesomeIcon icon={faSquare} className='icon-varian' style={{color : 'black'}} />
                        </div>
                        :
                        <p style={{fontSize : 12}}>2 colors available</p>
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default CardProduct
