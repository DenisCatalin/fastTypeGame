import React from 'react'
import Form from './components/form/form.component';
import Header from './components/header/header.component';
import './global.scss';

const App = () => {
    return (
        <div className='main-bg'>
            <Header />
            <Form />
        </div>
    )
}

export default App