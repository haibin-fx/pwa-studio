import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classify from 'src/classify';
import AccountInformation from './AccountInformation';
import Section from './Section';
import AddressBook from './AddressBook';
import ActionButton from './ActionButton';
import defaultClasses from './myAccount.css';

class MyAccount extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            root: PropTypes.string,
            title: PropTypes.string
        }),
        customer: PropTypes.shape({}),
        addresses: PropTypes.arrayOf(PropTypes.shape({}))
    };

    render() {
        const { user, addresses, classes } = this.props;

        return (
            <section className={classes.root}>
                <h1 className={classes.title}>My Account</h1>
                <Section title="Account Information">
                    <AccountInformation user={user} />
                </Section>
                <Section
                    title="Address Book"
                    rightTitle={<ActionButton>Manage Addresses</ActionButton>}
                >
                    <AddressBook addresses={addresses} />
                </Section>
            </section>
        );
    }
}

export default classify(defaultClasses)(MyAccount);
