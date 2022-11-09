// eslint-disable-next-line
import React, { useState } from 'react'
import './index.css'
import { Bag } from 'phosphor-react'
import api from '../server/api'

export default function Cards(props) {

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
          <Bag size={32} />
            <p>{props.stateName}</p>
          </div>          
        </div> 
    </div>
  )
}
