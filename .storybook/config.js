import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/hooks');
}

configure(loadStories, module);
