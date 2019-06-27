import React from 'react';
import { shallow } from 'enzyme';
import JobList from './JobList.page';
import '../setupTest'

describe('compareSort Function', () => {
    it('Should return right comparation on date_asc comparation', () => {
        const wrapper = shallow(<JobList/>)
        const jobListComponent = wrapper.instance()

        const leftData = {
            origin: 'Jakarta',
            destination: 'Denpasar',
            price: 10000000,
            date: 1555110000
        }
        const rightData = {
            origin: 'Solo',
            destination: 'Surabaya',
            price: 15000000,
            date: 1655110000
        }
        const expectedResult = true
        const sortBy = 'date_asc'
        const result = jobListComponent.compareSort(leftData, rightData, sortBy)
        expect(result).toBe(expectedResult)
    })

    it('Should return right comparation on date_desc comparation', () => {
        const wrapper = shallow(<JobList/>)
        const jobListComponent = wrapper.instance()

        const leftData = {
            origin: 'Jakarta',
            destination: 'Denpasar',
            price: 10000000,
            date: 1555110000
        }
        const rightData = {
            origin: 'Solo',
            destination: 'Surabaya',
            price: 15000000,
            date: 1655110000
        }
        const expectedResult = false
        const sortBy = 'date_desc'
        const result = jobListComponent.compareSort(leftData, rightData, sortBy)
        expect(result).toBe(expectedResult)
    })

    it('Should return right comparation on price_asc comparation', () => {
        const wrapper = shallow(<JobList/>)
        const jobListComponent = wrapper.instance()

        const leftData = {
            origin: 'Jakarta',
            destination: 'Denpasar',
            price: 10000000,
            date: 1555110000
        }
        const rightData = {
            origin: 'Solo',
            destination: 'Surabaya',
            price: 15000000,
            date: 1655110000
        }
        const expectedResult = true
        const sortBy = 'date_asc'
        const result = jobListComponent.compareSort(leftData, rightData, sortBy)
        expect(result).toBe(expectedResult)
    })

    it('Should return right comparation on price_desc comparation', () => {
        const wrapper = shallow(<JobList/>)
        const jobListComponent = wrapper.instance()

        const leftData = {
            origin: 'Jakarta',
            destination: 'Denpasar',
            price: 10000000,
            date: 1555110000
        }
        const rightData = {
            origin: 'Solo',
            destination: 'Surabaya',
            price: 15000000,
            date: 1655110000
        }
        const expectedResult = false
        const sortBy = 'price_desc'
        const result = jobListComponent.compareSort(leftData, rightData, sortBy)
        expect(result).toBe(expectedResult)
    })

})
