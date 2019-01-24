import React from 'react';
import SpendingsTable from '../SpendingsTable.js';
//import { mount} from 'enzyme';
import renderer from 'react-test-renderer';


// ****
// SNAPSHOT UI TESTS - JEST
// ****
test('should render initial, empty layout', () => {
    const component = renderer.create(
        <SpendingsTable/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('should to render some data in the table', () => {
    const DATA = [
        {
          key: 0,
          datestamp: "01/20/2019",
          name: "ticket",
          value: 3.2
        },
        {
          key: 1,
          datestamp: "01/20/2019",
          name: "magazine",
          value: 30
        },
        {
          key: 2,
          datestamp: "01/20/2019",
          name: "pint beer",
          value: 10
        },
        {
          key: 3,
          datestamp: "01/20/2019",
          name: "course",
          value: 45
        },
        {
          key: 4,
          datestamp: "01/19/2019",
          name: "lol",
          value: 35
        }
      ];
    const component = renderer.create(
        <SpendingsTable spendingData={DATA}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

