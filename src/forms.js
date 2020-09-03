import React, { useState } from 'react';
import '../src/style.css';

const Forms = () => {

    const [size_of_heard, setSize_of_heard] = useState('')
    const [Mastitis_prevalence_value, setMastitis_prevalence_value] = useState('51.7')
    const [Culling_rate, setCulling_rate] = useState('5')
    const [Nis, setNis] = useState(2)
    const [answer, setAnswer] = useState('')

    const handleSubmit = (event) => {
        calculator()
        event.preventDefault()
        
    }

    const calculator = () =>{
        const infected_cows = Math.round((Mastitis_prevalence_value / 100) * size_of_heard);
        const culled_cows = Math.round((Culling_rate /100) * size_of_heard);
        const liters_lost_to_infection = infected_cows * 3.4 * 150;
        const potential_lose = liters_lost_to_infection * Nis;
        const total_cull = culled_cows * 8000;
        const total_loss = total_cull + potential_lose;
        const applicators_needed = Math.round(infected_cows / 60);
        const total_applicators_cost = applicators_needed * 9000;
        const total_farmer_investment = total_applicators_cost + 50000;
        const reduction_of_losses =  total_loss * 0.7;
        const new_total_loss = total_loss - reduction_of_losses + total_farmer_investment;
        setAnswer(total_loss - new_total_loss)
        return total_loss - new_total_loss
    }

    const handleHeard = (event) => {
        setSize_of_heard(event.target.value)
    }

    const handleMasti = (event) =>{
        setMastitis_prevalence_value(event.target.value)
    }

    const handleCull = (event) =>{
        setCulling_rate(event.target.value)
    }

    const handleNis = (event) =>{
        setNis(event.target.value)
    }

    return(
        <div>
            <form className="forms">
                <div >
                    <label className="label">Size of herd</label><br/>
                    <input className="herd" type='text' value={size_of_heard} name='Heard_size' onChange={handleHeard} required/><br/>
                    <label className="label">Mastitis prevalence value</label><br/>
                    <input className="mast" type='text' value={Mastitis_prevalence_value} name='Mastisis' onChange={handleMasti} required/>
                    <label>%</label><br/>
                    <label className="label">Culling rate</label><br/>
                    <input className="cull" type='text' value={Culling_rate} name='Culling'  onChange={handleCull} required/>                    
                    <label>%</label><br/>
                    <label className="label">NIS/liter Milk ratio </label><br/>
                    <input className="nis" type='text' value={Nis} name='Money'  onChange={handleNis} required/><br/>
                    <button className="submit" type='submit' onClick={handleSubmit}>Submit</button>
                </div>    
            </form>
            <div className="answer">
                {answer.toLocaleString()}
            </div>
        </div>
    )
}

export default Forms;
