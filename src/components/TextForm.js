import React, {useState} from "react";

export default function TextForm(props){
    const [text, setText] = useState("Enter New Text")
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }
    return(
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn primary" onClick={handleClick}>Convert to uppercase</button>
        </div>
        <div className="container mb-3">
            <h1>Your Text</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        

    )
}