import React, { useState } from 'react'

// console.log(useState('Enter Your Text here2'))
export default function TextForm(props) {

    // for uppercase
    const handleUpClick = () => {
        console.log("Uppercase was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    // for lowercase
    const handleLoClick = () => {
        console.log("Lowercase was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    // for Capitalcase
    const handleCpClick = () => {
        console.log("Capitlizecase was Clicked" + text);
        // let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

        let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
    };

    /// for ClearAll
    const handleClearAllClick = () => {
        console.log("Clear All " + text)
        let newText = '';
        setText(newText)
    }

    //// for CopyText
    const handleCopy = () => {
        console.log("Copied!");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    //// for remove extra space
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    //// For Urdu Text
    const handleUrduClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter your Text here');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>

                <button className="btn btn-primary my-3" onClick={handleUpClick}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Covert to Lowercase</button>
                <button className="btn btn-primary my-3" onClick={handleCpClick}>Covert to Capitlizecase</button>
                {/* <button className="btn btn-primary mx-3" onClick={handleUrduClick}>Covert to Urdu</button> */}
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Click To Copy</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-3" onClick={handleClearAllClick}>ClearAll</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Charecter</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write Something to Preview....."}</p>
            </div>
        </>
    )
}
