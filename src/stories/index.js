import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

// const stories = storiesOf('Storybook Knobs', module);

// stories.addDecorator(withKnobs);
//
// // Knobs as React props
// stories.add('with a button', () => (
//     <button disabled={boolean('Disabled', false)}>
//         {text('Label', 'Hello Storybook')}
//     </button>
// ));
//
// // Knobs as dynamic variables
// stories.add('as dynamic variables', () => {
//     const name = text('Name', 'Patrick Jones');
//     const age = number('Age', 69);
//
//     const content = `I am ${name} and I'm ${age} years old.`;
//     return (<div>{content}</div>);
// });

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
