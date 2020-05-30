//  expect(tree).toMatchSnapshot();

import React from 'react'

import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json';
import PageNotFound from '../../components/404Page/404Page'



test('404 page test',()=>{
    const wrapper=shallow(<PageNotFound/>);

    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('spy function',()=>{
    const onSubmitSpy=jest.fn();
    onSubmitSpy('dinesh','latha')
    expect(onSubmitSpy).toHaveBeenCalledWith('dinesh','latha')
})