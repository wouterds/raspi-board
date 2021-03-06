"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
exports.VERSION_1_MODEL_A = 'rpi1_a';
exports.VERSION_1_MODEL_B_REV_1 = 'rpi1_b1';
exports.VERSION_1_MODEL_B_REV_2 = 'rpi1_b2';
exports.VERSION_1_MODEL_B_PLUS = 'rpi1_bplus';
exports.VERSION_1_MODEL_A_PLUS = 'rpi1_aplus';
exports.VERSION_1_MODEL_ZERO = 'rpi1_zero';
exports.VERSION_1_MODEL_ZERO_W = 'rpi1_zerow';
exports.VERSION_2_MODEL_B = 'rpi2_b';
exports.VERSION_3_MODEL_B = 'rpi3_b';
exports.VERSION_UNKNOWN = 'unknown';
var BOARD_REVISIONS = {
    '0002': exports.VERSION_1_MODEL_B_REV_1,
    '0003': exports.VERSION_1_MODEL_B_REV_1,
    '0004': exports.VERSION_1_MODEL_B_REV_2,
    '0005': exports.VERSION_1_MODEL_B_REV_2,
    '0006': exports.VERSION_1_MODEL_B_REV_2,
    '0007': exports.VERSION_1_MODEL_A,
    '0008': exports.VERSION_1_MODEL_A,
    '0009': exports.VERSION_1_MODEL_A,
    '000d': exports.VERSION_1_MODEL_B_REV_2,
    '000e': exports.VERSION_1_MODEL_B_REV_2,
    '000f': exports.VERSION_1_MODEL_B_REV_2,
    '0010': exports.VERSION_1_MODEL_B_PLUS,
    '0012': exports.VERSION_1_MODEL_A_PLUS,
    '0013': exports.VERSION_1_MODEL_B_PLUS,
    '0015': exports.VERSION_1_MODEL_A_PLUS,
    '900021': exports.VERSION_1_MODEL_A_PLUS,
    '900092': exports.VERSION_1_MODEL_ZERO,
    '920092': exports.VERSION_1_MODEL_ZERO,
    '900093': exports.VERSION_1_MODEL_ZERO,
    '920093': exports.VERSION_1_MODEL_ZERO,
    '9000c1': exports.VERSION_1_MODEL_ZERO_W,
    'a01040': exports.VERSION_2_MODEL_B,
    'a01041': exports.VERSION_2_MODEL_B,
    'a21041': exports.VERSION_2_MODEL_B,
    'a22042': exports.VERSION_2_MODEL_B,
    'a02082': exports.VERSION_3_MODEL_B,
    'a22082': exports.VERSION_3_MODEL_B
};
var B1 = {
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
var B2 = {
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
var BPLUS = {
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
var procInfo;
if (global.raspiTest) {
    procInfo = 'Revision:a21041';
}
else {
    procInfo = fs_1.readFileSync('/proc/cpuinfo').toString();
}
var revMatch = procInfo.match(/Revision\s*:\s*(.*)/);
if (!revMatch) {
    throw new Error('Unable to parse revision information in /proc/cpuinfo');
}
// If the board has been overclocked, the revision is modified, so clear it here
var rev = revMatch[1];
if (/10[0-9a-z]{5}/.test(rev)) {
    rev = rev.substr(-4);
}
else if (/1a[0-9a-z]{5}/.test(rev)) {
    rev = rev.substr(-6);
}
var pins;
switch (BOARD_REVISIONS[rev]) {
    case exports.VERSION_1_MODEL_A:
        // Information is scarce, and no one has complained about it not being supported
        throw new Error('Raspberry Pi 1 Model A boards are not supported.');
    case exports.VERSION_1_MODEL_B_REV_1:
        pins = B1;
        break;
    case exports.VERSION_1_MODEL_B_REV_2:
        pins = B2;
        break;
    case exports.VERSION_1_MODEL_ZERO:
    case exports.VERSION_1_MODEL_ZERO_W:
    case exports.VERSION_1_MODEL_A_PLUS:
    case exports.VERSION_1_MODEL_B_PLUS:
    case exports.VERSION_2_MODEL_B:
    case exports.VERSION_3_MODEL_B:
        pins = BPLUS;
        break;
    default:
        console.warn("Unknown board revision " + rev + ", assuming Raspberry Pi 3 pinout.");
        pins = BPLUS;
        break;
}
// Create the aliases
var aliases = {};
for (var pin in pins) {
    if (pins.hasOwnProperty(pin)) {
        var pinAliases = pins[pin].pins;
        for (var _i = 0, pinAliases_1 = pinAliases; _i < pinAliases_1.length; _i++) {
            var pinAlias = pinAliases_1[_i];
            aliases[pinAlias] = parseInt(pin, 10);
        }
    }
}
// Create the Wiring Pi to PIGPIO mapping
var pigpioMapping = {};
for (var pin in pins) {
    if (pins.hasOwnProperty(pin)) {
        pigpioMapping[pin] = pins[pin].gpio;
    }
}
function getBoardRevision() {
    return BOARD_REVISIONS[rev] || exports.VERSION_UNKNOWN;
}
exports.getBoardRevision = getBoardRevision;
function getPins() {
    return pins;
}
exports.getPins = getPins;
function getPinNumber(alias) {
    if (typeof alias !== 'number' && typeof alias !== 'string') {
        return null;
    }
    alias = alias.toString();
    if (Object.keys(pins).indexOf(alias) !== -1) {
        alias = parseInt(alias, 10);
    }
    else {
        alias = aliases[alias];
    }
    if (typeof alias === 'undefined') {
        return null;
    }
    return alias;
}
exports.getPinNumber = getPinNumber;
function getGpioNumber(alias) {
    var wiringpi = getPinNumber(alias);
    if (wiringpi === null) {
        return null;
    }
    return pigpioMapping[wiringpi];
}
exports.getGpioNumber = getGpioNumber;
//# sourceMappingURL=index.js.map