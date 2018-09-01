import React from 'react';
import { shallow } from 'enzyme';
import expences from '../fixtures/expences';
import ExpenceListItem from '../../components/ExpenceListItem';

test("should render ExpenceListItem correctly", ()=>{
    const wrapper = shallow(<ExpenceListItem {...expences[0]}/>);
    expect(wrapper).toMatchSnapshot();
});