import React, { useState, useEffect } from 'react';
import "../css/style.css";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link } from "react-router-dom";


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="submit"
      style={{  background: 'rgb(67, 67, 222)', color: '#fff',  width: '133.58px', height: '37.11', }}
      onClick={decoratedOnClick}
      className='btn-7'
    >
      {children}
    </button>
  );
}

function Formtwo() {

  const [isMenuOpen, setMenuOpen]  = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    const toggleTheme = () => {
        if (theme === "dark-theme"){
            setTheme('light-theme')
        }
        else {
            setTheme ("dark-theme")
        }
    };


    const [theme, setTheme] = useState("theme");

    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

  return (
    <>
      
      <div className='form-data'>



      <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div class="imgic">
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<img src="/images/Vector.png" onClick={toggleMenu}/>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu}/>

<div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div>

</div>

<div >

<div id='sidemenu'  style={{
  width: '220px',
  display: isMenuOpen ? 'none' : 'block',
  // flex: isMenuOpen ? 1 : 0,
}}
>

<h2>Homes</h2>
<img src="/images/Layer 1.png" />
<div className='sideline'>
<ul>
<li>
  <a href="#" > <i class="fa fa-question-circle-o" aria-hidden="true"></i> Dashboard </a> 
</li>
<li>
 <a href="#" > <i class="fa fa-camera-retro" aria-hidden="true"></i>  Customization </a> 
</li>
<li>
 <a href="#" > <i class="fa fa-question-circle-o" aria-hidden="true"></i> Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-camera-retro" aria-hidden="true"></i>  Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-question-circle-o" aria-hidden="true"></i>  Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-camera-retro" aria-hidden="true"></i>  Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-question-circle-o" aria-hidden="true"></i> Dashboard</a> 
</li>
</ul>
</div>
</div>

</div>

</div>






        <div className='Acc-from'>
        <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                            </form>
                        </div>
                        <ul>
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                        <div className='text'>
                        <label className="switchh">
                     <input type="checkbox"  onClick={() => toggleTheme()} />
                     <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>

                        </ul>
                       
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>
        <Accordion defaultActiveKey="0">
          <div className='first-accordian'>
      <Accordion.Item eventKey="0">
      <div className='Accitem'>
        <Accordion.Header>Accordion Item #1</Accordion.Header>


        <Accordion.Body>
                <div className='form-head'>
                <h2> Legal, Compliance, Contract, Acknowledgment, and Work Authorization Foam:</h2>
                   <button>Customize</button>
             </div>

     <div id="carouselExampleControls"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Document Type</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Document Number</label>
                <input type="number" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Expiry Date</label>
                <input type="date" className="form-control" id="input1" name="input1" required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Issuing Authority</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Legal Status</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

    </div>
</div>



<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>

</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Document Type</th>
      <td>String</td>
      <td>NAME</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Document Number</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Expiry Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Issuing Authority</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Legal Status</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
        </Accordion.Body>


        </div>
      </Accordion.Item>
      </div>

    <div className='middle-accordian'>
      <Accordion.Item eventKey="1">
      <div className='Accitem'>
        <Accordion.Header>Accordion Item #2</Accordion.Header>


        <Accordion.Body>
                <div className='form-head'>
                <h2> Consent & Authorization Form Table:</h2>
                   <button>Customize</button>
             </div>

     <div id="carouselExampleControlss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Form Type</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Date Signed</label>
                <input type="date" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Description </label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Signature</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">IP Address</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

    </div>
</div>



<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>

</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Form Type</th>
      <td>String</td>
      <td>NAME</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Date Signed</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Description</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Signature</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">IP Address</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
        </Accordion.Body>

      
        </div>
      </Accordion.Item>
      </div>

      <div className='last-accordian'>
      <Accordion.Item eventKey="2">
      <div className='Accitem'>
        <Accordion.Header> Accordion Item 3</Accordion.Header>



        <Accordion.Body>
                <div className='form-head'>
                <h2> Document Control Table:</h2>
                   <button>Customize</button>
             </div>

     <div id="carouselExampleControlsss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Document Type</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Document Name</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Upload Date </label>
                <input type="date" className="form-control" id="input1" name="input1" required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">File</label>
                <input type="text" className="form-control" id="input2" name="input2"  required />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Document Version</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

    </div>
</div>



<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>

</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Document Type</th>
      <td>String</td>
      <td>NAME</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Document Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Upload Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">File</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Document Version</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
                                </Accordion.Body>

       
        </div>
      </Accordion.Item>
      </div>
    </Accordion>

    </div>

    
      
    </div>

     
    </>
  )
}

export default Formtwo;
