import React from "react"

export default function BarraPowerstats({ powerstatKey, powerstatValue }) {
       return(
            <>
                <p>{powerstatKey}</p>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${powerstatValue==="null" ? "0" : powerstatValue}%` }} aria-valuenow={`${powerstatValue==="null" ? "0" : powerstatValue}`} aria-valuemin="0" aria-valuemax="100">{`${powerstatValue==="null" ? "0" : powerstatValue}%`}</div>
                </div>
            </>

        )
    }
