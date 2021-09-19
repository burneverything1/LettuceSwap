import React, { useState, useEffect } from 'react'
import LocDisplay from './LocationDisplay'
import EnvironDisplay from './EnvironDisplay'

import statService from '../../services/statistic'
import locationService from '../../services/location'

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

    const refreshAll = () => {
        refreshStats()
        getLocations()
    }

    useEffect(() => {
        refreshAll()
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
                    <td colspan="2">
                        <EnvironDisplay totalSales={stats.totalSales}/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <LocDisplay locations={locations}/>
                    </td>
                </tr>
            </table>
            <br/>
            <button onClick={refreshAll}>Refresh Stats</button>
        </div>
    )
}


export default StatsDisplay