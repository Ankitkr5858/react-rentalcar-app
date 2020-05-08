import React, { Component } from 'react'
import {connect } from 'react-redux'
import img from './images/logo.PNG'
import './css/bookingForm.css'
import Model from './Model'
import moment from 'moment'
export class BookingForm extends Component {
    constructor(props){
        super()
        this.state={
            show:false,
            name:String,
            phNum:String,
            releseDate:String,
            issueDate:String,
            errors: {
                name: '',
                phNum: '',
                releaseDate: '',
                issueDate: '',
                compareDate: ''
              }
        }
        this.showTrue = this.showTrue.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.closeModel = this.closeModel.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.compareDate = this.compareDate.bind(this);
    }

closeModel(){
    this.setState({show:!this.state.show})
    this.props.DashBoard()
    
}
    showTrue(event){
       var data={
            id:this.props.car.id,
            name:this.state.name,
            phNum:this.state.phNum,
            releseDate:this.state.releseDate,
            issueDate:this.state.issueDate,
            
        }
    this.props.onCarBook(this.props.car.id)
    this.props.onCarBooks(data)
    this.setState({show:!this.state.show})
    }
    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      }
      compareDate (){
        var releaseDate = moment(this.state.releseDate)
        var issueDate = moment(this.state.issueDate)
        if(!releaseDate.isValid() || !issueDate.isValid()){
            this.state.errors.compareDate = "Both release and issue date must be valid";
        } else if(releaseDate> issueDate){
            this.state.errors.compareDate = "";
        } else {
            this.state.errors.compareDate = "Release date must be greater then issue date"
        }
      }
    handleChange(event){
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        const phoneNumber = 
        RegExp(/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/i);
        switch (name) {
            case 'name': 
            errors.name = 
                value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
            break;
            case 'phNum': 
            errors.phNum = 
            phoneNumber.test(value)
                ? ''
                : 'phone number is not valid!';
            break;
            case 'releseDate': 
            var date = moment(this.state.releseDate)
            if(!date.isValid()){
                errors.releaseDate = "Relase date is not valid"
            } else {
                errors.releaseDate = ""
            }
            this.compareDate();
           
            break;
            case 'issueDate': 
            var date = moment(this.state.issueDate)
            if(!date.isValid()){
                errors.issueDate = "Issue date is not valid"
            } else {
                errors.issueDate = ""
            }
            this.compareDate();
            break;
            default:
            break;
    }
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
    }
    render() {
        return (
            <div>
                <div className="leftHalf">
                </div>
                <div>
                    <form className="rightHalf" onSubmit={this.showTrue}>       
                            <Model show={this.state.show} onHide={this.closeModel} car={this.props.car} issueDate={this.state.issueDate} returnDate={this.state.releseDate}/>
                        <div style={{marginTop:'18%'}}>
                            <h3 className="bookingDetails" style={{float:'left'}}>Booking details</h3>
                            <img src={img} style={{marginLeft:'45%',marginTop:'0%'}}  alt=""/>
                            <br/>
                        </div>
                        <div>
                        {this.state.errors.name.length > 0 && 
                            <div style={{color:'red',textAlign:'center'}}>{this.state.errors.name}</div>}
                            {this.state.errors.phNum.length > 0 && 
                            <div style={{color:'red',textAlign:'center'}}>{this.state.errors.phNum}</div>}
                            {this.state.errors.releaseDate.length > 0 && 
                            <div style={{color:'red',textAlign:'center'}}>{this.state.errors.releaseDate}</div>}
                            {this.state.errors.issueDate.length > 0 && 
                            <div style={{color:'red',textAlign:'center'}}>{this.state.errors.issueDate}</div>}
                            {this.state.errors.compareDate.length > 0 && 
                            <div style={{color:'red',textAlign:'center'}}>{this.state.errors.compareDate}</div>}
                        </div>
                        <div style={{marginTop:'10%'}}>
                            <label>Name</label>
                            <label style={{marginLeft:'43%'}}>Phone Number</label>
                            <br/>
                            <input className={"name "+(this.state.errors.name.length>0? 'error':'')} name="name" onChange={this.handleChange} value={this.state.name} type="text" placeholder="Name" required ></input>
                           
                            <input className={"phNo "+(this.state.errors.phNum.length>0? 'error':'')} type="tel" pattern="91[0-9]{4}-[0-9]{6}" placeholder="+91"  name="phNum" onChange={this.handleChange} value={this.state.phNum} required ></input>
                            <br/>
                            </div>
                        <div style={{marginTop:'10%'}}>
                            <label>Issue Date</label>
                            <label style={{marginLeft:'43%'}}>Return Date</label>
                            <br/>
                            <input className={"name "+(this.state.errors.issueDate.length>0? 'error':'')} type="date"  name="issueDate" onChange={this.handleChange} value={this.state.issueDate}required ></input>
                            <input className={"phNo "+(this.state.errors.releaseDate.length>0? 'error':'')} type="date"   name="releseDate" onChange={this.handleChange} value={this.state.releseDate}required ></input>
                        </div>
                        <div style={{marginTop:'10%'}}>
                            <label style={{fontSize:'20px'}} onClick={this.props.DashBoard}>Back</label>
                            <input type="button"    onClick={this.showTrue} style={{marginLeft:'60%',marginTop:'-1%',backgroundColor:'rgb(105,105, 105)',color:'white',fontWeight:'bold',borderRadius:'5px',borderColor:'rgb(156,164, 171)',border:'none',height:'50px',width:'17%'}}  value="Book Car"></input>
                            {/* {this.validateForm(this.state.errors)  && <Button style={{marginLeft:'-62%',marginTop:'-10%',backgroundColor:'rgb(156,164, 171)',borderColor:'rgb(156,164, 171)',height:'35px',width:'35%',borderRadius:'5px'}} disabled>Booked</Button>} */}
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps =state =>{
    return{
        ctr:state.car.data
    }
}
const mapDispatchToProps =dispatch =>{
    return{
        onCarBook: (carId) => dispatch({type: 'BOOK_CAR',carId:carId}),

        onCarBooks: (data) => dispatch({type: 'ADD_NEW_BOOKING',data:data})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookingForm)

