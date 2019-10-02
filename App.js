import React,{Component} from 'react';
import NavBar from './components/NavBar';
import MinhaDiv from './components/MinhaDiv';
import './App.css';
import Input from './components/Input';
import nomesNavBar from './components/nomesNavBar';
import tasksList from './components/tasksList';
import Task from './components/Task';


const navNames = nomesNavBar
const tasksNames = tasksList


class App extends Component{

  state = {
    navNames:nomesNavBar,
    tasksNames:tasksList
  }


  changeState(newList){
    this.setState({tasksNames:newList})
  }

  render(){
    return(
      <div>
        <NavBar NavName="To do List" nomesParaNav = {this.state.navNames}/>
        <div class="container">
          <MinhaDiv class="jumbotron" tasks={this.state.tasksNames}>
            <h1 class="display-4">Add a to do</h1>
            <hr class="my-4"/>
            <Input function={this.changeState.bind(this)} lista={this.state.tasksNames}/>
          </MinhaDiv>
          <MinhaDiv class="jumbotron">
            <h1 class="display-4">List of To Do's</h1>
            <hr class="my-4"/>
            <Task tasks = {this.state.tasksNames}/>
          </MinhaDiv>
        </div>
      </div>
    );
  }
}

export default App;