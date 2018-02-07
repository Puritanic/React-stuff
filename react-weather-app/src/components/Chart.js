import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import { average } from '../helpers';

const Chart = props => (
  <div>
    <Sparklines height={120} width={190} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(props.data)} {props.unit}
    </div>
  </div>
);

export default Chart;
