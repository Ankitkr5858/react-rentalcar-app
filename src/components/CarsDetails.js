import React, { Component } from 'react'
import img from './images/logo.PNG'
import { Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import './css/CarsDetails.css'
export class CarsDetails extends Component {
    constructor(props){
        super()
        this.state={
            name:String,
            phNum:String,
            releseDate:String,
            issueDate:String,
            imageUrl:props.car.imageUrl
        }
    }

    componentDidMount(){
        console.log(this.props);
        for(var i=0;i<this.props.booking.length;i++){
            if(this.props.car.id === this.props.booking[i].id){

                this.setState({name:this.props.booking[i].name,
                phNum:this.props.booking[i].phNum,
                releseDate:this.props.booking[i].releseDate,
                issueDate:this.props.booking[i].issueDate
                }  )

            }
        }
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <img src={img} alt="" className="logo" />
                <div  className="card">
                    <img src={require(`./images/${this.props.car.id}.jpg`)}  alt="" className="cardImg" />
                    <div className='Details'>
                        <h3 >{this.props.car.carName}</h3>
                        <div style={{marginLeft:'7.5%',width:'100%',marginTop:'14%'}}>
                            <span style={{color:'gray',fontWeight:'normal',float:'left',fontSize:'17px'}}>{this.props.car.color}</span>
                            <span style={{color:'gray',marginLeft:'8%',fontSize:'17px'}}>{this.props.car.seatingCapacity} Seater</span>
                            <p style={{marginTop:'5%',marginLeft:'-52%',fontSize:'15px',fontWeight:'normal'}}>Rent per day:<span style={{fontWeight:'bold',marginLeft:'2%'}}>₹ {this.props.car.price} </span></p>
                         {!this.props.car.rented  && <Button style={{marginLeft:'-62%',marginTop:'-4%',backgroundColor:'rgb(156,164, 171)',borderColor:'rgb(156,164, 171)',height:'35px',width:'35%',borderRadius:'5px'}} onClick={()=>this.props.showBooking(this.props.car.id)}>Book now</Button>}
                         {this.props.car.rented  && <Button style={{marginLeft:'-62%',marginTop:'-10%',backgroundColor:'rgb(156,164, 171)',borderColor:'rgb(156,164, 171)',height:'35px',width:'35%',borderRadius:'5px'}} disabled>Booked</Button>}
                       {this.props.car.rented && 
                        <p style={{fontSize:'10px',color:'red',marginLeft:'15%',marginTop:'-5%'}}>Currently unavailable</p>
                       }
                        </div>
                        
                        
                    </div>
                </div>
                <h4 style={{marginTop:'5%',marginLeft:'-62%',color:'gray'}}>Car Details</h4>
                <div className="description">
                {this.props.car.rented &&<div className="avalability">
                        <p>Not Available</p> 
                    </div>}
                    <div className="des">
                        <p>Vehical Number: {this.props.car.vehicleNumber} </p>
                        <p>{this.props.car.fuel}</p>
                        <p>{this.props.car.engine}</p>
                        <p>{this.props.car.description}</p>
                    </div>
                </div>
                <h4 style={{marginTop:'5%',marginLeft:'-58%',color:'gray'}}>Current Booking</h4>
                <div className="tableDiv">
                    <div className="row">
                    <div className="column" >
                        <h6 style={{color:'gray'}}>NAME</h6>
                       {this.props.car.rented && <p style={{marginTop:'10%'}}>{this.state.name}</p> }
                    </div>
                    <div className="column">
                        <h6 style={{color:'gray'}}>PHONE NUMBER</h6>
                        {this.props.car.rented && <p style={{marginTop:'10%'}}>{this.state.phNum}</p> }
                    </div>
                    <div className="column" >
                        <h6 style={{color:'gray'}}>ISSUE DATE</h6>
                        {this.props.car.rented && <p style={{marginTop:'10%'}}>{this.state.issueDate}</p> }
                    </div>
                    <div className="column" >
                        <h6 style={{color:'gray'}}>RETURN DATE</h6>
                        {this.props.car.rented && <p style={{marginTop:'10%'}}>{this.state.releseDate}</p> }
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps =state =>{
    return{
        booking:state.booking.bookings,
    }
}
const mapDispatchToProps =dispatch =>{
    return{
        onCarBook: (carId) => dispatch({type: 'BOOK_CAR',carId:carId}),

        onCarBooks: (carId) => dispatch({type: 'ADD_BOOKING',carId:carId})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarsDetails)
