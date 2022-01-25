import React, { useState } from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import './comp.css';


  
const Barchart=() => {
    const data = [
        {mois:'Janvier', valeur: '155'},
        {mois:'Février', valeur: '206'},
        {mois:'Mars', valeur: '250.6'},
        {mois:'Avril', valeur: '300'},
        {mois:'Mai', valeur: '314.6'},
        {mois:'Juin', valeur: '299.2'},
        {mois:'Juillet', valeur: '265.3'},
        {mois:'Aout', valeur: '322'},
        {mois:'Septembre', valeur: '389.5'},
        {mois:'Octobre', valeur: '265'},
        {mois:'Novembre', valeur: '234'},
        {mois:'Décembre', valeur: '306.2'}

      ];
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
        </>
    )
}

export default Barchart