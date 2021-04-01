import React, { Component } from 'react'
import '../css/MouseColor.css'

class MouseColor extends Component{
    constructor(props){
        super(props);
        this.state = {color: {backgroundColor:"whitesmoke"}
                    , switx : true
                    , stopColor:false};
        this.capturarRaton=this.capturarRaton_.bind(this);
        this.dblClick_Event=this.dblClick_Event.bind(this);
        this.mouseEnter_Event=this.mouseEnter_Event.bind(this);
        this.mouseOut_Event=this.mouseOut_Event.bind(this);
    }

    capturarRatonLogica(event){
        var f1 = Math.trunc(event.pageX/window.innerWidth*255); 
        var f2 = Math.trunc(event.pageY/window.innerHeight*255); 
        var f0 = Math.trunc((f1+f2)/16);
        var bgHex= "#"+f1.toString(16).toUpperCase().padStart(2,"0")
                +f2.toString(16).toUpperCase().padStart(2,"0")
                +f0.toString(16).toUpperCase().padStart(2,"0");
        return bgHex;
    }

    //onMouseMove
    //console.log("onMouseMove",event);
    capturarRaton_(event){
        if(this.state.switx){
            var bgHex= this.capturarRatonLogica(event);
            this.setState((prevState,props) => ({ color:{backgroundColor:bgHex} }));
        }
    }

    //onDoubleClick
    dblClick_Event(event){
        console.log("dblClick_Event_Event",event);
        this.setState((prevState, props) => ({       
            stopColor: !prevState.stopColor
        }));
    }

    //onMouseEnter
    mouseEnter_Event(event){
        //16777215=0xFFFFFF
        var bgColor = "#"+ (Math.floor(Math.random()*16777215)).toString(16).toUpperCase().padStart(6,"0");
        console.log(bgColor+"-"+this.state.color.backgroundColor);
        if(!this.state.stopColor){
            this.setState((prevState,props) => ({ color:{backgroundColor: bgColor}, switx:false }));
        }        
        console.log("mouseEnter_Event",this.state);
    }

    //onMouseOut
    mouseOut_Event(event){
        if(!this.state.stopColor){
            this.setState((prevState,props)=>({switx:true}));
        }
        console.log("mouseOut_Event",this.state);
    }

    render() {
        return (
            <div className="parent-mouse-color">
                <div className="main-mouse-color"
                    onMouseMove={this.capturarRaton}
                    style={this.state.color}>
                    <div className="child-mouse-color"
                        onDoubleClick={this.dblClick_Event}
                        onMouseEnter={this.mouseEnter_Event}
                        onMouseOut={this.mouseOut_Event}/>
                </div>
            </div>
        );
    }
}

export default MouseColor;