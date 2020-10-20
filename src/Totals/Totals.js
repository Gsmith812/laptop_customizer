import React from 'react';
import './Totals.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Totals extends React.Component {
    render() {
      const total = Object.keys(this.props.selectedFeatures).reduce(
        (acc, curr) => acc + this.props.selectedFeatures[curr].cost,
        0
      );
      return (
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      )
    }
}

export default Totals;