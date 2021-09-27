const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Kujenga {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const kujenga_formatter = (value, unit) => new Kujenga(value, unit);

kujenga_formatter.convert = convert;
kujenga_formatter.setDisplay = units.setDisplay;
kujenga_formatter.setUnit = units.setUnit;
kujenga_formatter.getUnit = units.getUnit;
kujenga_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const dogo_to_kujenga = (dogo) => {
  return kujenga_formatter(Number.parseInt(dogo), 'dogo').to('kujenga').value();
};

export const kujenga_to_dogo = (kujenga) => {
  return kujenga_formatter(Number.parseFloat(Number(kujenga)), 'kujenga')
    .to('dogo')
    .value();
};

export const dogo_to_kujenga_string = (dogo) => {
  return kujenga_formatter(Number(dogo), 'dogo').to('kujenga').toString();
};

export const dogo_to_colouredcoin = (dogo) => {
  return kujenga_formatter(Number.parseInt(dogo), 'dogo')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_dogo = (colouredcoin) => {
  return kujenga_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('dogo')
    .value();
};

export const dogo_to_colouredcoin_string = (dogo) => {
  return kujenga_formatter(Number(dogo), 'dogo').to('colouredcoin').toString();
};
