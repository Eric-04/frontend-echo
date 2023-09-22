import React from 'react'
import Profiles from './profiles.js'
import { Leaderboard } from './database.js'
import Form from './form.js'

export default function Board() {
    return (
        <div className = "board">
            <h1 className = "leaderboard">Leaderboard</h1>
            <vstack>
                <h4> Enter Your Own Score Here! </h4>
                <h4> Scroll Down for Other Scores! (sorted from highest to lowest) </h4>
            </vstack>
            <Form></Form>
            <Profiles Leaderboard = {Leaderboard}></Profiles>
        </div>
    )
}