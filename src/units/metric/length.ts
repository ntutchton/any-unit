import { Unit, MeasurementSystem, MeasurementSystemName } from '../../types/units'
import { Big } from 'big.js'

export const millimeter: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'millimeter',
  plural: 'millimeters',
  abbreviation: 'mm',
  factor: new Big(1/1000),
}

export const centimeter: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'centimeter',
  plural: 'centimeters',
  abbreviation: 'cm',
  factor: new Big(1/100),
}

export const decimeter: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'decimeter',
  plural: 'decimeters',
  abbreviation: 'dm',
  factor: new Big(1/10),
}

export const meter: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'meter',
  plural: 'meters',
  abbreviation: 'm',
  factor: new Big(1),
}

export const decameter: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'decameter',
  plural: 'decameters',
  abbreviation: 'dam',
  factor: new Big(10),
}

export const hectometer: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'hectometer',
  plural: 'hectometers',
  abbreviation: 'hm',
  factor: new Big(100),
}

export const kilometer: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'kilometer',
  plural: 'kilometers',
  abbreviation: 'km',
  factor: new Big(1000),
}

// Maritime Units
export const cable: Unit = {
  system: MeasurementSystemName.METRIC,
  singular: 'cable',
  plural: 'cables',
  abbreviation: 'cb',
  factor: new Big(200)
}

export const nauticalMile: Unit = { //international
  system: MeasurementSystemName.METRIC,
  singular: 'nautical mile',
  plural: 'nautical miles',
  abbreviation: 'nmi',
  factor: new Big(1852)
}

export const METRIC_LENGTH: MeasurementSystem = {
  name: MeasurementSystemName.METRIC,
  base: meter,
  units: [
    millimeter,
    centimeter,
    decimeter,
    meter,
    decameter,
    hectometer,
    kilometer,
    /* cable,
    nauticalMile */
  ]
}

