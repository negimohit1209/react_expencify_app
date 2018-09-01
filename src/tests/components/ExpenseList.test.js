import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expences from '../fixtures/expences';

test('should render ExpenceList with expences', () => {
    const wrapper = shallow(<ExpenseList expences= {expences}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenceList with empty message', () => {
    const wrapper = shallow(<ExpenseList expences= {[]}/>);
    expect(wrapper).toMatchSnapshot();
});