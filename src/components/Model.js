import React from 'react'
import { Modal,Button} from 'react-bootstrap';
import img from './images/modal.PNG'
import './css/Modal.css'
function Model(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
       
        <Modal.Body>
        <div className="left">
                <img src={img} style={{marginBottom:'0%'}}  alt=""></img>
        </div>
        <div className="right">
            <h4>Booking Confirmed !</h4>
            <p>
                You have booked   <span><b>{props.car.carName}</b></span><br/>
                for the duration   <span><b>{props.issueDate}-{props.returnDate}</b></span><br/>
            </p>

        </div>
        </Modal.Body>
          <Button onClick={(e)=>{e.preventDefault(); props.onHide()}} style={{backgroundColor:'white',color:'black',border:'none',fontWeight:'bold',marginLeft:'80%'}}>Continue</Button>
      </Modal>
    );
  }  
  export default Model;