import React from 'react';
import SelectedFeature from '../SelectedFeature/SelectedFeature';
import Totals from '../Totals/Totals';
import './Summary.css';

class Summary extends React.Component {
    render() {
        const summary = Object.keys(this.props.selectedFeatures).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <SelectedFeature 
                    key={featureHash} 
                    selectedFeatures={this.props.selectedFeatures} 
                    featureName={feature}
                />
            )
        });
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Totals selectedFeatures={this.props.selectedFeatures} />
            </section>
        )
    }
}

export default Summary;