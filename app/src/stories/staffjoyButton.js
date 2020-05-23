import React from 'react';
import { configure, storiesOf, action, linkTo } from '@storybook/react';

import StaffjoyButton from '../components/StaffjoyButton';

storiesOf('StaffjoyButton', StaffjoyButton)
  .add('default', () => {
    return <StaffjoyButton>Hello world</StaffjoyButton>;
  });
