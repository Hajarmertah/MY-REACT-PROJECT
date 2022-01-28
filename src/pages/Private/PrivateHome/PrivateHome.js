import React from 'react'
import cat from "./cat.gif"
import {Link} from 'react-router-dom'

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="h1">
        Les Entreprises
      </h1>
      <div>
      <Link to={{pathname: "/BarChart"}} className='display-5 text-light mb-4'>Entreprise 1</Link>
      </div>
      <div>
      <Link to={{pathname: "/BarChart2"}} className='display-5 text-light mb-4'>Entreprise 2</Link>
      </div>
      <div>
      <Link to={{pathname: "/BarChart3"}} className='display-5 text-light mb-4'>Entreprise 3</Link>
      </div>
      <div>
      <Link to={{pathname: "/BarChart4"}} className='display-5 text-light mb-4'>Entreprise 4</Link>
      </div>
      <div>
      <Link to={{pathname: "/BarChart5"}} className='display-5 text-light mb-4'>Entreprise 5</Link>
      </div>

       
    </div>
  )
}