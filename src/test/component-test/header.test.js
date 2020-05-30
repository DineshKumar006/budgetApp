import React from 'react'


import {Header} from '../../components/Routes/route';
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'
import toJSON, { toJson } from 'enzyme-to-json'


test('Run header Compomnent',()=>{

    const wrapper=shallow(<Header/>)
    // expect(wrapper.find('h1').text()).toBe('Budget-App')

    expect(toJSON(wrapper)).toMatchSnapshot()

    // const renderer=new ReactShallowRenderer();
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput())
})
