import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Text setup. Enzyme Adapter to react 16 and JSDOM 

configure({ adapter: new Adapter() });
