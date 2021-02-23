import React, { useState } from "react";

function Input() {
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault(); //Prevent page reload
        setInput(""); //reset state => clear form
    };

    return (
        <form className="inputBox" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Title..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default Input;
