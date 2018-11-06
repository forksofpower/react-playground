import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  require('../src/stories/basic.stories');
  require('../src/stories/hooks.stories');
}

// options
addDecorator(
    withOptions({
        /**
         * name to display in the top left corner
         * @type {String}
         */
        name: 'React Playground'
    })
);
configure(loadStories, module);
