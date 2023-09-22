import React from 'react'
import { useState } from 'react'
import axios from "axios";

export default function form() {

    const [username, setUsername] = useState('')
    const [score, setScore] = useState(0)
    const [date, setDate] = useState(new Date())
    const [pic, setPic] = useState("1")

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8080/profiles', {
            name : username,
            score : score,
            submitDate : date,
            picOption : pic
        })

        window.location.reload();
       
    }

    return (
        <div className="createform">
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text"
                    required
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label>Score:</label>
                <input
                    type="number"
                    required
                    value = {score}
                    onChange={(e) => setScore(e.target.value)}>
                </input>
                <label>Date:</label>
                <input 
                    type="date" 
                    required
                    value = {date}
                    onChange = {(e) => setDate(e.target.value)}
                >
                </input>
                <label>Choose a Profile Pic:</label>
                <select
                    value={pic}
                    onChange={(e) => setPic(e.target.value)}
                >
                    <option value="1"> Pic 1 </option>
                    <option value="2"> Pic 2 </option>
                    <option value="3"> Pic 3 </option>
                </select>
                <button> SUBMIT </button>
    
            </form>
        </div>
    )
}