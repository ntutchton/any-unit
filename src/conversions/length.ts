import { UNITED_STATES_CUSTOMARY_LENGTH } from '../units/united_states_customary/length'
import { METRIC_LENGTH } from '../units/metric/length'
import { BaseConverter } from '../types/conversions'
import { Big } from 'big.js'

export class LengthConverter extends BaseConverter {
  conversions = [
    { 
      input: UNITED_STATES_CUSTOMARY_LENGTH,
      output: METRIC_LENGTH,
      ratio: new Big(1/0.9144)
    },
    {
      input: METRIC_LENGTH,
      output: UNITED_STATES_CUSTOMARY_LENGTH,
      ratio: new Big(0.9144)
    }
  ]
}