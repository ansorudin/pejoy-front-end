import { faCheck, faChevronCircleDown, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CardProduct from '../../Component/CardProduct'
import './CardProduct.css'
import './SortProduct.css'
import {  Button, CardBody, Card, Collapse } from 'reactstrap';



const ListProduct = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [cek, setCek] = useState(0)

    const toggle = () => setIsOpen(!isOpen);

    console.log(cek)
    
    return (
        <div className='container mt-5'>
            {/* <div style={{display : 'flex', alignItems : 'center'}}>
                <span className='border container-check-box' >
                    <FontAwesomeIcon icon={faCheck} style={{fontSize : 12, margin : 0, padding : 0}}/>
                </span>
                <span style={{marginLeft : 5 ,display : 'flex', justifyContent : 'center', alignItems : 'center'}} >
                    <FontAwesomeIcon icon={faStar} style={{fontSize : 14, color : 'orange'}}/>
                    <p style={{fontSize : 14, marginLeft : 5}}>5 ke atas</p>
                </span>
            </div> */}
            <div className='row'>
                <div className='col-md-3'>
                    <div>
                        <div onClick={toggle} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between', paddingBottom : 10}} >
                            <p>Kategori</p>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <Collapse isOpen={isOpen}>
                            <span style={{display : 'flex', alignItems : 'center'}}>
                                <input 
                                type="checkbox" 
                                checked={cek} 
                                onChange={() => setCek(!cek)}  
                                style={{width : 16, height : 16}}
                                />
                                <p style={{marginLeft : 10}}>Sayuran</p>
                            </span>
                            <span style={{display : 'flex', alignItems : 'center'}}>
                                <input 
                                type="checkbox" 
                                checked={cek} 
                                onChange={() => setCek(!cek)}  
                                style={{width : 16, height : 16}}
                                />
                                <p style={{marginLeft : 10}}>Sayuran</p>
                            </span>
                            <span style={{display : 'flex', alignItems : 'center'}}>
                                <input 
                                type="checkbox" 
                                checked={cek} 
                                onChange={() => setCek(!cek)}  
                                style={{width : 16, height : 16}}
                                />
                                <p style={{marginLeft : 10}}>Sayuran</p>
                            </span>
                            <span style={{display : 'flex', alignItems : 'center'}}>
                                <input 
                                type="checkbox" 
                                checked={cek} 
                                onChange={() => setCek(!cek)}  
                                style={{width : 16, height : 16}}
                                />
                                <p style={{marginLeft : 10}}>Sayuran</p>
                            </span>
                        </Collapse>
                    </div>
                    <div>
                        <div onClick={toggle} className='border-top' style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between', paddingBottom : 10, paddingTop : 10}} >
                            <p>Kategori</p>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <Collapse>
                            
                        </Collapse>
                    </div>
                </div>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                
            </div>
        </div>
    )
}

export default ListProduct
