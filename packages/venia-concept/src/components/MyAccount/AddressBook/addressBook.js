import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from '@magento/peregrine';
import AddressBlock from '../AddressBlock';

class AddressBook extends Component {
    static propTypes = {
        addresses: PropTypes.arrayOf(PropTypes.shape({}))
    };

    render() {
        const { addresses } = this.props;
        return (
            <List
                items={addresses}
                getItemKey={({ title }) => title}
                render={props => <Fragment>{props.children}</Fragment>}
                renderItem={({ item: { title, address } }) => (
                    <AddressBlock title={title} address={address} />
                )}
            />
        );
    }
}

export default AddressBook;
