// Copy and pasted from react-intercom: https://github.com/nhagen/react-intercom
// https://github.com/couds/react-intercom/blob/master/src/index.js

// We wanted to make a change to the library to poll Intercom
// every 20 seconds. This is required to support our onboarding chat feature.
// Since the file is so small, we decided to copy & paste the code rather
// than forking react-intercom.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);


export const IntercomAPI = (...args) => {
  if (canUseDOM && window.Intercom) {
    window.Intercom.apply(null, args);
  } else {
    console.warn('Intercom not initialized yet');
  }
};


export default class Intercom extends Component {
  static propTypes = {
    appID: PropTypes.string.isRequired,
  };

  static displayName = 'Intercom';

  componentDidMount() {
    const {
      appID,
      ...otherProps
    } = this.props;

    if (!appID) {
      return;
    }

    if (!window.Intercom) {
      (function(w, d, id, s, x) {
        function i() {
            i.c(arguments);
        }
        i.q = [];
        i.c = function(args) {
            i.q.push(args);
        };
        w.Intercom = i;
        s = d.createElement('script');
        s.async = 1;
        s.src = 'https://widget.intercom.io/widget/' + id;
        d.head.appendChild(s);
      })(window, document, appID);
    }

    window.intercomSettings = { ...otherProps, app_id: appID };

    if (window.Intercom) {
      window.Intercom('boot', otherProps);
    }
  }


  componentDidUpdate(prevProps) {
    const {
      appID,
      ...otherProps
    } = this.props;

    window.intercomSettings = { ...otherProps, app_id: appID };

    if (window.Intercom) {
      if (this.loggedIn(prevProps) && !this.loggedIn(this.props)) {
        // Shutdown and boot each time the user logs out to clear conversations
        window.Intercom('shutdown');
        window.Intercom('boot', otherProps);
      } else {
        window.Intercom('update', otherProps);
      }
    }
  }


  componentWillUnmount() {
    if (!window.Intercom) return false;

    window.Intercom('shutdown');

    delete window.Intercom;
    delete window.intercomSettings;
  }


  loggedIn(props) {
    return props.email || props.user_id;
  }


  render() {
    return false;
  }
}