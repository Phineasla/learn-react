import React, { Component } from 'react';

class TodoList extends Component {
    // state = {  }
    render() { 
        return (
            <ul className="todoList">
                <li className="checked">Sleep</li>
                <li>Code</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>
        );
    }
}
 
export default TodoList;