import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faSquare } from '@fortawesome/free-solid-svg-icons'
import flash from './../Support/Images/flash-without-border.png'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdStar from 'react-ionicons/lib/MdStar'
import sbag from './../Support/Images/shopping-bag.png'
import sbagWhite from './../Support/Images/shopping-bag-white.png'
import { ApiUrl } from '../Constant/ApiUrl'
import { Link } from 'react-router-dom'
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline'


const star= [
    {rating : 1}, {rating : 3}, {rating : 5}
]

const CardProduct = ({name, price, image1, image2, brands, discount, flashSale, starCount, id}) => {
    const [onHover, setOnhover] = useState(false)

    const [colorHeart, setColorHeart] = useState(false)
    const [colorsAvail, setColorsAvail] = useState(false)
    const [bagHover, setBagHover] = useState(false)

    return (
        <div className='col-6 col-md-4 container-card-product'>
            <div className='card-container' onMouseEnter={() => {setOnhover(true)}} onMouseLeave={() => {setOnhover(false)}} >
                <div className=' container-image w-100' style={{padding : 10}} >
                    <img 
                    alt='img-card'
                    className='image-card'
                    src={onHover ? ApiUrl + 'public/product/' + image1 : ApiUrl + 'public/product/' + image2}
                    />
                </div>
                <span style={{position : 'absolute',top : 25, left : 18,}}>
                    <img
                    alt='flash' 
                    style={{height : 25, width : 25, display : flashSale === 1 ? 'block' : 'none'}}
                    src={flash} 
                    />
                </span>
                <span className='button-heart-list'>
                    <MdHeart  style={{width : 25, height : 25}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color={ colorHeart ?  "#c44536" : 'rgba(52,52,52,0.7)' } />
                </span>

                {/* <span onMouseEnter={() => setBagHover(true)} onMouseLeave={() => setBagHover(false)} style={{visibility : onHover ? 'visible' : 'hidden',position : 'absolute',bottom : 180, right : 25, backgroundColor : bagHover ? 'black' : 'white', paddingTop : 4, paddingBottom : 4, paddingLeft : 8, paddingRight : 8}}>
                    <span style={{display : 'flex', justifyContent : 'center'}}>
                        <p style={{color : bagHover ? 'white' : 'black', fontSize : 14, marginRight : 8}}>Add to Cart</p>
                        <img alt='bag' src={bagHover ? sbagWhite : sbag} style={{ height : 20, width : 20}}/>
                    </span>
                </span> */}

                {/* <div style={{marginTop : 5, padding : 10}}>
                    <div className='p-2'>
                        <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                            <p style={{fontSize : 12}}>Pick a Size :</p>
                            <IosCloseCircleOutline 
                                style={{cursor : 'pointer',width : 20, height : 20,}}  
                                fontSize="60px" color='black' />
                        </div>

                        <div style={{display : 'flex', marginTop : 10, flexWrap : 'wrap',}}>
                            <div className='border' style={{marginBottom : 10, marginLeft : 5, marginRight : 5,width : 30, height : 30, display : 'flex', justifyContent : 'center', alignItems : 'center'}} >
                                <p style={{fontSize : 12}}>S</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div style={{marginTop : 10, padding : 10}}>
                    <p style={{fontSize : 12, color : 'green'}}>{brands}</p>
                    <Link to={'/detail-product/' + id} >
                        <p style={{fontSize : 16}}>
                            {name}
                        </p>
                    </Link>

                    <span>
                        <p style={{marginTop : 5}}>
                            {
                                discount === 0 ?
                                <span>Rp. {(parseInt(price)).toLocaleString('id-ID')}</span>
                                :
                                <s>Rp. {(parseInt(price)).toLocaleString('id-ID')}</s>
                            }
                        </p>
                        <p style={{color : "green", visibility : discount !== 0 ? 'visible' : 'hidden'}}>
                            Rp. {(price - (price * (discount/100))).toLocaleString('id-ID')}
                        </p>
                    </span>

                    <div style={{marginTop : 5}}>
                        {
                            starCount !== null ?
                                Array.apply(null, {length: starCount}).map(Number.call, Number).map((val) => {
                                   return(
                                       <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                                   )
                               })
                            :
                            null
                        }    
                    </div>
                </div>
                    
                
            </div>
        </div>
    )
}

export default CardProduct
