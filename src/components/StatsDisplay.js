import React, { useState, useEffect } from 'react'
import LocDisplay from './LocationDisplay'
import statService from '../services/statistic'
import locationService from '../services/location'

const StatsDisplay = () => {
    const [stats, setStats] = useState([])
    const [locations, setLocations] = useState([])

    const refreshStats = () => {
        statService
            .getStats()
            .then(statsData => {
                setStats(statsData)
            })
    }

    const getLocations = () => {
        locationService
            .getLocations()
            .then(locationData => {
                setLocations(locationData)
            })
    }

    useEffect(() => {
        refreshStats()
        getLocations()
    }, [])

    return (
        <div>
            <h2>Market Statistics</h2>
            <table>
                <tr>
                    <th>Total Sales:</th>
                    <td>{stats.totalSales}</td>
                </tr>
                <tr>
                    <th>Total Asks:</th>
                    <td>{stats.totalAsks}</td>
                </tr>
                <tr>
                    <th>Total Bids:</th>
                    <td>{stats.totalBids}</td>
                </tr>
                <tr>
                <LocDisplay locations={locations}/>
                </tr>
            </table>
            <button onClick={refreshStats}>Refresh Stats</button>
        </div>
    )
}


export default StatsDisplay