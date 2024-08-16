import React, {useState} from 'react';
import Alert from './Alert';

export default function About() {

    const[myStyle, setStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const[buttonState, setButtonState] = useState("Enable Dark mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setStyle({
                color: 'black',
        backgroundColor: 'white'
            })
        
            setButtonState("Enter Dark mode")
            showAlert("white mode shown", "Warning")
        }else {

            setStyle({
                color: 'white',
        backgroundColor: 'black'
            })
            setButtonState("Enter Light mode")
            showAlert("dark mode shown", "success")
        }
    }

    const[alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      }
      )
    }
    

  return (
  <>
    <div className='container'>
      <Alert alert={alert}/>
    </div>
    <div className="container" style={myStyle}>
        <h1 className='my-3'> About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className='container my-3'>
<button className="btn btn-primary" onClick= {toggleStyle} type="button">{buttonState}</button>
</div>
    </div>
    </>
  )
}
