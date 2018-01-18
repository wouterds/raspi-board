/*
The MIT License (MIT)

Copyright (c) 2014-2017 Bryan Hughes <bryan@nebri.us>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import { readFileSync } from 'fs';

export const VERSION_1_MODEL_A = 'rpi1_a';
export const VERSION_1_MODEL_B_REV_1 = 'rpi1_b1';
export const VERSION_1_MODEL_B_REV_2 = 'rpi1_b2';
export const VERSION_1_MODEL_B_PLUS = 'rpi1_bplus';
export const VERSION_1_MODEL_A_PLUS = 'rpi1_aplus';
export const VERSION_1_MODEL_ZERO = 'rpi1_zero';
export const VERSION_1_MODEL_ZERO_W = 'rpi1_zerow';
export const VERSION_2_MODEL_B = 'rpi2_b';
export const VERSION_3_MODEL_B = 'rpi3_b';
export const VERSION_UNKNOWN = 'unknown';

export interface IPinInfo {
  pins: string[];
  peripherals: string[];
  gpio: number;
}

const BOARD_REVISIONS: { [ revision: string ]: string } = {
  '0002': VERSION_1_MODEL_B_REV_1,
  '0003': VERSION_1_MODEL_B_REV_1,
  '0004': VERSION_1_MODEL_B_REV_2,
  '0005': VERSION_1_MODEL_B_REV_2,
  '0006': VERSION_1_MODEL_B_REV_2,
  '0007': VERSION_1_MODEL_A,
  '0008': VERSION_1_MODEL_A,
  '0009': VERSION_1_MODEL_A,
  '000d': VERSION_1_MODEL_B_REV_2,
  '000e': VERSION_1_MODEL_B_REV_2,
  '000f': VERSION_1_MODEL_B_REV_2,
  '0010': VERSION_1_MODEL_B_PLUS,
  '0012': VERSION_1_MODEL_A_PLUS,
  '0013': VERSION_1_MODEL_B_PLUS,
  '0015': VERSION_1_MODEL_A_PLUS,
  '900021': VERSION_1_MODEL_A_PLUS,
  '900092': VERSION_1_MODEL_ZERO,
  '920092': VERSION_1_MODEL_ZERO,
  '900093': VERSION_1_MODEL_ZERO,
  '920093': VERSION_1_MODEL_ZERO,
  '9000c1': VERSION_1_MODEL_ZERO_W,
  '19000c1': VERSION_1_MODEL_ZERO_W, // Bad boy overclocked his Pi Zero W
  'a01040': VERSION_2_MODEL_B,
  'a01041': VERSION_2_MODEL_B,
  'a21041': VERSION_2_MODEL_B,
  'a22042': VERSION_2_MODEL_B,
  'a02082': VERSION_3_MODEL_B,
  'a22082': VERSION_3_MODEL_B
};

const B1: { [ wiringpi: number ]: IPinInfo } = {
  0: {
    pins: [
      'GPIO17',
      'P1-11'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 17
  },
  1: {
    pins: [
      'GPIO18',
      'PWM0',
      'P1-12'
    ],
    peripherals: [
      'gpio',
      'pwm'
    ],
    gpio: 18
  },
  2: {
    pins: [
      'GPIO21',
      'P1-13'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 21
  },
  3: {
    pins: [
      'GPIO22',
      'P1-15'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 22
  },
  4: {
    pins: [
      'GPIO23',
      'P1-16'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 23
  },
  5: {
    pins: [
      'GPIO24',
      'P1-18'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 24
  },
  6: {
    pins: [
      'GPIO25',
      'P1-22'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 25
  },
  7: {
    pins: [
      'GPIO4',
      'P1-7'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 4
  },
  8: {
    pins: [
      'GPIO0',
      'SDA0',
      'P1-3'
    ],
    peripherals: [
      'gpio',
      'i2c'
    ],
    gpio: 0
  },
  9: {
    pins: [
      'GPIO1',
      'SCL0',
      'P1-5'
    ],
    peripherals: [
      'gpio',
      'i2c'
    ],
    gpio: 1
  },
  10: {
    pins: [
      'GPIO8',
      'P1-24',
      'CE0'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 8
  },
  11: {
    pins: [
      'GPIO7',
      'P1-26'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 7
  },
  12: {
    pins: [
      'GPIO10',
      'MOSI0',
      'P1-19'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 10
  },
  13: {
    pins: [
      'GPIO9',
      'MISO0',
      'P1-21'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 9
  },
  14: {
    pins: [
      'GPIO11',
      'SCLK0',
      'P1-23'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 11
  },
  15: {
    pins: [
      'GPIO14',
      'TXD0',
      'P1-8'
    ],
    peripherals: [
      'gpio',
      'uart'
    ],
    gpio: 14
  },
  16: {
    pins: [
      'GPIO15',
      'RXD0',
      'P1-10'
    ],
    peripherals: [
      'gpio',
      'uart'
    ],
    gpio: 15
  }
};

const B2: { [ wiringpi: number ]: IPinInfo } = {
  0: {
    pins: [
      'GPIO17',
      'P1-11'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 17
  },
  1: {
    pins: [
      'GPIO18',
      'PWM0',
      'P1-12'
    ],
    peripherals: [
      'gpio',
      'pwm'
    ],
    gpio: 18
  },
  2: {
    pins: [
      'GPIO27',
      'P1-13'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 27
  },
  3: {
    pins: [
      'GPIO22',
      'P1-15'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 22
  },
  4: {
    pins: [
      'GPIO23',
      'P1-16'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 23
  },
  5: {
    pins: [
      'GPIO24',
      'P1-18'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 24
  },
  6: {
    pins: [
      'GPIO25',
      'P1-22'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 25
  },
  7: {
    pins: [
      'GPIO4',
      'P1-7'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 4
  },
  8: {
    pins: [
      'GPIO2',
      'SDA0',
      'P1-3'
    ],
    peripherals: [
      'gpio',
      'i2c'
    ],
    gpio: 2
  },
  9: {
    pins: [
      'GPIO3',
      'SCL0',
      'P1-5'
    ],
    peripherals: [
      'gpio',
      'i2c'
    ],
    gpio: 3
  },
  10: {
    pins: [
      'GPIO8',
      'CE0',
      'P1-24'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 8
  },
  11: {
    pins: [
      'GPIO7',
      'P1-26'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 7
  },
  12: {
    pins: [
      'GPIO10',
      'MOSI0',
      'P1-19'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 10
  },
  13: {
    pins: [
      'GPIO9',
      'MISO0',
      'P1-21'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 9
  },
  14: {
    pins: [
      'GPIO11',
      'SCLK0',
      'P1-23'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 11
  },
  15: {
    pins: [
      'GPIO14',
      'TXD0',
      'P1-8'
    ],
    peripherals: [
      'gpio',
      'uart'
    ],
    gpio: 14
  },
  16: {
    pins: [
      'GPIO15',
      'RXD0',
      'P1-10'
    ],
    peripherals: [
      'gpio',
      'uart'
    ],
    gpio: 15
  },
  17: {
    pins: [
      'GPIO28',
      'P5-3'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 28
  },
  18: {
    pins: [
      'GPIO29',
      'P5-4'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 29
  },
  19: {
    pins: [
      'GPIO30',
      'P5-5'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 30
  },
  20: {
    pins: [
      'GPIO31',
      'P5-6'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 31
  }
};

const BPLUS: { [ wiringpi: number ]: IPinInfo } = {
  0: {
    pins: [
      'GPIO17',
      'P1-11'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 17
  },
  1: {
    pins: [
      'GPIO18',
      'PWM0',
      'P1-12'
    ],
    peripherals: [
      'gpio',
      'pwm'
    ],
    gpio: 18
  },
  2: {
    pins: [
      'GPIO27',
      'P1-13'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 27
  },
  3: {
    pins: [
      'GPIO22',
      'P1-15'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 22
  },
  4: {
    pins: [
      'GPIO23',
      'P1-16'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 23
  },
  5: {
    pins: [
      'GPIO24',
      'P1-18'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 24
  },
  6: {
    pins: [
      'GPIO25',
      'P1-22'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 25
  },
  7: {
    pins: [
      'GPIO4',
      'P1-7'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 4
  },
  8: {
    pins: [
      'GPIO2',
      'SDA0',
      'P1-3'
    ],
    peripherals: [
      'gpio',
      'i2c'
    ],
    gpio: 2
  },
  9: {
    pins: [
      'GPIO3',
      'SCL0',
      'P1-5'
    ],
    peripherals: [
      'gpio',
      'i2c'
    ],
    gpio: 3
  },
  10: {
    pins: [
      'GPIO8',
      'CE0',
      'P1-24'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 8
  },
  11: {
    pins: [
      'GPIO7',
      'CE1',
      'P1-26'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 7
  },
  12: {
    pins: [
      'GPIO10',
      'MOSI0',
      'P1-19'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 10
  },
  13: {
    pins: [
      'GPIO9',
      'MISO0',
      'P1-21'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 9
  },
  14: {
    pins: [
      'GPIO11',
      'SCLK0',
      'P1-23'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 11
  },
  15: {
    pins: [
      'GPIO14',
      'TXD0',
      'P1-8'
    ],
    peripherals: [
      'gpio',
      'uart'
    ],
    gpio: 14
  },
  16: {
    pins: [
      'GPIO15',
      'RXD0',
      'P1-10'
    ],
    peripherals: [
      'gpio',
      'uart'
    ],
    gpio: 15
  },
  21: {
    pins: [
      'GPIO5',
      'P1-29'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 5
  },
  22: {
    pins: [
      'GPIO6',
      'P1-31'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 6
  },
  23: {
    pins: [
      'GPIO13',
      'P1-33',
      'PWM1'
    ],
    peripherals: [
      'gpio',
      'pwm'
    ],
    gpio: 13
  },
  24: {
    pins: [
      'GPIO19',
      'PWM1',
      'MISO1',
      'P1-35'
    ],
    peripherals: [
      'gpio',
      'pwm',
      'spi'
    ],
    gpio: 19
  },
  25: {
    pins: [
      'GPIO26',
      'P1-37'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 26
  },
  26: {
    pins: [
      'GPIO12',
      'PWM0',
      'P1-32'
    ],
    peripherals: [
      'gpio',
      'pwm'
    ],
    gpio: 12
  },
  27: {
    pins: [
      'GPIO16',
      'P1-36'
    ],
    peripherals: [
      'gpio'
    ],
    gpio: 16
  },
  28: {
    pins: [
      'GPIO20',
      'MOSI1',
      'P1-38'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 20
  },
  29: {
    pins: [
      'GPIO21',
      'SCLK1',
      'P1-40'
    ],
    peripherals: [
      'gpio',
      'spi'
    ],
    gpio: 21
  }
};

// Initialize the board info
let procInfo: string;
if ((global as any).raspiTest) {
  procInfo = 'Revision:a21041';
} else {
  procInfo = readFileSync('/proc/cpuinfo').toString();
}
const revMatch = procInfo.match(/Revision\s*:\s*(.*)/);
if (!revMatch) {
  throw new Error('Unable to parse revision information in /proc/cpuinfo');
}

// If the board has been overclocked, the revision is modified, so clear it here
let rev = revMatch[1];
if (/10[0-9a-z]{5}/.test(rev)) { // Check for RPi 1 overclock
  rev = rev.substr(-4);
} else if (/1a[0-9a-z]{5}/.test(rev)) { // Check for RPi 2 overclock
  rev = rev.substr(-6);
}

let pins: { [ wiringpi: number ]: IPinInfo };
switch (BOARD_REVISIONS[rev]) {
  case VERSION_1_MODEL_A:
    // Information is scarce, and no one has complained about it not being supported
    throw new Error('Raspberry Pi 1 Model A boards are not supported.');
  case VERSION_1_MODEL_B_REV_1:
    pins = B1;
    break;
  case VERSION_1_MODEL_B_REV_2:
    pins = B2;
    break;
  case VERSION_1_MODEL_ZERO:
  case VERSION_1_MODEL_ZERO_W:
  case VERSION_1_MODEL_A_PLUS:
  case VERSION_1_MODEL_B_PLUS:
  case VERSION_2_MODEL_B:
  case VERSION_3_MODEL_B:
    pins = BPLUS;
    break;
  default:
    console.warn(`Unknown board revision ${rev}, assuming Raspberry Pi 3 pinout.`);
    pins = BPLUS;
    break;
}

// Create the aliases
const aliases: { [ alias: string ]: number } = {};
for (const pin in pins) {
  if (pins.hasOwnProperty(pin)) {
    const pinAliases = pins[pin].pins;
    for (const pinAlias of pinAliases) {
      aliases[pinAlias] = parseInt(pin, 10);
    }
  }
}

// Create the Wiring Pi to PIGPIO mapping
const pigpioMapping: { [wiringPi: number]: number } = {};
for (const pin in pins) {
  if (pins.hasOwnProperty(pin)) {
    pigpioMapping[pin] = pins[pin].gpio;
  }
}

export function getBoardRevision() {
  return BOARD_REVISIONS[rev] || VERSION_UNKNOWN;
}

export function getPins() {
  return pins;
}

export function getPinNumber(alias: string | number): number | null {
  if (typeof alias !== 'number' && typeof alias !== 'string') {
    return null;
  }
  alias = alias.toString();
  if (Object.keys(pins).indexOf(alias) !== -1) {
    alias = parseInt(alias, 10);
  } else {
    alias = aliases[alias];
  }
  if (typeof alias === 'undefined') {
    return null;
  }
  return alias;
}

export function getGpioNumber(alias: string | number): number | null {
  const wiringpi = getPinNumber(alias);
  if (wiringpi === null) {
    return null;
  }
  return pigpioMapping[wiringpi];
}
