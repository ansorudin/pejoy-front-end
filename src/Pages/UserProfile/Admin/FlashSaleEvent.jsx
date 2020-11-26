import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import { getAllDiscountProducts, createFlashSaleEvent } from './../../../Redux/Actions/UserProfile/flashSaleEventAction';

export class FlashSaleEvent extends Component{

    state = {
        eventDate: null,
        products_id: []
    }

    componentDidMount(){
        this.props.getAllDiscountProducts()
    }

    mapDiscountProducts = () => {
        return this.props.flashSaleEvent.data.data.map((value, index) => {
            return(
                <tr>
                    <th scope="row">{value.id}</th>
                    <td>{value.name}</td>
                    <td>{value.discount}</td>
                    <td>
                        <div className="form-check">
                            <input type="checkbox" value={value.id} onChange={this.productSelected} className="form-check-input" />
                        </div>
                    </td>
                </tr>
            )
        })
    }

    productSelected = (element) => {
        this.state.products_id.push(element.target.value)
    }

    createFlashSaleEvent = () => {
        const data = this.state
        
        this.props.createFlashSaleEvent(data)
    }

    render(){
        if(this.props.flashSaleEvent.data === null){
            return(
                <div>
                    Loading
                </div>
            )
        }

        return(
            // ADD FLASH SALE PRODUCTS
            <div>
                <div className="font-weight-bold pa-font-size-18">
                    Flah Sale Events :
                </div>
                <div className="mx-0 my-1 border-bottom">

                </div>
                <div className="px-0 py-4">
                    <div className="input-group mb-3">
                        <input type="date" onChange={(e) => this.setState({eventDate: e.target.value}) } className="form-control" placeholder="Recipient's username" />
                        <div className="input-group-append">
                            <span className="input-group-text">Date</span>
                        </div>
                    </div>
                </div>
                <div className="font-weight-bold pa-font-size-18">
                    Products :
                </div>
                <div className="mx-0 my-1 border-bottom">

                </div>
                <div className="px-0 py-4">
                    <table class="table border">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Product</th>
                                <th scope="col">Discount</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.mapDiscountProducts()
                            }
                        </tbody>
                    </table>
                    <div onClick={() => this.createFlashSaleEvent()} className="btn mx-0 my-3 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                        Create Event
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        flashSaleEvent: state.flashSaleEvent
    }
}

const mapDispatchToProps = { getAllDiscountProducts, createFlashSaleEvent }

export default connect(mapStateToProps, mapDispatchToProps)(FlashSaleEvent)