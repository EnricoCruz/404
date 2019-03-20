import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';

import getObjectPosition from '../src/404/positionCalculator';
import Object from '../src/404/object';

// 404 img files:
// const images = require.context('../src/404/', false, /\.svg$/)
var images = []
images[0] =  require('../src/404/sky.svg');
images[1] =  require('../src/404/bg_sea.svg');
images[2] =  require('../src/404/bg_sand.svg');
images[3] =  require('../src/404/boat.svg');
images[4] =  require('../src/404/exclamation.svg');
images[5] =  require('../src/404/palm.svg');
images[6] =  require('../src/404/sun.svg');



class ErrorCanvas extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            coords: {
                x:0, y:0
            },
            size: {
                width: 0,
                height: 0
            }
        }
    }

    _onMouseMove(e) {
        this.setState({ 
            coords: {
                x: e.clientX - this.state.size.width,
                y: e.clientY - this.state.size.height
            }
         });
    }

    componentDidMount() {
        this.setState({
            size: {
                width: Math.ceil( this.wrapper.clientWidth / 2 ),
                height: Math.ceil( this.wrapper.clientHeight / 2 )
            }
        });
    }
        
    render()
    {   
        
        return (
            <div 
            id="wrapper" onMouseMove={this._onMouseMove.bind(this)}
            ref= { (wrapper) => this.wrapper = wrapper }
            
            >
                {/* <img src={images[0]} alt="bg" id="sky" /> */}
                {/* <img src={images[1]} alt="sun" className="bg-img" id="bg-sea"/> */}
                {/* <img src={images[2]} alt="boat" className="bg-img" id="bg_sand"/> */}
                {/* <img src={images[3]} alt="boat" id="boat-img"/> */}
                {/* <img src={images[5]} alt="palm" id="palm-img"/> */}
                {/* <img src={images[6]} alt="sun" id="sun-img"/> */}
                <div id="err-container">
                    <Object src={images[0]} alt="bg" id="sky" class="" mousecoords={this.state.coords} distance={1200}/>
                    <Object src={images[1]} alt="sea" id="bg-sea" class="bg-img" mousecoords={this.state.coords} distance={100}/>
                    <Object src={images[2]} alt="sand" id="bg-sand" class="bg-img" mousecoords={this.state.coords} distance={25}/>
                    <Object src={images[3]} alt="boat" id="boat-img" class="" mousecoords={this.state.coords} distance={100}/>
                    <Object src={images[5]} alt="palm" id="palm-img" class="" mousecoords={this.state.coords} distance={25}/>
                    <Object src={images[6]} alt="sun" id="sun-img" class="" mousecoords={this.state.coords} distance={250}/>
                    <Container/>
                </div>
                
            </div>
        )

    }
}

class Container extends Component {
        render() {
        return (
        <div className="err-dialog">
            <img src={images[4]} alt="exclamation" id="exclamation-img"/>
            {/* <h1>Error 404</h1> */}
            <h1>404</h1>
            <hr/>
            <p>This url couldn't get reached.</p>
            <p>Maybe you typed a wrong direction</p>
            <p>Or maybe the owner has deleted the file.</p>
        </div>
        )
    }
}

render(<ErrorCanvas />, document.getElementById('app') )
