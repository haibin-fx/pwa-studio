import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classify from 'src/classify';
import InformationBlock from '../InformationBlock';
import defaultClasses from './addressBlock.css';

class AddressBlock extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            telephoneLink: PropTypes.string
        }),
        address: PropTypes.shape({}),
        title: PropTypes.string
    };

    render() {
        const { address, title, classes } = this.props;
        const {
            firstname,
            lastname,
            street = [],
            country,
            telephone,
            postcode,
            city,
            region: { region } = {}
        } = address || {};

        return (
            <InformationBlock
                title={title}
                actions={[{ title: 'Edit Address' }]}
            >
                <div>
                    {firstname} {lastname}
                </div>
                <div>{street[0]}</div>
                <div>
                    {city}, {region}, {postcode}
                </div>
                <div>{country}</div>
                <div>
                    T:
                    <a
                        className={classes.telephoneLink}
                        href={`tel:${telephone}`}
                    >
                        {telephone}
                    </a>
                </div>
            </InformationBlock>
        );
    }
}

export default classify(defaultClasses)(AddressBlock);
