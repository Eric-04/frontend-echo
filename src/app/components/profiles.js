import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function profiles({Leaderboard}) {

    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/profiles')
        .then(profiles => setProfiles(profiles.data))
        .catch(err => console.log(err))
    }, [])

    Leaderboard = sort(Leaderboard.concat(profiles))

    return (
        <div id = "profile">
            {Item(Leaderboard)}
        </div>
    )
}

function Item(data) {
    return (
        <>
            {
                data.map((value,index) => (
                    <div className = "flex" key = {index}>
                        <div className = "item">
                            <img src = {ImgScroll()}></img>
                            <div className = "info">
                                <h3 className = "name text-dark">{value.name}</h3>
                                <span>{value.location}</span>
                            </div>
                        </div>
                        <div className = "item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                ))
            }
        </>

        
    )
}

function ImgScroll() {
    return "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
}

function sort(data) {
    return data.sort((a,b) => {
        if (a.score === b.score) {
            return a.date - b.date;
        }
        return b.score-a.score;
    })
}