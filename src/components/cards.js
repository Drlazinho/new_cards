// eslint-disable-next-line
import React, { useState } from 'react'
import './index.css'
import { Bag, Target, Truck, Factory } from 'phosphor-react'
import api from '../server/api'

export default function Cards(props) {

  function renderSwitch(param) {
    switch(param) {
      case 1 || "1": {
        return <Factory size={32} />
      }
      case 2 || "2": {
        return <Target size={32} />
      }
      case 3 || "3": {
        return <Truck size={32} />
      }
      case 4 || "4": {
        return <Bag size={32} />
      }
    }
  };
  
  return (
    <div>
      <div className="breadcrump" style={{backgroundColor: props.backgroundColor}}>
          <input
            type="checkbox"
            className="checkbox"
            disabled
            checked={props.check} 
          />
          <div className="descriptionBreadcrump">
            {
              <i>{renderSwitch(props.image)}</i>
            }
            <p>{props.stateName}</p>
          </div>          
        </div> 
    </div>
  )
}



