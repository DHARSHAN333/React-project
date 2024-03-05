import React, {Component} from 'react';
import './my.css';
class Bmi extends Component {
    constructor(props) {
        super(props);
        this.state={
            NUM1: 0,
            NUM2: 0,
            BMI: 0,
            Ans:0,

        };
    }
    handleIncrement = () => {
        this.setState({ NUM1: this.state.NUM1 + 1});
    };
    handleIncrement1 = () => {
        this.setState({ NUM2: this.state.NUM2 +10});
    };

    handleIncrement11 = () => {
        this.setState({ NUM1: this.state.NUM1 + 0.1});
    };

    handleIncrement111 = () => {
        this.setState({ NUM2: this.state.NUM2 +0.1});
    };








    handleDecrement = () => {
        this.setState({ NUM1: this.state.NUM1 -1});
    };
    handleDecrement1 = () => {
        this.setState({ NUM2: this.state.NUM2 - 1});
    };
    handleDecrement11 = () => {
        this.setState({ NUM1: this.state.NUM1 - 0.1});
    };
    handleDecrement111 = () => {
        this.setState({ NUM2: this.state.NUM2 -0.1});
    };







    handlemult =() =>{
        this.setState({BMI: this.state.NUM2 / (this.state.NUM1*2)})
    };
   

    render() {
        return (
            <div style={{backgroundColor:"black", backgroundSize:"cover"}} id="ftp">
            
           <center>
             <br/>
            <div class="onti" id="dp">
           
           <div class="ontk">
              <h2 style={{color:"red",fontFamily:"'Orbitron', sans-serif",textAlign:"left"}}>C A L C U L A T E</h2>
              </div><br></br>
             < div class="pntll">
            <h3 style={{color:"rgb(244, 123, 123)",fontFamily:"'Orbitron', sans-serif"}}>H E I G H T   :   {this.state.NUM1}<br></br><div class="btn-group"><button onClick={this.handleIncrement}  >+1 mt</button><button onClick={this.handleIncrement11}  >+0.1 mt</button><button onClick={this.handleDecrement} >-1 mt</button><button onClick={this.handleDecrement11} >-0.1 mtr</button></div></h3>
            <h3 style={{color:"rgb(244, 123, 123)",fontFamily:"'Orbitron', sans-serif"}}>W E I G H T   : {this.state.NUM2}<br></br><div class="btn-group"><button onClick={this.handleIncrement1} >+10 kg</button><button onClick={this.handleIncrement111} >+0.1 kg</button><button onClick={this.handleDecrement1} >-1 kg</button><button onClick={this.handleDecrement111} >-0.1 kg</button></div></h3>
            </div>
            <br></br>
            <div class="pntl">
            <p style={{fontFamily:"'Orbitron', sans-serif",color:"black",fontSize:"40px"}}> {this.state.BMI} kg/m2</p>
            </div>
            
            <br></br><br></br>
           
           
            <button class="bautton" onClick={this.handlemult}><span style={{fontFamily:"'Orbitron', sans-serif"}}>F I N D</span></button>
           
            
           
           
            
           </div></center>
           <div class="floating1-container">
      <div><button  class="floating1-button" style={{fontFamily:"'Orbitron', sans-serif"}}>GUIDE</button></div>
      <div class="element-container">
      </div>

      
    </div>
           </div>
        );
    }
}


export default Bmi;