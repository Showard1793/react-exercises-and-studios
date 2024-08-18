import React from 'react'
import classes from './HobbyList.module.css'

export default function HobbyLinks(){
    let hobbyLinks = ["https://www.upperlimits.com/","https://www.youtube.com/@JackYoungDrums/playlists"]
    return (
        <div className={classes.div}>
            <h3 className={classes.h2}>Hobbies</h3>
            <p className={classes.p}>
                <a href = {hobbyLinks[0]}>Rock Climbing</a>
                <br></br>
                <a href = {hobbyLinks[1]}>Drumming</a>  
            </p>
           
        </div>
    )
}