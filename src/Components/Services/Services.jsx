import React from 'react'
import './Services.css'
import Services_Data from '../../assets/service_data.js'

const Services = () => {
  return (
    <div>
      <div id='services' className="services">
        <div className="services-title">
          <h1>My Services</h1>
         
        </div>
        <div className="service-container">
         {Services_Data.map((Service,index)=>{
          return <div key={index} className="services-format">
            <h3>{Service.s_no}</h3>
            <h2>{Service.s_name}</h2>
            <p>{Service.s_desc}</p>
          </div>
         })}
        </div>
      </div>
    </div>
  )
}

export default Services
