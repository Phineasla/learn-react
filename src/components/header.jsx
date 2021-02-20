import React, { Component } from "react";

class Header extends Component {
    // state = {  }
    render() {
        return (
            <div className="header">
                <h1>To Do List</h1>
                <span className="inputBox">
                    <input type="text" placeholder="Title..." />
                    <button>Add</button>
                    {/* <span onclick="newElement()" className="addBtn">
                        Add
                    </span> */}
                </span>
            </div>
        );
    }
}

export default Header;
