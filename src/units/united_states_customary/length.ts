import { Unit, MeasurementSystem, MeasurementSystemName } from '../../types/units'
import { Big } from 'big.js'

//International Units
export const point: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'point',
  plural: 'points',
  abbreviation: 'p',
  factor: new Big(1/2592),
}

export const pica: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'pica',
  plural: 'picas',
  abbreviation: 'P',
  factor: new Big(1/216),
}

export const inch: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'inch',
  plural: 'inches',
  abbreviation: 'in',
  factor: new Big(1/36),
};

export const foot: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'foot',
  plural: 'feet',
  abbreviation: 'ft',
  factor: new Big(1/3),
};

export const yard: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'yard',
  plural: 'yards',
  abbreviation: 'yd',
  factor: new Big(1),
};

export const mile: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'mile',
  plural: 'miles',
  abbreviation: 'mi',
  factor: new Big(1760),
};

//Survey Units
export const link: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'link',
  plural: 'links',
  abbreviation: 'lnk',
  factor: new Big(11/50),
};

export const rod: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'rod',
  plural: 'rods',
  abbreviation: 'rd',
  factor: new Big(5.5),
};

export const chain: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'chain',
  plural: 'chains',
  abbreviation: 'ch',
  factor: new Big(22),
};

export const furlong: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'furlong',
  plural: 'furlongs',
  abbreviation: 'fur',
  factor: new Big(220),
}

export const league: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'league',
  plural: 'leagues',
  abbreviation: 'lea',
  factor: new Big(5280),
};

// Maritime Units
export const fathom: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'fathom',
  plural: 'fathoms',
  abbreviation: 'ftm',
  factor: new Big(2),
};

export const cable: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'cable',
  plural: 'cables',
  abbreviation: 'cb',
  factor: new Big(240),
} 

export const nauticalMile: Unit = { //international
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'nautical mile',
  plural: 'nautical miles',
  abbreviation: 'nmi',
  factor: new Big(1852/0.9144),
};

export const nauticalLeague: Unit = {
  system: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  singular: 'nautical league',
  plural: 'nautical leagues',
  abbreviation: 'nl',
  factor: new Big(5556/0.9144),
}

export const UNITED_STATES_CUSTOMARY_LENGTH: MeasurementSystem = {
  name: MeasurementSystemName.UNITED_STATES_CUSTOMARY,
  base: yard,
  units: [
    /* point,
    pica, */
    inch,
    foot,
    yard,
    mile,
    /* link,
    rod,
    chain, 
    furlong,
    league,
    fathom,
    cable,
    nauticalMile,
    nauticalLeague, */
  ]
}

