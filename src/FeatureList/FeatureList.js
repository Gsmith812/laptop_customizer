import React from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem';
import './FeatureList.css';

class FeatureList extends React.Component {
    render() {
        const options = this.props.features[this.props.featureName].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return <FeatureItem 
                    key={itemHash} 
                    itemId={itemHash}
                    features={this.props.features} 
                    item={item} 
                    featureName={this.props.featureName} 
                    selectedFeatures={this.props.selectedFeatures}
                    updateFeature={this.props.updateFeature}
                />
          });
        return (
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{this.props.featureName}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}

export default FeatureList;