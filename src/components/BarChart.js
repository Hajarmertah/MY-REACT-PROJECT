import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import './comp.css';


class Barchart extends React.Component{
    state={
        post: {}
    }

    componentDidMount(){
        fetch('/posts')
        .then((res)=>{
            return res.json();
        })
        .then((result)=>{
            var x={post: result}
            console.log(result)
            var s=this.setState(x)
            console.log(s)
        })
    }
    
render(){

    const data=[
        
    ]

    return( 
        <>
             <h1 className="h1">Diagramme représantant la valeur de l'entreprise X cette année</h1>
               
            <div className="graph">
                <BarChart width={1000} height={600} data={data}>
                    <Bar dataKey="valeur" fill="green" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="mois" />
                    <YAxis />
                </BarChart>
            </div>
            <div>  </div>
        </>
    )
}
}
export default Barchart