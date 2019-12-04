import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class MinhaDiv extends Component{
    render(){
        return(
            <div class={this.props.class} id={this.props.id}>{this.props.children}</div>
        );
    }
}