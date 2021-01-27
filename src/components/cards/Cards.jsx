import React, { Component } from 'react';
import Card from './Cardui';
import img1 from '../assets/Final_Fantasy_Spirits_Within.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/Resident_Evil_Vendetta.jpg';
import Navigation from '../Navigation'
class Cards extends Component {
    render() { 
        return ( 
            <div>
                <Navigation/>
                <hr></hr>
                <center><h2 style={{fontFamily:"Lucida Handwriting", textShadow:"2px 2px 5px #96bb7c"}}>Book your Seats Now!</h2></center>
                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                   
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="GO BUS SERVICE"
                        about="We are providing a safe journey to you ! Have a nice experience with our service , Go ahead and book tickets to enjoy our serice"
                         buttonname="Booknow"
                        />
                    </div>
                    
                </div> 
              
                            
            </div>

            </div>
            
         );
    }
}
 
export default Cards;