


import React, { Component } from 'react'

import Card from './cards'
import Footer from './footer'
import BookingForm from './BookingForm'
import CarsDetails from './CarsDetails'
import img1 from './images/logo.PNG'
import {connect} from 'react-redux'
import './css/dashboard.css'
export class DashBoar extends Component {
    constructor(props){
        super()
        this.state={
            card:true,
            CarsDetails:false,
            Booking:false,
            footer:true,
            bookingId:Number

        }
        this.details = this.details.bind(this)
        this.showBooking = this.showBooking.bind(this)
        this.check = this.check.bind(this)
        this.Dashboard = this.Dashboard.bind(this)
    }
    details(carId){
        this.setState({
            bookingId:carId,
            card:false,
            CarsDetails:true,
            Booking:false,
            footer:true
        })
        
    
    }
    showBooking(carId){
        this.setState({
            bookingId:carId,
            card:false,CarsDetails:false,
            Booking:true,
            footer:false
        })   
    }
    Dashboard(){
        this.setState({
            card:true,
            CarsDetails:false,
            Booking:false,
            footer:true
        })
    }
    check(item,type){
            if(item.id === this.state.bookingId &&type==='Booking' ){
                return <BookingForm DashBoard={this.Dashboard} car={item}/>
             }else if(item.id === this.state.bookingId && type==='Details'){
                 return <CarsDetails car={item} showBooking={this.showBooking} />
             }
        }
    render() {
        
        return (
            <div>
            <div>
            {this.state.card && 
            <>
            <img src={img1} style={{marginLeft:'45%'}} className="logo"  alt="" />
            <h4 style={{marginLeft:'8%',marginTop:'9%'}}>Cars For rent</h4>
             <hr style={{width:'83%',marginBottom:'6%'}}></hr>   
            <span className="carDetails" style={{color:'gray',fontFamily:'Open Sans'}}>Car Details</span>
            <span className="carDetail" style={{marginLeft:'20%',color:'gray',fontFamily:'Open Sans'}}>Rent per day</span>
            <div className="container py-1">
            {this.props.ctr.data.map((item,index)=> (
                <Card details={this.details} booking={this.showBooking} car= {item}/>                           
                        ))}
                </div>
                </>
            }   
                </div>

                 {this.state.CarsDetails && 
                    this.props.ctr.data.map((item,index)=> (
                        this.check(item,'Details')     
                        ))
                  }
                 {this.state.Booking &&
                    this.props.ctr.data.map((item,index)=> (
                        this.check(item,'Booking')
                        ))
                   }
                {this.state.footer &&<Footer Dashboard={this.Dashboard}/>}
            </div>
 );
}
        
    }

    const mapStateToProps =state =>{
        return{
            ctr:state.car
        }
    }
export default connect(mapStateToProps)(DashBoar)