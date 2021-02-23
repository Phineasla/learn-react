import React, { useState } from "react";
import Input from "./Input.jsx";

function Header() {
    return (
        <div className="header">
            <h1>To Do List</h1>
            <Input />
        </div>
    );
}

export default Header;
