import React from 'react';
import { configure, storiesOf, action, linkTo } from '@storybook/react';

const req = require.context('.', true, /.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
