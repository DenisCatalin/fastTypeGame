import React, {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux';
import { selectDifficultyLevel } from '../../redux/difficulty/difficulty.selector';
import './form.styles.scss'

const Form = () => {

    const difficultyLevel = useSelector(selectDifficultyLevel);

    const [currentWord, setCurrentWord] = useState();
    const [inputWord, setInputWord] = useState();
    const [time, setTime] = useState(10);
    const [rounds, setRounds] = useState(0);
    const [isRendering, setIsRendering] = useState(true);
    const [countStart, setCountStart] = useState(4);

    const inputRef = useRef(null);

    function increaseSeconds(level) {
        switch(level) {
            case 'EASY': setTime(prevCount => prevCount + 4); break;
            case 'MEDIUM': setTime(prevCount => prevCount + 2); break;
            case 'HARD': setTime(prevCount => prevCount + 1); break;
            default: setTime(prevCount => prevCount + 1); break;
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if(time > 0 && countStart === 0) setTime(prevCount => prevCount - 1);    
            if(time === 0) {
                clearInterval(timer);
                setIsRendering(false);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [time, countStart]);

    useEffect(() => {
        const timer = setInterval(() => {
            if(countStart > 0) setCountStart(prevCount => prevCount - 1); 
            if(countStart === 0) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, [countStart]);

    useEffect(() => {
        if(countStart === 0) inputRef.current.focus();
        (async function getWord() {
            if(inputWord === currentWord) {
                const res = await fetch('https://random-word-api.herokuapp.com/word?number=1');
                const data = await res.json();
                setCurrentWord(data[0]);
                setRounds(r => r+1);
                if(countStart === 0) inputRef.current.value = '';
                if(rounds >= 1) increaseSeconds(difficultyLevel);
            }
        })()
    }, [inputWord, currentWord, difficultyLevel, countStart]);

    return (
        <div className='form-wrapper'>
            {isRendering ? 
                countStart > 0 ?
                <> 
                    <div className="game-over">
                        <h1>The game starts in:</h1>
                        <h1>{countStart}</h1>
                    </div>
                </>
                :
                <>
                    <div className="form-header">
                        <h2>Time remaining: {time}s</h2>
                        <h2>Round: {rounds}</h2>
                    </div>
                    <div className="form-showcase">
                        <h4>Word to type:</h4>
                        <h1 className="main-word">{currentWord}</h1>
                    </div>
                    <div className="form-input-container">
                        <input type="text" ref={inputRef} onChange={(e) => setInputWord(e.target.value)} />
                    </div>
                </>
            : 
            <>
                <div className="game-over">
                    <h1>GAME OVER!</h1>
                    <h1>You passed {rounds-1} rounds!</h1>
                    <button className="restart" onClick={() => window.location.reload()}>Restart</button>
                </div>
            </>
            }
        </div>
    )
}

export default Form
