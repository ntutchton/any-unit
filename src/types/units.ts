import { Big } from 'big.js' 

export enum MeasurementSystemName {
  METRIC,
  UNITED_STATES_CUSTOMARY
}

export interface Unit {
  system: MeasurementSystemName,
  singular: string,
  plural: string,
  abbreviation: string,
  factor: Big,
}

export interface MeasurementSystem {
  name: MeasurementSystemName,
  base: Unit,
  units: Unit[],
} 

export class Value {
  unit: Unit;
  value: Big;

  constructor(value: Big, unit: Unit){
    this.value = value;
    this.unit = unit;
  }

  toBase = () => this.value.times(this.unit.factor)
  fromBase = () => this.value.div(this.unit.factor)
}