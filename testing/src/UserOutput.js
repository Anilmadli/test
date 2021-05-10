import React,{Component} from 'react';

class UserOutput extends Component{
    render(){
        return(
            <div>
                <p>My Name Is {this.props.userName}</p>
                <p>I am an Engineer</p>
            </div>
        )
    }
}

export default UserOutput;