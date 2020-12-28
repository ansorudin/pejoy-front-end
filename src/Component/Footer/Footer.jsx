import React from 'react';
import { connect } from 'react-redux';
import { io } from './../../Support/Constants/Socket';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelopeOpenText, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

import PejoyLogo from './../../Support/Images/Pejoy Logo.png';
import CustomerCareIcon from './../../Support/Images/Customer Care Icon.png';
import AdminIcon from './../../Support/Images/Admin Chat Logo.png';

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.chatRoom = React.createRef();
    }

    state = {
        email: '',
        room: '',
        message: []
    }

    componentDidMount(){
        io.on('send-message', (data) => {
            console.log(data)
            this.setState({message: [...this.state.message, ...data]})
        })
    }

    openChatRoom = () => {
        this.chatRoom.current.style.display = "block";
      }
      
    closeChatRoom = () => {
        this.chatRoom.current.style.display = "none";
    }

    onStartChat = () => {

        let room = 'customer_' + this.email.value
        let email = this.email.value

        io.emit('user-start-chat', {email, room})
        this.setState({email: email, room: room})
    }

    onSendButtonClick = () => {
        var data = {
            username : this.state.email,
            message : this.message.value,
            user_role: this.props.user.data.data[0].user_role
        }

        if(this.message.value.length !== 0){
            io.emit('send-message', data)
            this.message.value = ''
        }
    }

    renderMessage = () => {
        return this.state.message.map((value) => {
            return(
                <div>
                    {
                        value.bot === true? 
                            <div className="row justify-content-start px-0 py-1">
                                <div className="col-2 align-self-end">
                                    <img src={AdminIcon} width="100%" />
                                </div>
                                <div className="col-10 text-left" style={{marginLeft: -20}}>
                                    <div className="mx-0 my-1 px-3 py-1 text-left rounded-top-left pa-bg-main-light pa-light pa-font-size-15" style={{display : 'inline-block', borderRadius : '15px 15px 15px 3px'}}>
                                        {value.message}
                                    </div>
                                </div>
                            </div>
                        :
                            value.myMessage === true?
                                <div className="row justify-content-end px-3 py-1">
                                    <div className="col-12 text-right">
                                        <div className="mx-0 my-1 px-3 py-1 text-left rounded-top-left pa-bg-light-grey pa-font-size-15" style={{display : 'inline-block', borderRadius : '15px 15px 3px 15px'}}>
                                            {value.message}
                                        </div>
                                    </div>
                                </div>
                            :
                                value.user_role === 0?
                                    <div className="row justify-content-end px-3 py-1">
                                        <div className="col-12 text-right">
                                            <div className="mx-0 my-1 px-3 py-1 text-left rounded-top-left pa-bg-light-grey pa-font-size-15" style={{display : 'inline-block', borderRadius : '15px 15px 3px 15px'}}>
                                                {value.message}
                                            </div>
                                        </div>
                                    </div>
                                :
                                    <div className="row justify-content-start px-0 py-1">
                                        <div className="col-2 align-self-end">
                                            <img src={AdminIcon} width="100%" />
                                        </div>
                                        <div className="col-10 text-left" style={{marginLeft: -20}}>
                                            <div className="mx-0 my-1 px-3 py-1 text-left rounded-top-left pa-bg-main-light pa-light pa-font-size-15" style={{display : 'inline-block', borderRadius : '15px 15px 15px 3px'}}>
                                                {value.message}
                                            </div>
                                        </div>
                                    </div>
                    }   
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                {/* FOOTER SECTION */}
                {
                    this.props.user.data === null? 
                        null 
                    : 
                        this.props.user.data.data[0].user_role === 0?
                            <img src={CustomerCareIcon} onClick={() => this.openChatRoom()} className="d-none d-md-block chat-icon" />
                        :
                            null
                }

                <div ref={this.chatRoom} className="chat-popup">
                    <div className="row justify-content-between mx-0 my-0 px-3 py-3 pa-bg-main-light" style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                        <div className="col-6">
                            <img src={PejoyLogo} width="100%" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTimes} onClick={() => this.closeChatRoom()} className="pa-clickable-element pa-light" />
                        </div>
                    </div>
                    {
                        this.state.email?
                            <>
                                <div className="px-3 py-2">
                                    <div className="chat-room">
                                        {this.renderMessage()}
                                    </div>
                                    <div className="row form-group position-bottom mx-0 my-2">
                                        <div>
                                            <input type="text" ref={(element) => this.message = element} className="form-control rounded-0 border-left-0 border-right-0 border-top-0 border-bottom border-primary pa-input" placeholder="Type something..." />
                                        </div>
                                        <div>
                                            <button onClick={this.onSendButtonClick} className="btn w-100 h-100 px-3 rounded-0 pa-input pa-bg-main-light pa-light">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        :
                            <div className="px-4 py-3">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="text" ref={(element) => this.email = element} value={this.props.user.data === null? null : this.props.user.data.data[0].email}  className="form-control" disabled />
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <button type="submit" onClick={() => this.onStartChat()} className="btn btn-primary w-100">Mulai Chatting</button>
                            </div>
                    }
                </div>
                
                <div className="container-fluid border-top border-primary">
                    <div className="row justify-content-center px-0 py-5">
                        <div className="col-md-5 px-5 py-0">
                            <p className="mt-0 mb-1 font-weight-bold myCss-dark"> TENTANG PEJOY ID </p>
                            <p className="mt-0 mb-0"> 
                                Pejoy Id adalah Pelopor Toko Online di Indonesia yang Menyediakan Produk Terlengkap dan Terpercaya.
                                Nikmati Kemudahan Berbelanja Bersama Kami, Karena Kami Memiliki Beberapa Warehouse yang Tersebar di Beberapa
                                Provinsi di Indonesia. Pengiriman Cepat, Ongkir Hemat!
                            </p>
                            <p className="mt-3 mb-0"> 
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-md pa-danger" /> Office : Jalan Trunojoyo No. 11, Kota Bandung, Jawa Barat.
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
                            <p className="mb-1 font-weight-bold myCss-dark"> FOLLOW US! </p>
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

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Footer)