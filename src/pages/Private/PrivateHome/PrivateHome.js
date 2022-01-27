import React from 'react'
import cat from "./cat.gif"
import {Link} from 'react-router-dom'

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light mb-4">
        Les Entreprises
      </h1>
      <Link to={{pathname: "/BarChart"}} className='display-5 text-light mb-4'>Entreprise X</Link>
       
    </div>
  )
}