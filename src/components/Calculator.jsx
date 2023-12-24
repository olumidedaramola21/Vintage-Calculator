import React, {useState} from 'react';

const Calculator = () => {
    // State variable to store input value
    const [inputValue, setInputValue] = useState('')

    const handleEvalute =  () => {
        try {
            setInputValue(eval(inputValue).toString());
        } catch (error) {
            setInputValue('Error');
        }
    };

    
}

