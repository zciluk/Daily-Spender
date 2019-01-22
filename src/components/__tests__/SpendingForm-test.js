import React from 'react';
import SpendingForm from '../SpendingForm.js';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json'

test('should render initial layout)', () => {
    const component = renderer.create(
        <SpendingForm/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // snapshot checks if placeholders are properly displayed, input fields are cleared and button is displayed correctly
});


// should display errors when click Add spending 
test('should display errors when click Add spending with empty fields)', () => { 
    const component = renderer.create(
        <SpendingForm/>
    );
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    component.root.findByType('form').props.onSubmit(fakeEvent);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // snapshots are awesome!

});
//