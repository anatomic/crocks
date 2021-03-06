/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */
/** @author Henrique Limas */

const combinators = {
  applyTo: require('./combinators/applyTo'),
  composeB: require('./combinators/composeB'),
  constant: require('./combinators/constant'),
  flip: require('./combinators/flip'),
  identity: require('./combinators/identity'),
  reverseApply: require('./combinators/reverseApply'),
  substitution: require('./combinators/substitution')
}

const crocks = {
  Arrow: require('./Arrow'),
  Async: require('./Async'),
  Const: require('./Const'),
  Either: require('./Either'),
  Equiv: require('./Equiv'),
  Identity: require('./Identity'),
  IO: require('./IO'),
  List: require('./List'),
  Maybe: require('./Maybe'),
  Pair: require('./Pair'),
  Pred: require('./Pred'),
  Reader: require('./Reader'),
  ReaderT: require('./Reader/ReaderT'),
  Result: require('./Result'),
  Star: require('./Star'),
  State: require('./State'),
  Unit: require('./Unit'),
  Writer: require('./Writer')
}

const helpers = {
  assign: require('./helpers/assign'),
  assoc: require('./helpers/assoc'),
  binary: require('./helpers/binary'),
  branch: require('./Pair/branch'),
  compose: require('./helpers/compose'),
  composeK: require('./helpers/composeK'),
  composeP: require('./helpers/composeP'),
  composeS: require('./helpers/composeS'),
  curry: require('./helpers/curry'),
  defaultProps: require('./helpers/defaultProps'),
  defaultTo: require('./helpers/defaultTo'),
  dissoc: require('./helpers/dissoc'),
  fanout: require('./helpers/fanout'),
  fromPairs: require('./helpers/fromPairs'),
  liftA2: require('./helpers/liftA2'),
  liftA3: require('./helpers/liftA3'),
  mapProps: require('./helpers/mapProps'),
  mapReduce: require('./helpers/mapReduce'),
  mconcat: require('./helpers/mconcat'),
  mconcatMap: require('./helpers/mconcatMap'),
  mreduce: require('./helpers/mreduce'),
  mreduceMap: require('./helpers/mreduceMap'),
  nAry: require('./helpers/nAry'),
  objOf: require('./helpers/objOf'),
  omit: require('./helpers/omit'),
  once: require('./helpers/once'),
  partial: require('./helpers/partial'),
  pick: require('./helpers/pick'),
  pipe: require('./helpers/pipe'),
  pipeK: require('./helpers/pipeK'),
  pipeP: require('./helpers/pipeP'),
  pipeS: require('./helpers/pipeS'),
  prop: require('./Maybe/prop'),
  propPath: require('./Maybe/propPath'),
  propOr: require('./helpers/propOr'),
  propPathOr: require('./helpers/propPathOr'),
  safe: require('./Maybe/safe'),
  safeLift: require('./Maybe/safeLift'),
  tap: require('./helpers/tap'),
  toPairs: require('./Pair/toPairs'),
  tryCatch: require('./Result/tryCatch'),
  unary: require('./helpers/unary'),
  unit: require('./helpers/unit')
}

const logic = {
  and: require('./logic/and'),
  ifElse: require('./logic/ifElse'),
  not: require('./logic/not'),
  or: require('./logic/or'),
  unless: require('./logic/unless'),
  when: require('./logic/when')
}

const monoids = {
  All: require('./All'),
  Any: require('./Any'),
  Assign: require('./Assign'),
  Endo: require('./Endo'),
  First: require('./First'),
  Last: require('./Last'),
  Max: require('./Max'),
  Min: require('./Min'),
  Prod: require('./Prod'),
  Sum: require('./Sum'),
}

