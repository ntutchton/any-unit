import { LengthConverter } from '../conversions/length';
import { mile, foot } from '../units/united_states_customary/length';
import { kilometer, centimeter } from '../units/metric/length';

import { Value } from '../types/units'
import { Big } from 'big.js'

const converter = new LengthConverter();
const oneKilometer = new Value(new Big(1), kilometer)
const oneMile = new Value(new Big(1), mile)

test('it should convert between metric units', () => {
  const outValue = converter.convert(oneKilometer, centimeter)
  expect(outValue.value.toFixed(2)).toBe('100000.00');
});

test('it should convert between us customary units', () => {
  const outValue = converter.convert(oneMile, foot)
  expect(outValue.value.toFixed(2)).toBe('5280.00');
});

test('it should convert from metric to us customary units', () => {
  const outValue = converter.convert(oneKilometer, foot)
  expect(outValue.value.toFixed(6)).toBe('3280.839895');
});

test('it should convert from us customary to metric units', () => {
  const outValue = converter.convert(oneMile, centimeter)
  expect(outValue.value.toFixed(2)).toBe('160934.40');
});
