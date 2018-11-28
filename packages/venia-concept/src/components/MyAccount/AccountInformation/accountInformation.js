import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import InformationBlock from '../InformationBlock';

class AccountInformation extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            title: PropTypes.string
        }),
        user: PropTypes.shape({}).isRequired
    };

    get subscriptionStatusText() {
        const { user } = this.props;

        return get(user, 'extension_attributes.is_subscribed')
            ? 'You are subscribed to our newsletter.'
            : "You aren't subscribed to our newsletter.";
    }

    render() {
        const { user } = this.props;
        const { subscriptionStatusText } = this;
        const { firstname, lastname, email } = user;

        return (
            <Fragment>
                <InformationBlock
                    title="Contact Information"
                    actions={[{ title: 'Edit' }, { title: 'Change Password' }]}
                >
                    <div>
                        {firstname} {lastname}
                    </div>
                    <div>{email}</div>
                </InformationBlock>
                <InformationBlock
                    title="Newsletters"
                    actions={[{ title: 'Edit' }]}
                >
                    <p>{subscriptionStatusText}</p>
                </InformationBlock>
            </Fragment>
        );
    }
}

export default AccountInformation;
