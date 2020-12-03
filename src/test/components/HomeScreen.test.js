import { shallow } from 'enzyme';
import React from 'react'
import { HomeScreen } from '../../components/home/HomeScreen';

describe('Tests in <HomeScreen />', () => {

    test('should display the component', () => {
        const wrapper = shallow(<HomeScreen selectedTag="all" />);
        expect( wrapper ).toMatchSnapshot();
    })
    

})