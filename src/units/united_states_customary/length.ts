import { Unit, Systems, Measurement } from '../../types/units'
import { Big } from 'big.js'

// YARDS are the base unit used by all US/Imperial length measurements
enum UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS {
  INTERNATIONAL = 'INTERNATIONAL',
  MARITIME = 'MARITIME',
  SURVEY = 'SURVEY',
}

export const point: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.INTERNATIONAL ],
  singular: 'point',
  plural: 'points',
  abbreviation: 'p',
  factor: new Big(1/2592),
}

export const pica: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.INTERNATIONAL ],
  singular: 'pica',
  plural: 'picas',
  abbreviation: 'P',
  factor: new Big(1/216),
}

export const inch: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.INTERNATIONAL ],
  singular: 'inch',
  plural: 'inches',
  abbreviation: 'in',
  factor: new Big(1/36),
};

export const link: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY ],
  singular: 'link',
  plural: 'links',
  abbreviation: 'lnk',
  factor: new Big(11/50),
};

export const foot: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.INTERNATIONAL,
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY,
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.MARITIME
  ],
  singular: 'foot',
  plural: 'feet',
  abbreviation: 'ft',
  factor: new Big(1/3),
};

export const yard: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.INTERNATIONAL,
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY,
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.MARITIME
  ],
  singular: 'yard',
  plural: 'yards',
  abbreviation: 'yd',
  factor: new Big(1),
};

export const fathom: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.MARITIME ],
  singular: 'fathom',
  plural: 'fathoms',
  abbreviation: 'ftm',
  factor: new Big(2),
};

export const rod: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY ],
  singular: 'rod',
  plural: 'rods',
  abbreviation: 'rd',
  factor: new Big(5.5),
};

export const chain: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY ],
  singular: 'chain',
  plural: 'chains',
  abbreviation: 'ch',
  factor: new Big(22),
};

export const furlong: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY ],
  singular: 'furlong',
  plural: 'furlongs',
  abbreviation: 'fur',
  factor: new Big(220),
}

export const cable: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.MARITIME ],
  singular: 'cable',
  plural: 'cables',
  abbreviation: 'cb',
  factor: new Big(240),
} 

export const mile: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.INTERNATIONAL,
    UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY
  ],
  singular: 'mile',
  plural: 'miles',
  abbreviation: 'mi',
  factor: new Big(1760),
};

export const nauticalMile: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.MARITIME ],
  singular: 'nautical mile',
  plural: 'nautical miles',
  abbreviation: 'nmi',
  factor: new Big(1852/0.9144),
};

export const league: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.SURVEY ],
  singular: 'league',
  plural: 'leagues',
  abbreviation: 'lea',
  factor: new Big(5280),
};

export const nauticalLeague: Unit = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  type: [ UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS.MARITIME ],
  singular: 'nautical league',
  plural: 'nautical leagues',
  abbreviation: 'nl',
  factor: new Big(5556/0.9144),
}

const UNITED_STATES_CUSTOMARY_LENGTH: Measurement = {
  system: Systems.UNITED_STATES_CUSTOMARY,
  measurements: Object.keys(UNITED_STATES_CUSTOMARY_LENGTH_MEASUREMENTS),
  base: yard,
  units: [
    point,
    pica,
    inch,
    link,
    foot,
    yard,
    fathom,
    rod,
    chain, 
    furlong,
    cable,
    mile,
    nauticalMile,
    league,
    nauticalLeague,
  ]
}

