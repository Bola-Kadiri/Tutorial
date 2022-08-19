import React from 'react'
import img1 from '../Images/bg-2.png'
import img2 from '../Images/img-3.jpg'
import './Projects.css'

const Projects = () => {
  return (
    <div className='project'>
    <div className='projects-container'>
        <div className='first-project'>
           <div className='left-project'>
              <h3>UI/UX DESIGNER</h3>
              <h1>Hello, my name is Madelyn Torff</h1>
              <p>Short text with details about you, what you do or your professional career. You can add  more
              information on the about page
              </p>
              <button className='project'>Projects</button>
              <button className='linkedin'>LinkedIn</button>
           </div>
           <img src={img1} alt='profile-img' className='img-one'/>
        </div>
       
    </div>
    <div className='project-1'>
    <h1>Projects</h1>
    <div className='content'>
      <div className='project-content'>
        <div className='card-house'>
         <div className='card'>
         <div className='card-item'>
           <h2>Project Name</h2>
           <p>I created this personal project in order to show how to create an interface in Figma using portfolio
              as an example
           </p>
           <button>View Projects</button>
           </div>
         </div>
         <img src={img2} alt='img1'/>
      </div>
      <div className='card-house'>
      <img src={img2}  alt='img1'/>
         <div className='card'>
         <div className='card-item'>
         <h2>Project Name</h2>
         <p>I created this personal project in order to show how to create an interface in Figma using portfolio
            as an example
         </p>
         <button>View Projects</button></div>
         </div>
     </div>
     <div className='card-house'>
         <div className='card'>
         <div className='card-item'>
         <h2>Project Name</h2>
         <p>I created this personal project in order to show how to create an interface in Figma using portfolio
            as an example
         </p>
         <button>View Projects</button>
         </div>
         </div>
         <img src={img2} alt='img1'/>
     </div>
    </div>
    </div>
 </div>
    </div>
  )
}

export default Projects