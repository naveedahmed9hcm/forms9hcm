import React,  { useState, useEffect } from 'react';
import "../css/style.css";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link, useNavigate } from "react-router-dom";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
    );

    return (
        <button
        type="submit"
        style={{  background: 'rgb(67, 67, 222)', color: '#fff',  width: '133.58px', height: '37.11',}}
        onClick={decoratedOnClick}  
        radius= '5px'
        >
            {children}
        </button>
    );
}

function Form() {


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

    const navigate = useNavigate();

    return (
        
        <>

   <div className='form-data' style={{ display: 'flex', }}>

 <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div class="imgic">
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>

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
  <a href="#" > <i class="fa fa-camera-retro" aria-hidden="true"></i> Dashboard </a> 
</li>
<li>
 <a href="#" > <i class="fa fa-question-circle-o" aria-hidden="true"></i> Customization </a> 
</li>
<li>
 <a href="#" > <i class="fa fa-camera-retro" aria-hidden="true"></i> Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-question-circle-o" aria-hidden="true"></i> Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-camera-retro" aria-hidden="true"></i>  Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-question-circle-o" aria-hidden="true"></i> Dashboard</a> 
</li>
<li>
 <a href="#" > <i class="fa fa-camera-retro" aria-hidden="true"></i> Dashboard</a> 
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
                                        <h2> Skill Records & Competence Form </h2>
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
                <label htmlFor="input1">Skill Name</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Proficiency Level</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Certification</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Certification Date</label>
                <input type="date" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Training/Certification Provider</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Skill Assessment Scores</label>
                <input type="number" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Skill Description</label>
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
      <th scope="col" >Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Skill Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Proficiency Level</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Certification</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Certification Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Training/Certification Provider</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Skill Assessment Scores</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Skill Description</th>
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


                        <div className='middle-accordian' id='middle'>
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
                <label htmlFor="input1">Hire Date</label>
                <input type="date" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Employment Status History</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Department </label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Position</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Probationary Period Details </label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Manegar/Supervisor</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Employment Status.</label>
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
      <th scope="row">Hire Date</th>
      <td>String</td>
      <td>NAME</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Employment Status History</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Department</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Position </th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Probationary Period Details</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Manegar/Supervisor</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>


    <tr>
      <th scope="row">Employment Status</th>
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
                <h2> Benefits and Compensation  Table:</h2>
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
                <label htmlFor="input1">Benefit Type</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Compensation Type </label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Amount  </label>
                <input type="number" className="form-control" id="input1" name="input1" required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Start Date</label>
                <input type="date" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">End Date  </label>
                <input type="date" className="form-control" id="input1" name="input1" required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Tex Deductions</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Compensation Components</label>
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
      <th scope="row">Benefit Type</th>
      <td>String</td>
      <td>NAME</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Compensation Type</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Amount</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Start Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">End Date</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Tax Deductions</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Compensation Components</th>
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
    <button className='btn-1' onClick={() => navigate("/Formtwo")}> Next </button>
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

export default Form;