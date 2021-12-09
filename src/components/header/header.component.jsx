import React from 'react'
import SelectDifficulty from '../difficulty/difficulty.component'
import './header.styles.scss'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='difficulty-text'>Select the difficulty:</h1>
            <SelectDifficulty />
        </div>
    )
}

export default Header