const pointfree = {
  alt: require('./pointfree/alt'),
  ap: require('./pointfree/ap'),
  bimap: require('./pointfree/bimap'),
  both: require('./pointfree/both'),
  chain: require('./pointfree/chain'),
  coalesce: require('./pointfree/coalesce'),
  compareWith: require('./pointfree/compareWith'),
  concat: require('./pointfree/concat'),
  cons: require('./pointfree/cons'),
  contramap: require('./pointfree/contramap'),
  either: require('./pointfree/either'),
  empty: require('./pointfree/empty'),
  equals: require('./pointfree/equals'),
  evalWith: require('./State/evalWith'),
  execWith: require('./State/execWith'),
  extend: require('./pointfree/extend'),
  filter: require('./pointfree/filter'),
  first: require('./pointfree/first'),
  fold: require('./pointfree/fold'),
  fst: require('./Pair/fst'),
  head: require('./pointfree/head'),
  log: require('./Writer/log'),
  map: require('./pointfree/map'),
  merge: require('./Pair/merge'),
  option: require('./pointfree/option'),
  promap: require('./pointfree/promap'),
  read: require('./Writer/read'),
  reduce: require('./pointfree/reduce'),
  reject: require('./pointfree/reject'),
  run: require('./pointfree/run'),
  runWith: require('./pointfree/runWith'),
  second: require('./pointfree/second'),
  sequence: require('./pointfree/sequence'),
  snd: require('./Pair/snd'),
  swap: require('./pointfree/swap'),
  tail: require('./pointfree/tail'),
  traverse: require('./pointfree/traverse'),
  valueOf: require('./pointfree/valueOf')
}

const predicates = {
  hasProp: require('./predicates/hasProp'),
  isAlt: require('./predicates/isAlt'),
  isAlternative: require('./predicates/isAlternative'),
  isApplicative: require('./predicates/isApplicative'),
  isApply: require('./predicates/isApply'),
  isArray: require('./predicates/isArray'),
  isBifunctor: require('./predicates/isBifunctor'),
  isBoolean: require('./predicates/isBoolean'),
  isCategory: require('./predicates/isCategory'),
  isChain: require('./predicates/isChain'),
  isContravariant: require('./predicates/isContravariant'),
  isDefined: require('./predicates/isDefined'),
  isEmpty: require('./predicates/isEmpty'),
  isExtend: require('./predicates/isExtend'),
  isFoldable: require('./predicates/isFoldable'),
  isFunction: require('./predicates/isFunction'),
  isFunctor: require('./predicates/isFunctor'),
  isInteger: require('./predicates/isInteger'),
  isMonad: require('./predicates/isMonad'),
  isMonoid: require('./predicates/isMonoid'),
  isNil: require('./predicates/isNil'),
  isNumber: require('./predicates/isNumber'),
  isObject: require('./predicates/isObject'),
  isPlus: require('./predicates/isPlus'),
  isProfunctor: require('./predicates/isProfunctor'),
  isPromise: require('./predicates/isPromise'),
  isSame: require('./predicates/isSame'),
  isSameType: require('./predicates/isSameType'),
  isSemigroup: require('./predicates/isSemigroup'),
  isSemigroupoid: require('./predicates/isSemigroupoid'),
  isSetoid: require('./predicates/isSetoid'),
  isString: require('./predicates/isString'),
  isTraversable: require('./predicates/isTraversable')
}

const transforms = {
  arrayToList: require('./List/arrayToList'),
  eitherToAsync: require('./Async/eitherToAsync'),
  eitherToFirst: require('./First/eitherToFirst'),
  eitherToLast: require('./Last/eitherToLast'),
  eitherToMaybe: require('./Maybe/eitherToMaybe'),
  eitherToResult: require('./Result/eitherToResult'),
  firstToAsync: require('./Async/firstToAsync'),
  firstToEither: require('./Either/firstToEither'),
  firstToLast: require('./Last/firstToLast'),
  firstToMaybe: require('./Maybe/firstToMaybe'),
  firstToResult: require('./Result/firstToResult'),
  lastToAsync: require('./Async/lastToAsync'),
  lastToEither: require('./Either/lastToEither'),
  lastToFirst: require('./First/lastToFirst'),
  lastToMaybe: require('./Maybe/lastToMaybe'),
  lastToResult: require('./Result/lastToResult'),
  listToArray: require('./List/listToArray'),
  maybeToAsync: require('./Async/maybeToAsync'),
  maybeToEither: require('./Either/maybeToEither'),
  maybeToFirst: require('./First/maybeToFirst'),
  maybeToLast: require('./Last/maybeToLast'),
  maybeToResult: require('./Result/maybeToResult'),
  resultToAsync: require('./Async/resultToAsync'),
  resultToEither: require('./Either/resultToEither'),
  resultToFirst: require('./First/resultToFirst'),
  resultToLast: require('./Last/resultToLast'),
  resultToMaybe: require('./Maybe/resultToMaybe'),
  writerToPair: require('./Pair/writerToPair')
}

module.exports = Object.assign(
  {},
  combinators,
  crocks,
  helpers,
  logic,
  monoids,
  pointfree,
  predicates,
  transforms
)
