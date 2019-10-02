import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Task extends Component{
    
    constructor(props){
        super(props)
        alert(props.tasks)
        this.state = {
            tasks:props.tasks
        }
    }

    changeStateTask(index){
        this.state.tasks.splice(index,1)
        this.setState({tasks:this.state.tasks})
    }

    addNewTask(){
        this.setState({tasks:this.props.tasks})
    }

    render(){
        return(
            <div class="list-group">
                {this.state.tasks.map((valor,chave)=>{
                    return <button type="button" 
                        class="list-group-item list-group-item-action" 
                        key={chave} 
                        onClick={this.changeStateTask.bind(this,chave)}>{valor}</button>
                })}
            </div>
        );
    }
}