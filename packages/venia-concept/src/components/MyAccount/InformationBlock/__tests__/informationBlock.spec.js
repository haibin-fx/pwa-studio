import React from 'react';
import { configure, shallow } from 'enzyme';
import { List } from '@magento/peregrine';
import Adapter from 'enzyme-adapter-react-16';

import InformationBlock from '../informationBlock';

configure({ adapter: new Adapter() });

const classes = {
    root: 'root',
    title: 'title',
    actions: 'actions'
};

const title = 'Information';
const children = <div>Details</div>;
const actions = [{ title: 'Edit', onClick: () => {} }];

test('renders correctly', () => {
    const wrapper = shallow(
        <InformationBlock classes={classes} title={title} actions={actions}>
            {children}
        </InformationBlock>
    ).dive();

    expect(wrapper.find(`.${classes.title}`).text()).toBe(title);
    expect(wrapper.contains(children)).toBeTruthy();
    expect(wrapper.find(List).prop('items')).toBe(actions);
});
