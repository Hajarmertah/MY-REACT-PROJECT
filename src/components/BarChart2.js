import React, { useState } from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import './comp.css';

class Barchart2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            post: []
        };
    }
    
        componentDidMount(){
            
            fetch('/posts2')
            .then((res)=>{
                return res.json();
            })
            .then((result)=>{
                this.setState({post: result})
                this.state.post.map((posts,index)=>{
                    console.log(posts.Mois, ":", posts.Valeur, ",", posts._id )
                })
                
               
                })
        }   
        
 render(){
    let empMois=[];
    let empVal=[]
    for (const dataObj of this.state.post.map((posts,index)=>{return (posts)})) {
        empMois.push(dataObj.Mois);
        empVal.push(parseFloat(dataObj.Valeur));
      }
    
    console.log(empVal)


            var data = [
               
                {mois:empMois[0],
                valeur:empVal[0]},
                {mois:empMois[1],
                    valeur:empVal[1]},
                {mois:empMois[2],
                    valeur:empVal[2]},
                {mois:empMois[3],
                    valeur:empVal[3]},
                {mois:empMois[4],
                    valeur:empVal[4]},
                {mois:empMois[5],
                    valeur:empVal[5]},
                {mois:empMois[6],
                    valeur:empVal[6]},
                {mois:empMois[7],
                    valeur:empVal[7]},
                {mois:empMois[8],
                    valeur:empVal[8]},
                {mois:empMois[9],
                    valeur:empVal[9]},
                {mois:empMois[10],
                    valeur:empVal[10]},
                {mois:empMois[11],
                    valeur:empVal[11]},        
              ];
              
              
             
            return( 
                <>
                

                     <h1 className="h1">Diagramme représentant la valeur de l'entreprise X cette année</h1>
                    <div className="graph">
                        <BarChart width={1000} height={550} data={data}>
                            <Bar dataKey= "valeur" fill="green" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="mois" />
                            <YAxis />
                        </BarChart>
                        
                    </div>
                </>
            )
        }
    }
 
export default Barchart2