import React from 'react';
import slugify from 'slugify';
import './FeatureItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class FeatureItem extends React.Component {
    render() {
        const featureName = this.props.featureName;
        const itemId = this.props.itemId
        const item = this.props.item
        return (
            <div className="feature__item">
                <input
                type="radio"
                id={itemId}
                className="feature__option"
                name={slugify(featureName)}
                checked={item.name === this.props.selectedFeatures[featureName].name}
                onChange={e => this.props.updateFeature(featureName, item)}
                />
                <label htmlFor={itemId} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
          </div>
        )
    }
}

export default FeatureItem;