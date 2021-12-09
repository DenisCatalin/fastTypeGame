import React, {useState} from 'react'
import SelectDifficulty from '../difficulty/difficulty.component'
import './header.styles.scss'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='header'>
            <h1 className='difficulty-text'>Select the difficulty:</h1>
            <SelectDifficulty />
            <button className="question" onClick={() => setToggle(!toggle)}>?</button>
            <div className="how-to-play" style={{display: toggle ? 'initial' : 'none'}}>
                <h1>• You will have to type the words provided as fast as you can in the box below.</h1>
                <h1>• If the time goes to 0 the game will be over.</h1>
                <br/><br/><br/><br/>
                <h1>• Increasing seconds by difficulty:</h1>
                <br/>
                <h2>+4 seconds for every matched word in EASY mode</h2>
                <h2>+2 seconds for every matched word in MEDIUM mode</h2>
                <h2>+1 second for every matched word in HARD mode</h2>
            </div>
        </div>
    )
}

export default Header
