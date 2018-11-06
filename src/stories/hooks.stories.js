import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('React Hooks', module);

stories.addDecorator(withKnobs);

// example 1
// test useState
stories.add('State Hook', () => {
    const Example1 = () => {
        const [count, setCount] = useState(0);
        return (
            <div>
                <p>You clicked {count} times.</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
                <button onClick={() => setCount(0)}>
                    Clear
                </button>
            </div>
        )
    };
    return <Example1/>
});

// example 2
// test multiple state variables
stories.add('State Hook - multiple variables', () => {
    const Example2 = () => {
        const [ age, setAge ] = useState(42);
        const [ fruit, setFruit ] = useState('banana');
        const [ todos, setTodos ] = useState(['Learn Hooks']);
        const [ inputValue, setInputValue ] = useState('');

        // style
        const List = styled.ul`
            list-style: none;
            color: red;
            padding-left: 0;
            width: 250px;
        `;
        const ListItem = styled.li`
            color: #333;
            background-color: rgba(255, 255, 255, .5);
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 5px;
            list-style: none;
        `;
        const ListInput = styled.input`
            padding: 10px;
            font-size: 16px;
            border: 2px solid #FFF;
            width: 165px;
        `;
        const ListButton = styled.button`
            padding: 10px;
            font-size: 16px;
            margin: 10px;
            margin-right: 0px;
            background-color: #0066FF;
            color: #FFF;
            border: 2px solid #0066FF;
              
            :hover {
                background-color: #003399;
                border: 2px solid #003399;
                cursor: pointer;
            }
            
            :disabled {
                background-color: lightgray;
                border: 2px solid lightgray;
            }
        `;
        function handleSubmit(event) {
            event.preventDefault();
            setTodos(todos.concat(inputValue));
            setInputValue('');
        }

        function handleChange(event) {
            setInputValue(event.target.value);
        }

        return (
            <div style={{backgroundColor: 'red'}}>
                <p>I am {age} years old.</p>
                <p>My favorite fruit is {fruit}</p>
                <h4>Todos:</h4>
                <List>
                    {
                        todos.map((todo) => (
                            <ListItem>{todo}</ListItem>
                        ))
                    }
                </List>
                <form>
                    <ListInput
                        type="text" placeholder="Sample Text..."
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <ListButton disabled={(inputValue === '')} onClick={handleSubmit}>Add</ListButton>
                </form>
            </div>
        )
    }

    return <Example2/>
});