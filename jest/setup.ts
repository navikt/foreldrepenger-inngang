import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

(global as any).appSettings = {};

Enzyme.configure({ adapter: new Adapter() });
