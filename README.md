# extra-easing
## Install
```sh
npm install --save extra-easing
# or
yarn add extra-easing
```

## API
```ts
type EasingFunction = (normalizedTime: number) => number
```

### Easing functions
```ts
const easeInQuadratic: EasingFunction
const easeOutQuadratic: EasingFunction
const easeInOutQuadratic: EasingFunction

const easeInCubic: EasingFunction
const easeOutCubic: EasingFunction
const easeInOutCubic: EasingFunction

const easeInQuartic: EasingFunction
const easeOutQuartic: EasingFunction
const easeInOutQuartic: EasingFunction

const easeInQuintic: EasingFunction
const easeOutQuintic: EasingFunction
const easeInOutQuintic: EasingFunction

const easeInSine: EasingFunction
const easeOutSine: EasingFunction
const easeInOutSine: EasingFunction

const easeInCircular: EasingFunction
const easeOutCircular: EasingFunction
const easeInOutCircular: EasingFunction
```

#### CSS
```ts
import * as CSS from 'extra-easing/css'

const ease: EasingFunction
const easeIn: EasingFunction
const easeOut: EasingFunction
const easeInOut: EasingFunction
```

#### EasingsNet
```ts
import * as EasingsNet from 'extra-easing/easings-net'

const easeInExponential: EasingFunction
const easeOutExponential: EasingFunction
const easeInOutExponential: EasingFunction

const easeInBack: EasingFunction
const easeOutBack: EasingFunction
const easeInOutBack: EasingFunction

const easeInElastic: EasingFunction
const easeOutElastic: EasingFunction
const easeInOutElastic: EasingFunction

const easeInBounce: EasingFunction
const easeOutBounce: EasingFunction
const easeInOutBounce: EasingFunction
```

### Easing function creators
#### createEaseIn
```ts
function createEaseIn(easeOut: EasingFunction): EasingFunction
```

#### createEaseOut
```ts
function createEaseOut(easeIn: EasingFunction): EasingFunction
```

#### createEaseInOut
```ts
function createEaseInOut(easeIn: EasingFunction, easeOut: EasingFunction): EasingFunction
```

#### linear
```ts
type LinearPoint = [value: number, percentage: number]

function linear(...points: LinearPoint[]): EasingFunction
```

See <https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#linear_easing_function>.

#### cubicBezier
```ts
function cubicBezier(
  x1: number, y1: number
, x2: number, y2: number
): EasingFunction
function cubicBezier(
  p1: [x: number, y: number]
, p2: [x: number, y: number]
): EasingFunction
```

See <https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#cubic_b%C3%A9zier_easing_function>.

#### steps
```ts
enum StepPosition {
  JumpStart
, JumpEnd
, JumpNone
, JumpBoth
}

function steps(steps: number, position: StepPosition): EasingFunction 
```

See <https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#steps_easing_function>.

#### power
```ts
function power(power: number): EasingFunction
```

#### exponential
```ts
function exponential(exponent: number): EasingFunction
```

#### back
```ts
function back(amplitude: number): EasingFunction
```

#### elastic
```ts
function elastic(params: {
  oscillations?: number = 3
  springiness?: number = 3
}): EasingFunction
```

#### bounce
```ts
function bounce(params: {
  bounces?: number = 3
  bounciness?: number = 2
}): EasingFunction
```
