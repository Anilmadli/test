import React, {Component} from 'react';

class UserInput extends Component{
    render(){
        return(
            <div>
                <input type="text" onChange={this.props.click} value={this.props.userName}/>
            </div>
        )
    }
}
export default  UserInput;