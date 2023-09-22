import React from 'react'
import Profiles from './profiles.js'
import { Leaderboard } from './database.js'
import Form from './form.js'

export default function Board() {
    return (
        <div className = "board">
            <h1 className = "leaderboard">Leaderboard</h1>
            <Form></Form>
            <Profiles Leaderboard = {Leaderboard}></Profiles>
        </div>
    )
}