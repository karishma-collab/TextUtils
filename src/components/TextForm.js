import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To uppercase!","success")
  } 
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text );
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To lowercase!","success")
  } 
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text );
    let newText = ("")
    setText(newText)
    props.showAlert("Text Cleared!","success")
  } 
  const handleSpaceClick = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText);
  props.showAlert("Spacing done!","success")
  }
  const handleOnChange = (event)=>{
    // console.log("on Change");
    setText(event.target.value);
  }
    const {
    heading = "typee here"
  } = props;
  
  const [text, setText] = useState("");
  return (
    <>
    <div className ="container" style={{color:props.mode==='dark'?'white':'#1e1e29'}}>
        <h4>{heading}</h4>
        <div className="mb-3">
          <textarea className="form-control"  value= {text} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#1e1e29' }} onChange={handleOnChange} id="myBox" rows="8">
          </textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-info mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-info mx-1" onClick={handleSpaceClick}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3" style={ {color:props.mode==='dark'?'white':'#1e1e29'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length }Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here" }</p>
    </div>
    </>
  )
}
