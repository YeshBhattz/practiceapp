import React, { useState } from 'react'

export default function About() {
    const [btn,text] = useState('Dark Mode')
    const [style,newStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    })
    const handleDark = () =>{
        if(style.color=='white'){
            newStyle({
                color: 'black',
                backgroundColor: 'white' 
            })
            text('Dark Mode')
        }else{
            newStyle({
                color: 'white',
                backgroundColor: 'black' ,
                border: '2px solid white'
            })
            text('Light Mode')
        }
    }
    
  return (
    <div className='container my-5' style={style}>
        <h1>About Us</h1>

        <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
            </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={style}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
            </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={style}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
            </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={style}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        </div>
        <button className='btn btn-primary my-2' onClick={handleDark}>{btn}</button>
    </div>
  )
}
