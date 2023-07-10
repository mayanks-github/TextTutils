import React, {useState} from "react"

export default function TextForm(props){
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </div>
    )
}