import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component { 
    render() {
        return (
            <div>welcome to redux-todolist</div>
        )
    }
}

ReactDOM.render(
    <Test />,
    document.querySelector('#root')
)