import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

export class footer extends Component {
    render() {
        return (
          <>
          <Helmet>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          </Helmet>
                <footer className="page-footer font-small blue pt-4" style={{marginLeft:'9%',marginTop:'8%'}}>
                    <div className="container-fluid text-center text-md-left">
                      <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                          <h2 className="text-uppercase" style={{fontSize:'30px'}}>Rent Vroom</h2><br/><br/>
                          <p >No: 296,3rd Cross Rd. Jakkasandra. 1st Block, Koramangla <br/> Bengaluru, Karnataka 560034</p>
                          
                          <p href="#" className="fa fa-twitter"></p>
                          <p href="#" className="fa fa-instagram" style={{marginLeft:'10%'}}></p>
                          <p href="#" className="fa fa-linkedin" style={{marginLeft:'10%'}}></p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"/>
                      </div>
                    </div>
                    <div className="footer-copyright text-center py-3" style={{marginLeft:'1%',marginTop:'5%'}}>
                        <p style={{float:'left',fontWeight:'bold',color:'gray'}} onClick={this.props.Dashboard}> Home</p>
                        <p style={{float:'left',marginLeft:'30px',fontWeight:'bold',color:'gray'}} > Contact</p>
                        <p style={{float:'left',marginLeft:'30px',fontWeight:'bold',color:'gray'}} > About</p>
                        
                    </div>
                    <div className="footer-copyright text-center py-3" style={{float:'right',marginTop:'-3%',marginRight:'10%'}}>
                        <p style={{float:'left',fontWeight:'normal',color:'gray'}}> Privacy Policy</p>
                        <p style={{float:'left',marginLeft:'30px',fontWeight:'normal',color:'gray'}}> Terms Of Services</p>
                    </div>
                </footer>   
</>
  )
    }
}

export default footer
