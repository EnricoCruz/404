import React, {Component} from 'react';
import * as $ from 'jquery';

type ObjProps = {
    mousecoords: {x:number, y:number},
    distance: number,
    src:string,
    alt:string,
    id?:string,
    class:string
};
type ObjState = {
    coord_x: str,
    coord_y: str,
    css: object

};
export default class Object extends Component<ObjProps, ObjState>
{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.setState({
            coord_x: this.divElement.getBoundingClientRect().x,
            coord_y: this.divElement.getBoundingClientRect().y
        }, 
        this.updatePosition($)            
        );
        
        
    }

    updatePosition($):void
    {
        // console.log(this.state.coord_x);
        // this.setState({
        //     css: {
        //         left: this.state.coord_x + (this.props.mousecoords.x / this.props.distance),
        //         top: this.state.coord_y + (this.props.mousecoords.y / this.props.distance)
        //     }
        // }) 

        // this.props.css = {
        //             left: this.state.coord_x + (this.props.mousecoords.x / this.props.distance),
        //             top: this.state.coord_y + (this.props.mousecoords.y / this.props.distance)
        //         }   
        
        // window.onmousemove = () => {
        //     console.log('esto es un error');
        //     this.setState({
        //         css: {
        //             left: this.state.coord_x + (this.props.mousecoords.x / this.props.distance),
        //             top: this.state.coord_y + (this.props.mousecoords.y / this.props.distance)
        //         }
        //     });
        // }

        /* JQUERY SOLUTION */
        $(document).on('mousemove', () => {
            $(this.divElement).css({
                left: this.state.coord_x - (this.props.mousecoords.x / this.props.distance),
                top: this.state.coord_y - (this.props.mousecoords.y / this.props.distance)
            });
        });
        
    }
    

    render()
    {
        // this.updatePosition().bind(this);
        return(
            <img 
            src={this.props.src} 
            alt={this.props.alt} 
            id={this.props.id} 
            className={this.props.class}
            ref= {(divElement) => this.divElement = divElement }
            style={this.state.css}
            mousecoords = {this.props.mouseCoords}
            // distance = {this.props.distance}
            />
        )
    }
}