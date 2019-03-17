import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';
import mockAxios from 'axios'
import DATA from '../data/testdata';
mockAxios.default.get.mockImplementation(() =>
Promise.resolve({ data: "" })
);
mockAxios.default.mockImplementation(() =>
Promise.resolve({  })
);
// ****
// SNAPSHOT UI TESTS - JEST
// ****
test('should render initial layout', () => {
    const component = renderer.create(
        <App initialData={DATA}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
   
});


// should change selected day and loaded data by clicking on arrows 
test('should change selected date when buttons are pressed', () => {
    const component = renderer.create(
        <App initialData={DATA}/>
    );

    component.root.findByProps({ id: "buttonNext" }).props.onClick();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.root.findByProps({ id: "buttonPrevious" }).props.onClick();    
    component.root.findByProps({ id: "buttonPrevious" }).props.onClick(); 
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


// should re-calculate spendings on monthly budget change to another value or 0
test('should re-calculate spendings on monthly budget change', () => {
    const component = renderer.create(
        <App initialData={DATA}/>
    );
    component.root.findByProps({ id: "monthlyBudget" }).props.onChange({ target: { value: 2615 } });
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.root.findByProps({ id: "monthlyBudget" }).props.onChange({ target: { value: 0 } });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


// adding spending and generating new key with EMPTY data 
test('should add new spending with empty DATA and new budget re-calculation', () => {
    
    const component = renderer.create(
        <App initialData={[]}/>
    );
    
    component.root.instance.addNewSpending({ name: "test", value: 186  });
    component.root.instance.addNewSpending({ name: "test2", value: 14  });
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


