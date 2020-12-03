import React, { Component } from 'react';
import { connect } from 'react-redux';
import { io } from './../../../Support/Constants/Socket';

import Swal from 'sweetalert2';
import './../UserProfile.css';

export class CustomerCare extends Component{

    state = {
        usersConnected: [],
        openChatRoom: false,
        message: []
    }

    componentDidMount(){
        io.emit('admin-standby')
        io.on('users-connected', (data) => {
            this.setState({usersConnected: [...data]})
        })
        io.on('send-message', (data) => {
            console.log(data)
            this.setState({message: [...this.state.message, ...data]})
            if(data[0].offline === true){
                window.location = '/member/admin-dashboard/customer-care'
            }
        })
        io.on('open-room', () => {
            this.setState({openChatRoom: true})
        })
        io.on('room-full', () => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Other admin already connect with this user',
                showConfirmButton: false,
                timer: 3000
            })
        })
    }

    componentWillUnmount(){
        io.emit('admin-disconnect')
    }

    onStartChat = (userRoom, adminEmail) => {
        let room = userRoom
        let email = 'admin_' + adminEmail

        io.emit('admin-start-chat', {email, room})
    }

    onSendButtonClick = () => {
        var data = {
            username : this.props.user.data.data[0].email,
            message : this.message.value,
            user_role: this.props.user.data.data[0].user_role
        }

        if(this.message.value.length !== 0){
            io.emit('send-message', data)
            this.message.value = ''
        }
    }

    mapUsersConnected = () => {
        return this.state.usersConnected.map((value, index) => {
            return(
                <div className="mx-0 mt-3 mb-0 px-5 py-3" style={{border: "1px solid #0095da", borderRadius: 5}}>
                    <div className="row justify-content-between align-items-center">
                        <div className="font-weight-bold pa-font-size-18">
                            Username :
                            <p className="font-weight-light pa-font-size-20 pa-dark-grey">
                                {value.username}
                            </p>
                        </div>
                        <div>
                            <div onClick={() => this.onStartChat(value.room, this.props.user.data === null? null : this.props.user.data.data[0].email)} className="btn mx-0 my-0 px-4 py-1 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                                Join
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderMessage = () => {
        return this.state.message.map((value) => {
            return(
                <div>
                    {
                        value.myMessage === true || value.user_role === 1?
                            <div className="row justify-content-end px-3 py-1">
                                <div className="col-12 text-right">
                                    <div className="mx-0 my-1 px-3 py-1 text-left rounded-top-left pa-bg-main-light pa-light pa-font-size-18" style={{display : 'inline-block', borderRadius : '15px 15px 3px 15px'}}>
                                        {value.message}
                                    </div>
                                </div>
                            </div>
                        :
                            <div className="row justify-content-start px-3 py-1">
                                <div className="col-12 text-left">
                                    <div className="mx-0 my-1 px-3 py-1 text-left rounded-top-left pa-bg-light-grey pa-font-size-18" style={{display : 'inline-block', borderRadius : '15px 15px 15px 3px'}}>
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
            // CUSTOMER CARE
            <div>
                <div className="font-weight-bold pa-font-size-30">
                    Customer Care
                </div>
                <div className="mx-0 my-1 border-bottom">

                </div>
                {
                    this.state.openChatRoom === false?
                        this.mapUsersConnected()
                    :
                        <>
                            <div className="mx-0 my-3 pa-chat-room">
                                {
                                    this.renderMessage()
                                }
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-9">
                                        <input type="text" ref={(element) => this.message = element} className="form-control rounded-0 border-left-0 border-right-0 border-top-0 border-bottom border-primary pa-input" placeholder="Type something..." />
                                    </div>
                                    <div className="col-3">
                                        <button onClick={this.onSendButtonClick} className="btn w-100 h-100 px-3 rounded-0 pa-input pa-bg-main-light pa-light">Send</button>
                                    </div>
                                </div>
                            </div>
                        </>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, null)(CustomerCare)