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
                <h4> Scroll Down for Top 10 Scores! </h4>
                <h2> it will be sorted from highest to lowest and only keep the top 10 scores</h2>
            </vstack>
            <Form></Form>
            <Profiles Leaderboard = {Leaderboard}></Profiles>
        </div>
    )
}