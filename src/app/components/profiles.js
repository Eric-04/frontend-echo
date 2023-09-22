import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function profiles({Leaderboard}) {

    // gets all profiles in MongoDB
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/profiles')
        .then(profiles => setProfiles(profiles.data))
        .catch(err => console.log(err))
    }, [])

    // adds it to leaderboard and sorts by score, then date
    Leaderboard = sort(Leaderboard.concat(profiles))
    // if there are more than 10 scores, delete from the bottom
    while (Leaderboard.length > 10) {
        Leaderboard.pop()
    }

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
                            <img src = {ImgScroll(value.pic)}></img>
                            <div className = "info">
                                <h3 className = "name text-dark">{value.name}</h3>
                                <span>{value.submitDate}</span>
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

function ImgScroll(num) {
    if (num === "1") {
        return "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    }
    if (num === "2") {
        return "https://media.istockphoto.com/id/1333080674/vector/user-icon-for-web-and-mobile.jpg?s=612x612&w=0&k=20&c=UI0y5X_Mhn7IJKBSES-kjxhWYkkv2aQqIFTnzj_VWgc="
    }
    return "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
    
}

function sort(data) {
    return data.sort((a,b) => {
        if (a.score === b.score) {
            return a.date - b.date;
        }
        return b.score-a.score;
    })
}