import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { mount, shallow, configure } from 'enzyme';
import axios from 'axios';
 
import TestingComponent, { Counter, dataReducer } from '../../src/pages/testingComponent';
 
const list = ['a', 'b', 'c'];

configure({adapter: new Adapter()});
describe('TestingComponent', () => {

    test('snapshot renders', () => {
      const component = renderer.create(<TestingComponent />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
   
    it('renders the inner Counter', () => {
      const wrapper = mount(<TestingComponent />);
      expect(wrapper.find(Counter).length).toEqual(1);
    });

    it('passes all props to Counter', () => {
        const wrapper = mount(<TestingComponent />);
        const counterWrapper = wrapper.find(Counter);
     
        expect(counterWrapper.find('p').text()).toEqual('0');
      });
     
    it('increments the counter', () => {
        const wrapper = mount(<TestingComponent />);

        wrapper
            .find('button')
            .at(0)
            .simulate('click');

        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toBe('1');
    });

    it('decrements the counter', () => {
        const wrapper = mount(<TestingComponent />);

        wrapper
            .find('button')
            .at(1)
            .simulate('click');

        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toBe('-1');
    });

    it('fetches async data', () => {
        const promise = new Promise((resolve, reject) =>
            setTimeout(
                () =>
                    resolve({
                        data: {
                            hits: [
                                { objectID: '1', title: 'a' },
                                { objectID: '2', title: 'b' },
                            ],
                        },
                    }),
                100
            )
        );

        const wrapper = mount(<TestingComponent />);

        expect(wrapper.find('li').length).toEqual(0);

        promise.then(() => {
            expect(wrapper.find('li').length).toEqual(2);
        });
    });

    it('fetches async data with axios, this process is called mocking', done => {
        const promise = new Promise((resolve, reject) =>
            setTimeout(
                () =>
                    resolve({
                        data: {
                            hits: [
                                { objectID: '1', title: 'a' },
                                { objectID: '2', title: 'b' },
                            ],
                        },
                    }),
                100
            )
        );

        axios.get = jest.fn(() => promise);

        const wrapper = mount(<TestingComponent />);

        expect(wrapper.find('li').length).toEqual(0);

        // Mock the promise with its result
        promise.then(() => {
            setImmediate(() => {
                wrapper.update();
                expect(wrapper.find('li').length).toEqual(2);

                // Always make sure to clean up your mocks in testing, 
                // otherwise another test may run into a mocked function.
                axios.get.mockClear();

                // Tell our Jest test runner that we are testing
                //  asynchronous logic in our test case
                done();
            });
        });
    });

    it('fetches async data but fails', done => {
        const promise = new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error('Whoops!')), 100)
        );

        axios.get = jest.fn(() => promise);

        const wrapper = mount(<TestingComponent />);

        promise.catch(() => {
            setImmediate(() => {
                wrapper.update();

                expect(wrapper.find('li').length).toEqual(0);
                expect(wrapper.find('.error').length).toEqual(1);

                axios.get.mockClear();
                done();
            });
        });
    });
});