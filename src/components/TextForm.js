import React,{useState} from 'react'

export default function TextForm(event) {
    const [text, setText] = useState("");
    const handleOnChange =(event)=> {
        console.log("Changed")
        setText(event.target.value)

    }
    const UpCase =()=>{
        console.log("UP Clicked!")
        setText(text.toUpperCase())
    } 
    const LowCase =()=>{
        console.log("LOW Clicked!")
        setText(text.toLowerCase())
    } 
    return (
    <div className='container'>
        <div className="container">
            <div className="mb-3">
            <label htmlFor="MyText" className="form-label">TextArea below: </label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="MyText" rows="8" ></textarea>
            <button className="btn btn-primary my-3" onClick={UpCase}>Upper Case</button>
            <button className="btn btn-secondary my-3 mx-3" onClick={LowCase}>Lower Case</button>
            </div>
        </div>
        <div className="container my-3">
            <h1>Text Summary: </h1>
            <p>{text.length} char, {text.split(" ").length} words, Reading Time: {text.split(" ").length * 0.008} min </p>
        </div>
        <h3>Preview: </h3>
        <p className='paragraph my-4'>{text}</p>
    </div>
  )
}
