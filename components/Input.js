import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MinhaDiv from './MinhaDiv';

export default class Input extends Component{

    state = {
        task:''
    }

    changeState(evt){
        this.state.task = evt.target.value
        this.setState({task:evt.target.value})
    }

    render(){
        return(
            <form>
                <MinhaDiv class="form-group mb-2">
                    <label>To do..</label>
                    <input class = "form-control" type="text" placeholder="Insert a new to do for you" onChange={this.changeState.bind(this)}/>
                </MinhaDiv>
                <button type="submit" class="btn btn-light" onClick={this.props.callbackFromParent.bind(this,this.state.task)}>Send me</button>
            </form>
        );
    }
}