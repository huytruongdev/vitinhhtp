import { CircularProgress } from '@mui/material'
import React from 'react'
import './Loader.scss'

const Loader = () => {
    return (
        <div className='loader-container'>
            <CircularProgress size="10rem" />
        </div>
    )
}

export default Loader