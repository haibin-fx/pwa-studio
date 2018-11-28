import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AccountInformation, {
    SUBSCRIBED_MESSAGE,
    NOT_SUBSCRIBED_MESSAGE
} from '../accountInformation';

configure({ adapter: new Adapter() });

const classes = {
    fullName: 'fullName',
    email: 'email',
    subscriptionStatus: 'subscriptionStatus'
};

const firstname = 'Veronica';
const lastname = 'Costello';
const email = 'roni_cost@example.com';

test('renders correctly', () => {
    const user = {
        firstname,
        lastname,
        email,
        extension_attributes: {
            is_subscribed: false
        }
    };
    const wrapper = shallow(
        <AccountInformation classes={classes} user={user} />
    ).dive();

    expect(wrapper.find(`.${classes.fullName}`).text()).toEqual(
        expect.stringMatching(new RegExp(`${firstname}.*${lastname}`))
    );
    expect(wrapper.find(`.${classes.email}`).text()).toBe(email);
});

test('renders appropriate message when user is subscribed to newsletter', () => {
    const user = {
        firstname,
        lastname,
        email,
        extension_attributes: {
            is_subscribed: true
        }
    };
    const wrapper = shallow(
        <AccountInformation classes={classes} user={user} />
    ).dive();

    expect(wrapper.find(`.${classes.subscriptionStatus}`).text()).toBe(
        SUBSCRIBED_MESSAGE
    );
});

test('renders appropriate message when user is not subscribed to newsletter', () => {
    const user = {
        firstname,
        lastname,
        email,
        extension_attributes: {
            is_subscribed: false
        }
    };
    const wrapper = shallow(
        <AccountInformation classes={classes} user={user} />
    ).dive();

    expect(wrapper.find(`.${classes.subscriptionStatus}`).text()).toBe(
        NOT_SUBSCRIBED_MESSAGE
    );
});
