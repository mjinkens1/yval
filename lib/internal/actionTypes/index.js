export const actionTypes = {
  email: 'email',
  ensure: 'ensure',
  fieldType: 'fieldType',
  greaterThan: 'greaterThan',
  integer: 'integer',
  length: 'length',
  lessThan: 'lessThan',
  lowercase: 'lowercase',
  matches: 'matches',
  max: 'max',
  min: 'min',
  negative: 'negative',
  of: 'of',
  positive: 'positive',
  ref: 'ref',
  required: 'required',
  round: 'round',
  trim: 'trim',
  truncate: 'truncate',
  uppercase: 'uppercase',
};

export const validActions = {
  Array: ['compact', 'ensure', 'length', 'max', 'min', 'of', 'required'],
  Boolean: ['required'],
  Date: ['max', 'min', 'required'],
  Number: [
    'greaterThan',
    'integer',
    'lessThan',
    'max',
    'min',
    'negative',
    'positive',
    'ref',
    'required',
    'round',
    'truncate',
  ],
  Object: ['required'],
  String: ['length', 'required'],
};

export const getActionType = type => actionTypes[type];
