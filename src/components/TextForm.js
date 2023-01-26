import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("onclick" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = ()=>{
        // console.log("onclick" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearClick = ()=>{
        // console.log("onclick" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success")
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("onchange")
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color: props.mode==='dark'?'white':'#042743' }}
                id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extraspace</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something To Preview It Here"}</p>
        </div>
        </>
    )
}
