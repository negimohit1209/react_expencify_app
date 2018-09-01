import React from 'react';
import { shallow } from 'enzyme';
import ExpenceForm from '../../components/ExpenceForm';
import expences from '../fixtures/expences';

test("should render ExpenceForm correctly", () => {
    const wrapper = shallow(< ExpenceForm/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenceForm with expence data correctly", () => {
    const wrapper = shallow(<ExpenceForm expence={expences[1]}/>);
    expect(wrapper).toMatchSnapshot();
});
