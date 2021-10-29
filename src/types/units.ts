import { Big } from 'big.js' 

export enum Systems {
  METRIC,
  IMPERIAL,
  UNITED_STATES_CUSTOMARY
}

export interface Unit {
  type?: string[],
  system: Systems,
  singular: string,
  plural: string,
  abbreviation: string,
  factor: Big,
}

export interface Measurement {
  system: Systems,
  base: Unit,
  units: Unit[],
} 

/*
class Value{
  unit: Unit
  tobase ==  value:Big => return value.div(this.unit.factor)
  fromBase == value:Big => return value.times(this.unit.factor)
}
*/
