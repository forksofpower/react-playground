import React from 'react';
import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('React Hooks');

stories.addDecorator(withKnobs);

// example 1
// test useState
function Example1() {
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
}
stories.add('State Hook', () => <Example1 />);

// example 2
// test multiple state variables
function Example2() {
    const [ age, setAge ] = useState(42);
    const [ fruit, setFruit ] = useState('banana');
    const [ todos, setTodos ] = useState([{ text: 'Learn Hooks'}]);

    function handleChange(event) {
        setTodos(todos.append(event.target.value));
    }

    return (
        <div>
            <p>I am {age} years old.</p>
            <p>My favorite fruit is {fruit}</p>
            <p>Todos:
                <ul>{
                    todos.map((todo) => (
                        <li>{todo.text}</li>
                    ))
                }</ul>
            </p>
            <input type="text" placeholder="Sample Text..." onChange={handleChange}/>
        </div>
    )
}
stories.add('State Hook - multiple variables', () => <Example2/>);