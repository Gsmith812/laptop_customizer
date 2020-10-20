import React from 'react';
import FeatureList from '../FeatureList/FeatureList';
import './FeatureForm.css';

class FeatureForm extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <FeatureList 
                    key={featureHash} 
                    features={this.props.features} 
                    featureName={feature}
                    selectedFeatures={this.props.selectedFeatures}
                    updateFeature={this.props.updateFeature}
                />
            )
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default FeatureForm;