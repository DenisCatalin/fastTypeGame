import React from 'react'
import { changeDifficulty } from '../../redux/difficulty/difficulty.actions';
import { selectDifficultyLevel } from '../../redux/difficulty/difficulty.selector';
import { useDispatch, useSelector } from 'react-redux';
import '../header/header.styles.scss'

const SelectDifficulty = () => {
    const difficultyLevel = useSelector(selectDifficultyLevel);
    const dispatch = useDispatch();

    return (
        <div className="dropdown">
            <div className='dropdown-difficulty'>
                <h2 className="difficulty">{difficultyLevel}</h2>
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="dropdown-options">
                <h2 className="dropdown-option" 
                onClick={(e) => {
                    dispatch(changeDifficulty(e.target.textContent));
                    window.location.reload();
                }}>EASY</h2>
                <h2 className="dropdown-option" onClick={(e) => {
                    dispatch(changeDifficulty(e.target.textContent));
                    window.location.reload();
                }}>MEDIUM</h2>
                <h2 className="dropdown-option" onClick={(e) => {
                    dispatch(changeDifficulty(e.target.textContent));
                    window.location.reload();
                }}>HARD</h2>
            </div>
        </div>
    )
}

export default SelectDifficulty
