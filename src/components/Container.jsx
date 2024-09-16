import { useState,useEffect } from "react"

function Container({heading, mode, showAlert}) {
const [text, setText] = useState("");
const [copy, setCopy] = useState(false);
const  clickUpHandler = () => {
 if(text){
        let updateUpText = text.toUpperCase();
        setText(updateUpText);
        showAlert('Text uppercase!', 'success')
 }
}
const  clickLoHandler = () => {
 if(text){
    let updateLoText = text.toLowerCase();
    setText(updateLoText); 
    showAlert('Text lowercase!', 'success')
  } 
 }
 const  clickClrHandler = () => {

       let clrText = '';
       setText(clrText); 
       showAlert('Text clear!', 'success')
    }
    const  clickCpyHandler = () => {
      navigator.clipboard.writeText(text);
      setCopy(true); 
      showAlert('Text copied!', 'success')
    
   }
   
   const  clickExtraHandler = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' ')); 
    showAlert('Extra spaces removed', 'success')
  
 }
   useEffect(() => {
    if (copy) {
      const timer = setTimeout(() => setCopy(false), 2000);
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [copy]);

const Handler = (e) => {
    setText(e.target.value);
} 
 return (
 <>
<div className="input-group mb-3  mt-3 w-10 g-col-6" style={{color : mode ==="dark"?'white':'black'}}>
  <h2 className="input-group">{heading}</h2>
  <textarea className="form-control " id='myBox'onChange={Handler} value={text} rows={8}  aria-label="With textarea"></textarea>
</div>
<div>
<button disabled={text.length ===0} onClick={clickUpHandler} type="button" className="btn my-2 mx-2 btn-primary">Text Uppercase</button>

<button disabled={text.length ===0} onClick={clickLoHandler} type="button" className="btn btn-primary">Text Lowercase</button>
<button disabled={text.length ===0}onClick={clickClrHandler} type="button" className="btn btn-primary mx-2">Clear Text</button>
<button disabled={text.length ===0} onClick={clickCpyHandler} type="button" text={text} className="btn btn-primary mx-2">Copy Text</button>
<button disabled={text.length ===0} onClick={clickExtraHandler} type="button" text={text} className="btn btn-primary mx-2">Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color : mode ==="dark"?'white': 'black'}}>
<p>Words: {text ? text.split(/\s+/).filter((word) => word !== "").length : 0}, Characters: {text.length}</p>
<p> {text ? text.split(" ").filter((word) => word !== "").length * 0.008 : 0} Minetes read</p>
</div>
<div style={{color : mode ==="dark"?'white': 'black'}}>
<h2>Preview</h2>
<p>{text.length>0?text : "Nothing to preview!"}</p>
</div>
</>
  )
}

export default Container;