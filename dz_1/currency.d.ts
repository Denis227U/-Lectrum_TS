export type DefaultType = {
  symbol: string;
  separator: string;
  decimal: string;
  formatWithSymbol: boolean;
  errorOnInvalid: boolean;
  precision: number;
  pattern: string;
  negativePattern: string;
};

export type CurrencyOptsType = {
  increment?: number;
  useVedic?: boolean;
  groups?: RegExp;
};

export class currency {
  constructor(value: number, opts: CurrencyOptsType);

  add(number: number): new () => void;
  subtract(number: number): new () => void;
  multiply(number: number): new () => void;
  divide(number: number): new () => void;
  distribute(count: number): void;
  dollars(): number;
  cents(): number;
  format(useSymbol: boolean): string;
  toString(): string;
  toJSON(): number;
}
