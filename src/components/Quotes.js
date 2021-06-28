import React, { useState } from 'react'
import Data from '../components/Quotes.json'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'


const QuoteBox = () => {
    const randomButton = () => {
        const limite = 102;
        return Math.floor(Math.random()*limite)
    };
    
    let [state, setState] = useState(Math.floor(Math.random()*102));
    const handleChange = () => {
        setState(state = randomButton())
    }

    const author = Data.quotes[state]["author"];
    const quote = Data.quotes[state]["quote"];
    

    return <div className='container'>
        <FontAwesomeIcon icon={faQuoteLeft}/>
        <p className='quote'>{quote}</p>
        <p className='author'>- {author}</p>
        <button className='buttonChange' onClick={handleChange}>New Quote</button>
        
    </div>
}

export default QuoteBox;