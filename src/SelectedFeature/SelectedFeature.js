import React from 'react';
import './SelectedFeature.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class SelectedFeature extends React.Component {
    render() {
        const featureName = this.props.featureName;
        const selectedFeatures = this.props.selectedFeatures[featureName];
        return (
            <div className="summary__option">
                <div className="summary__option__label">{featureName} </div>
                <div className="summary__option__value">{selectedFeatures.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedFeatures.cost)}
                </div>
            </div>
        )
    }
}

export default SelectedFeature;