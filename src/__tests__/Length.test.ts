import { LengthConverter } from '../conversions/length';
import { mile } from '../units/united_states_customary/length';
import { kilometer } from '../units/metric/length';

import { Value } from '../types/units'
import { Big } from 'big.js'

const converter = new LengthConverter();
const tempValue = new Value(new Big(13.1), kilometer)

test('[TEST] it should convert length', () => {
  const kilometers = tempValue.value.toNumber();
  const miles = converter.convert(tempValue, mile)
  expect(miles.value.toNumber()).toBe(8.139963);
});
