import React, { Component } from 'react'
import '../css/MouseColor.css'

class MouseColor extends Component{
    constructor(props){
        super(props);
        this.state = {color2: {backgroundColor:"whitesmoke"}
                    , color: {backgroundColor:"whitesmoke"}
                    , stopColor:false}
        this.capturarRaton=this.capturarRaton.bind(this);
        this.dblClick_Event=this.dblClick_Event.bind(this);
        this.mouseEnter_Event=this.mouseEnter_Event.bind(this);
    }
    //onMouseMove
    capturarRaton(event){
        //console.log("onMouseMove",event);
        var f1 = Math.trunc(event.pageX/window.innerWidth*255); 
        var f2 = Math.trunc(event.pageY/window.innerHeight*255); 
        var f0 = Math.trunc((f1+f2)/16);
        var bgHex= "#"+f1.toString(16).toUpperCase().padStart(2,"0")
                +f2.toString(16).toUpperCase().padStart(2,"0")
                +f0.toString(16).toUpperCase().padStart(2,"0");
        this.setState((prevState,props) => ({ color:{backgroundColor:bgHex} }));
    }

    //onDoubleClick
    dblClick_Event(event){
        this.setState((prevState, props) => ({       
            stopColor: !prevState.stopColor
        }));
    }

    //onMouseEnter
    mouseEnter_Event(event){
        //16777215=0xFFFFFF
        var bgColor = "#"+ (Math.floor(Math.random()*16777215)).toString(16).toUpperCase().padStart(6,"0");
        this.setState((prevState,props) => ({ color2:{backgroundColor: bgColor } }));
        //if(!this.state.stopColor)
            console.log("mouseEnter_Event("+bgColor+")",event);
        
    }
    //onMouseOut
    mouseOut_Event(event){
        //if(!this.state.stopColor)
            console.log("mouseOut_Event",event);
    }

    render() {
        return (
            <div className="parent-mouse-color">
                <div className="main-mouse-color"
                    onMouseMove={this.capturarRaton}
                    style={this.state.color}>
                    <div className="child-mouse-color"
                        style={this.state.color2}
                        onDoubleClick={this.dblClick_Event}
                        onMouseEnter={this.mouseEnter_Event}
                        onMouseOut={this.mouseOut_Event}/>
                </div>
            </div>
        );
    }
}

export default MouseColor;