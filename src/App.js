import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
import './App.css'

const App = () => (
    <div>
        <h1> A gif App</h1>
        <div className="main-container">
            <Random />
            <Tag />
        </div>
    </div>
)

export default App;