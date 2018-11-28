import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classify from 'src/classify';
import InformationBlock from '../InformationBlock';

export const SUBSCRIBED_MESSAGE = 'You are subscribed to our newsletter.';
export const NOT_SUBSCRIBED_MESSAGE =
    "You aren't subscribed to our newsletter.";

class AccountInformation extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            fullName: PropTypes.string,
            email: PropTypes.string,
            subscriptionStatus: PropTypes.string
        }),
        user: PropTypes.shape({}).isRequired
    };

    get subscriptionStatusText() {
        const { user } = this.props;

        return get(user, 'extension_attributes.is_subscribed')
            ? SUBSCRIBED_MESSAGE
            : NOT_SUBSCRIBED_MESSAGE;
    }

    render() {
        const { user, classes } = this.props;
        const { subscriptionStatusText } = this;
        const { firstname, lastname, email } = user;

        return (
            <Fragment>
                <InformationBlock
                    title="Contact Information"
                    actions={[{ title: 'Edit' }, { title: 'Change Password' }]}
                >
                    <div className={classes.fullName}>
                        {firstname} {lastname}
                    </div>
                    <div className={classes.email}>{email}</div>
                </InformationBlock>
                <InformationBlock
                    title="Newsletters"
                    actions={[{ title: 'Edit' }]}
                >
                    <p className={classes.subscriptionStatus}>
                        {subscriptionStatusText}
                    </p>
                </InformationBlock>
            </Fragment>
        );
    }
}

export default classify()(AccountInformation);
