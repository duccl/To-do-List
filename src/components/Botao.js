import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Botao extends Component{
    render(){
        return(
            <button value={this.props.text} type = "button" id={`${this.props.text}Id`} class="btn" onClick={this.props.click}>{this.props.text}</button>
        );
    }
}