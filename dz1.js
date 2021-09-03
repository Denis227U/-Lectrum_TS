'use strict';
exports.__esModule = true;
var currency_1 = require('./currency');
var cur = new currency_1.currency(23, {});
var addNum = cur.add(11);
var dolllar = cur.dollars();
console.log(cur, addNum, dolllar);
