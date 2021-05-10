import React,{Component} from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css'
class App extends Component{
  state = {
    userNameArray:[
      {userName:"Anil"},
      {userName:"Sunil"},
      {userName:"Altaf"}
    ]
  }

  changeUserName = ()=>{
    this.setState({
      userNameArray:[
        {userName:"Anil Madli"},
        {userName:"Sunil Kusugal"},
        {userName:"Altaf Yadawad"}
      ]
    })
  }

  changeUserNameFromInput = (event)=>{
    this.setState({
      userNameArray:[
      {userName:event.target.value},
      {userName:"Sunil Kusugal"},
      {userName:"Altaf Yadawad"}
    ]}
    )
  }
  

  render(){
    return(
      <div>
        <button onClick={this.changeUserName}>Click To Change the state</button>
        <UserInput click={this.changeUserNameFromInput} userName={this.state.userNameArray[0].userName}/>
        <UserOutput userName={this.state.userNameArray[0].userName}/>
        <UserOutput userName={this.state.userNameArray[1].userName}/>
        <UserOutput userName={this.state.userNameArray[2].userName}/>
      </div>
    )
  }
}
export  default App;