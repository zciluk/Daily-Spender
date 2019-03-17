import React from 'react';
import SpendingForm from '../SpendingForm.js';
import { mount} from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

// ****
// SNAPSHOT UI TESTS - JEST
// ****
test('should render initial layout', () => {
    const component = renderer.create(
        <SpendingForm/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // snapshot checks if placeholders are properly displayed, input fields are cleared and button is displayed correctly
});


// should display errors when click Add spending 
test('should display errors when click Add spending with empty fields', () => { 
    const component = renderer.create(
        <SpendingForm/>
    );
    const fakeEvent = { preventDefault: () => console.log() };
    component.root.findByType('form').props.onSubmit(fakeEvent);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // snapshots are awesome! this one is checking whether Required spans are properly displayed

});
//

// ****
// OTHER TESTS - ENZYME
// ****
test('should display error when letters are input into Value fields', () => { 
    const component = mount(
        <SpendingForm />
    );
    component.find('input[name="value"]').simulate('change', { target: { value: 'test' } });
    component.find('form').simulate('submit', { preventDefault () {} });
    expect(component.find('span').at(1).text()).toEqual("only numbers are acceptable");
});

test('should return proper onSubmit function when fields are filled properly', () => { 
    const callback = sinon.spy();
    const component = mount(
        <SpendingForm addNewSpending={callback} />
    );
    var expectedResult = {
        name: "test",
        value: "123"
    };
    
    component.find('input[name="name"]').simulate('change', { target: { value: 'test' } });
    component.find('input[name="value"]').simulate('change', { target: { value: '123' } });
    component.find('button[type="submit"]').simulate('click');
    component.find('form').simulate('submit', { preventDefault () {} });
    sinon.assert.calledWith(callback, expectedResult);
});