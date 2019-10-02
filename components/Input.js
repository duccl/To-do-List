import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Botao from './Botao';
import MinhaDiv from './MinhaDiv';

export default class Input extends Component{

    temp = {
        tasks:this.props.lista
    }

    changeState(){
        this.temp.tasks.push("teste")
        this.props.function(this.temp.tasks)
    }

    render(){
        return(
            <form>
                <MinhaDiv class="form-group mb-2">
                    <label>To do..</label>
                    <input class = "form-control" type="text" placeholder="Insert a new to do for you"/>
                </MinhaDiv>
                <button type="submit" class="btn btn-light" onClick={this.changeState.bind(this)}>Send me</button>
            </form>
        );
    }
}