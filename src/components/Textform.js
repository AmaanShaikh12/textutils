import React,{useState} from 'react'

export default function Textform(props) {
  const [text,setText]=useState('Enter text here');
  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("converted to uppercase","success");
  }
  const handlelowclick=()=>{
    console.log('Lowercase button clicked');
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lowercse","success");
  }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const handleclear=(event)=>{
    setText(event.target.value="")
    console.log("text is cleared");
    props.showalert("text cleared","success");
  }
  const handleclearspace=()=>
  {
    let newtext=text.split(/[ ]+/)
    setText(newtext.join(" "));
    console.log("all the spaces are removed");
    props.showalert("spaces cleared","success");
  }
  const handlecopy=()=>{
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("text copied","success");
  }
  
  //text="new text";//wrong way to change the state
  // setText("new text");//correct way to set text
  return (
    <>
    <div>
      <h1 style={{color:props.mode==='light'?'grey':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange ={handleOnChange} style={{backgroundColor:props.mode==='light'?'grey':'white',color:props.mode==='light'?'white':'grey'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick} >Covert to Uppercase</button>
      <button className="btn btn-primary my-1" onClick={handlelowclick}>convert to lowercase</button>
      <button className="btn btn-primary mx-3 my-1" onClick={handleclear}>clear text</button>
      <button className="btn btn-primary my-1" onClick={handleclearspace}>clear space</button>
      <button className="btn btn-primary mx-3 my-1" onClick={handlecopy}>copy text</button>
    </div>
    <div className="container my-3">
      <h1 style={{color:props.mode==='light'?'grey':'white'}}>Your text summary</h1>
      <p style={{color:props.mode==='light'?'grey':'white'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
      <p style={{color:props.mode==='light'?'grey':'white'}}>{0.008*text.split(" ").length} minutes to read</p>
      <h2 style={{color:props.mode==='light'?'grey':'white'}}>Preview</h2>
      <p style={{color:props.mode==='light'?'grey':'white'}}>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  );
}
