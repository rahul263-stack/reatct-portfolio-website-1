import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className='experience__fullstack'>
          <h3>Full-Stack Development</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
            </article>
         
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
            </article>
          

          <article className='experience__details'>
            <BsPatchCheckFill  />
            <div>
            <h4>React Js</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
            </article>
         

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>Intermidiated</small>
            </div>
            </article>
        

          <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icons'/>
           <div>
           <h4>Git</h4>
           <small className='text-light'>Intermidiate</small>
           </div>
           </article>

           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Heroku</h4>
            <small className='text-light'>Intermidiated</small>
            </div>
            </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermidiated</small>
            </div>
            </article>


         
          </div>
          </div>
        
        {/*end of full stack */}
        
        <div className='experience__datascience'>
          <h3>Data Science</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>ML</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
            </article>
         
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Statistics</h4>
            <small className='text-light'>Intermidiate</small>
            </div>
            </article>
          

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>TensorFlow</h4>
            <small className='text-light'>Intermidiate</small>
            </div>

            </article>
         

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Docker</h4>
            <small className='text-light'>Intermidiated</small>
            </div>
            </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Django</h4>
            <small className='text-light'>Intermidiated</small>
            </div>
            </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Intermidiated</small>
            </div>
            </article>
        

           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icons'/>
           <div>
             <h4>NLP/ComputerVision</h4>
           <small className='text-light'>Intermidiate</small>
           </div>
           </article>
          
          </div>
          </div> 
        </div>
        

        
    </section>
  )
}

export default experience