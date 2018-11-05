import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Basic');

stories.add('props',() => {
        class Something extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return <div>{this.props.thing.toUpperCase()}</div>
            }
        }

        const SomethingElse = (props) => {
            return <div>{props.thing.toUpperCase()}</div>
        };
        return (
            <>
                <Something thing={"This is a test"}/>
                <SomethingElse thing={"This is another test"}/>
            </>
        )
    });