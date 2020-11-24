import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelopeOpenText, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

import PejoyLogo from './../../Support/Images/Pejoy Logo.png';
import CustomerCareIcon from './../../Support/Images/Customer Care Icon.png';

export class Footer extends React.Component {

    openChatRoom = () => {
        this.refs.chatRoom.style.display = "block";
      }
      
    closeChatRoom = () => {
        this.refs.chatRoom.style.display = "none";
    }

    render(){
        return(
            <div>
                {/* FOOTER SECTION */}
                <img src={CustomerCareIcon} onClick={() => this.openChatRoom()} className="chat-icon" />

                <div ref="chatRoom" className="chat-popup">
                    <div className="row justify-content-between mx-0 my-0 px-3 py-3 pa-bg-main-light" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                        <div className="col-6">
                            <img src={PejoyLogo} width="100%" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTimes} onClick={() => this.closeChatRoom()} className="pa-clickable-element pa-light" />
                        </div>
                    </div>
                    <div className="px-4 py-3">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Mulai Chatting</button>
                        </form>
                    </div>
                </div>
                
                <div className="container-fluid border-top border-primary">
                    <div className="row justify-content-center px-0 py-5">
                        <div className="col-md-5 px-5 py-0">
                            <p className="mt-0 mb-1 font-weight-bold myfsid-dark"> TENTANG PEJOY ID </p>
                            <p className="mt-0 mb-0"> 
                                Pejoy Id adalah Pelopor Toko Online di Indonesia yang Menyediakan Produk Terlengkap dan Terpercaya.
                                Pejoy Siap Memenuhi Kebutuhan Fashion Anda, Mulai Dari Atasan Hingga Bawahan.
                            </p>
                            <p className="mt-3 mb-0"> 
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-md pa-danger" /> Warehouse 1 : Sidoarjo, Jawa Timur, 61273.
                            </p>
                            <p className="mt-0 mb-0"> 
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-md pa-danger" /> Warehouse 2 : Kota Bandung, Jawa Barat, 40125.
                            </p>
                            <p className="mt-3 mb-0"> 
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-md" /> pejoyidid@pejoy.com
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-2">
                            <p className="mt-0 mb-1 font-weight-bold"> OUR PRODUCTS </p>
                            <p className="mt-3 mb-0"> 
                                T-Shirt
                            </p>
                            <p className="mt-3 mb-0"> 
                                Shirt
                            </p>
                            <p className="mt-3 mb-0"> 
                                Jacket
                            </p>
                            <p className="mt-3 mb-0"> 
                                Pants
                            </p>
                            <p className="mt-3 mb-0"> 
                                Shoes
                            </p>
                            <p className="mt-3 mb-0"> 
                                Accecories
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-2">
                            <p className="mt-0 mb-1 font-weight-bold"> SITEMAP </p>
                            <p className="mt-3 mb-0"> 
                                Products
                            </p>
                            <p className="mt-3 mb-0"> 
                                Brands
                            </p>
                            <p className="mt-3 mb-0"> 
                                Careers
                            </p>
                            <p className="mt-3 mb-0"> 
                                Privacy
                            </p>
                        </div>
                        <div className="col-11 col-md-3 mt-5 mb-0 mt-md-0 mb-md-0 px-4 py-0 px-md-5 py-md-0">
                            <p className="mb-1 font-weight-bold myfsid-dark"> FOLLOW US! </p>
                            <p><input type="button" value="Twitter" className="w-100 mt-3 mb-0"/></p>
                            <p><input type="button" value="Instagram" className="w-100 mt-3 mb-0"/></p>
                            <p><input type="button" value="Facebook" className="w-100 mt-3 mb-0"/></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer