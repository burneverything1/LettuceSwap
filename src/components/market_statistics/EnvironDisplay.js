import React from 'react'
import Togglable from '../utility/Togglable'

import EmissionCalc from '../../assets/emission_calc.png'

const EnvironDisplay = ({ totalSales }) => {

    return (
        <p>
            <h3>Estimate on Emissions Saved</h3>
            <Togglable buttonLabel='Learn About This Calculation' closeLabel='Close'>
                <p>Calculation done with rough estimates of 2.6 tCO2e <br/> of emissions per person
                per year for the food system, <br/> producing 355,880 million pounds a year</p>
                <br/>
                <img src={EmissionCalc} style={{width:'200px'}}/>
                <p>((emissions * us population) / total produce) / oz in pound</p>
                <p>Roughly 150 mCO2e per ounce of food</p>
            </Togglable>
            <p style={{fontSize:'20px'}}>{totalSales * 150} mCO2e Emissions Saved</p>
        </p>
    )
}

export default EnvironDisplay