import React, { useState } from 'react'
import Table from './Table';

const Input = () => {
    const [currentValue, setcurrentValue] = useState();
    const [unitOfLength, setunitOfLength] = useState("km");
    return (
    <div>
        <input type="text" onChange={(e) =>{
            const handlecurrentValue = e.target.value
            setcurrentValue(handlecurrentValue);

        }}></input>
        <select onChange={(e) => {
            const selectunitOfLength = e.target.value;
            setunitOfLength(selectunitOfLength);
        }}>
            <option value="km">km</option>
            <option value="hm">hm</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
        </select>
        <input type="submit" value="Build"></input>
        <Table unit={unitOfLength} value={currentValue}/>
    </div>
  )
}

export default Input