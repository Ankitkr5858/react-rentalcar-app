import React, { Component } from 'react'
import { Button} from 'react-bootstrap';
// import img from './images/car1.jpg'
export class cards extends Component {
    render() {
        return (
            <>       
            <div className="row " style={{border: '1px solid #eeeeee',padding:'2px', marginTop:'2em', borderRadius:'4px',width:'90%',marginLeft:'5%'}}>
            <div className="col-md-3" style={{marginLeft:'-16px'}}>
                    <img src={require(`./images/${this.props.car.id}.jpg`)} alt="" className="w-100" style={{height: '5em'}}/>
            </div>
            <div className="col-md-4">
                    <div className="card-block px-3">
                        <h6 className="card-title">{this.props.car.carName}</h6>
                        <span className="card-text" style={{ color: 'gray'}}>{this.props.car.color}</span>
                        <span className="seates">{this.props.car.seatingCapacity} Seater</span>
                   
                    </div>
            </div>
            <div className="col-md-2">
                    <div className="card-block px-3 mt-4 ml-5 " >
                        
                        <p className="card-text" >{this.props.car.price}$</p>
                        
                   
                    </div>
            </div>
            <div className="col-md-3">
                    <div className="card-block px-3 mt-4  " >
                       <div className="row">
                            <div className="col-md-8">
                            {!this.props.car.rented && <Button onClick={()=> this.props.booking(this.props.car.id)} style={{backgroundColor:'rgb(105,105, 105)',borderColor:'rgb(105,105, 105)'}}>Book Now</Button>}
                            {this.props.car.rented &&
                            <div>
                             <Button  style={{backgroundColor:'rgb(245,245,245)',borderColor:'rgb(105,105, 105)',color:"black"}}  disabled>Booked</Button>
                              <p style={{color:'red',fontSize:'10px'}}>Currently unavailable</p>  
                            </div>
                            }
                                </div>  
                                <div className="col-md-4">
                                <Button onClick={()=>this.props.details(this.props.car.id)} style={{backgroundColor:'rgb(245,245,245)',color:'rgb(105,105, 105)',borderColor:'rgb(245,245,245)'}}>Detail</Button>
                                </div>  
                        </div> 
               </div>
            </div>     
            </div>
            </>
        )
    }
}


export default cards
