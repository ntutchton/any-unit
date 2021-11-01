import { Value, Unit, MeasurementSystem } from '../types/units'
import { Big } from 'big.js'
import { Logger } from '../util/logger'

interface MeasurementSystemConversion {
  input: MeasurementSystem,
  output: MeasurementSystem
  ratio: Big
}

interface Converter {
  conversions: MeasurementSystemConversion[],
  describeConversion(conversion: MeasurementSystemConversion): string,
  getConversionFactor(from: Unit, to: Unit): Big,
  convert(input: Value, output: Unit): Value,
}

export class BaseConverter implements Converter {
  conversions: MeasurementSystemConversion[];

  describeConversion = (conversion: MeasurementSystemConversion) => `${conversion.input.base.plural} to ${conversion.output.base.plural}`

  getConversionFactor(from: Unit, to: Unit): Big {
    if (from.system === to.system){ //same system, convert via base unit factors
      return new Big(from.factor.div(to.factor))
    }
    else if (from.system !== to.system) { //different system, include base conversion ratio in factor
      const conversion = this.conversions.find(conversion => (from.system === conversion.input.name && to.system === conversion.output.name))
      if (conversion){
        return new Big(from.factor.div(conversion.ratio)).div(to.factor)
      } 
    }
    Logger.log(`Unable to determine conversion factor between ${from.plural} and ${to.plural}.`, 'ERROR')
    return new Big(0)
  }

  convert(input: Value, output: Unit): Value {
    const factor = this.getConversionFactor(input.unit, output);
    return new Value(input.value.times(factor), output)
  }

}