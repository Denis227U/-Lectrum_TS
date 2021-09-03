import { currency } from './currency';

const cur = new currency(23, {});

const addNum = cur.add(11);

const dolllar = cur.dollars();

console.log(cur, addNum, dolllar);
