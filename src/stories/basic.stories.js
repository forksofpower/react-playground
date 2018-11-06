import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Basic');

stories.addDecorator(withKnobs);

stories.add('props',() => {
    const name = text('Name', 'Patrick Jones');
    // pass props to class constructor
    class Something extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <div>{this.props.thing.toUpperCase()}</div>
        }
    }

    // pass props via function variable
    const SomethingElse = (props) => {
        return <div>{props.thing.toUpperCase()}</div>
    };

    return (
        <>
            <Something thing={`This is ${name}`}/>
            <SomethingElse thing={`This is ${name}`}/>
        </>
    )
});