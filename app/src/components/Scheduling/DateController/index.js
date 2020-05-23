import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Grid, GridInner, GridCell } from '@rmwc/grid';
import 'moment-timezone';
import momentPropTypes from 'react-moment-proptypes';

import SquareButton from 'components/SquareButton';
import {
  MOMENT_CALENDAR_START_DISPLAY,
  MOMENT_CALENDAR_END_DISPLAY,
  MOMENT_CALENDAR_TIME_DISPLAY,
} from '../../../constants/config';

require('./scheduling-date-controller.scss');

class SchedulingDateController extends Component {
  constructor(props) {
    super(props);

    const intervalId = window.setInterval(() => {
      this.setState({
        time: this.getTime()
      });
    }, 1000);

    this.state = {
      time: this.getTime(),
      intervalId
    };
  }


  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }


  getTime() {
    return moment.tz(this.props.timezone).format(MOMENT_CALENDAR_TIME_DISPLAY);
  }


  render() {
    const { queryStart, queryStop, stepDateRange, timezone, disabled } = this.props;
    const { time } = this.state;
    const startDisplay = moment.utc(queryStart).tz(timezone)
      .format(MOMENT_CALENDAR_START_DISPLAY);
    const stopDisplay = moment.utc(queryStop).tz(timezone)
      .subtract(1, 'days')
      .format(MOMENT_CALENDAR_END_DISPLAY);

    return (
      <Grid>
        <GridInner 
          className="scheduling-date-controls-container"
        >
          <GridCell 
            span={3}
          >
            <SquareButton
              name="left"
              icon="chevron_left"
              onClick={stepDateRange}
              data-direction="left"
              disabled={disabled}
            />
            <SquareButton
              name="right"
              icon="chevron_right"
              onClick={stepDateRange}
              data-direction="right"
              disabled={disabled}
            />
          </GridCell>
          <GridCell
            span={9}
            className="time-displays"
          >
            <div className="date-range">{startDisplay} - {stopDisplay}</div>
            <div className="current-time">{time}</div>
          </GridCell>
        </GridInner>
      </Grid>
    );
  }
}

SchedulingDateController.propTypes = {
  queryStart: momentPropTypes.momentObj.isRequired,
  queryStop: momentPropTypes.momentObj.isRequired,
  timezone: PropTypes.string.isRequired,
  stepDateRange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};


SchedulingDateController.defaultProps = {
  disabled: false,
};


export default SchedulingDateController;
