import React, { Component } from "react";
import JobCard from "../components/JobCard.component";

const dropdownStyle = {
    maxWidth: '10rem',
    float: 'right',
    marginTop: '1rem'
}

class JobList extends Component {
  
    constructor() {
        super()
        this.state = {
            jobs: [],
            sortBy: ''
        }
    }

    componentDidMount() {
        this.fetchJobs()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sortBy !== this.state.sortBy) {
            const sortedJobs = this.mergeSort([...this.state.jobs], this.state.sortBy)
            this.setState({
                jobs: sortedJobs
            })
        }
    }

    mergeSort(array, sortBy) {
        if (array.length === 1) {
            return array
        }

        const middle = Math.floor(array.length / 2)
        const left = array.slice(0, middle)
        const right = array.slice(middle)

        return this.merge(
            this.mergeSort(left),
            this.mergeSort(right),
            sortBy
        )
    }

    merge(left, right, sortBy) {
        let result = []
        let indexLeft = 0
        let indexRight = 0

        while (indexLeft < left.length && indexRight < right.length) {
            if (this.compareSort(left[indexLeft], right[indexRight], sortBy)) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }

    compareSort(jobLeft, jobRight, sortBy) {
        switch (sortBy) {
            case 'date_asc':
                return jobLeft.date <= jobRight.date
            case 'date_desc':
                return jobLeft.date >= jobRight.date
            case 'price_asc':
                return jobLeft.price <= jobRight.price
            case 'price_desc':
                return jobLeft.price >= jobRight.price
            default:
                return true
        }
    }

    async fetchJobs() {
        try {
            const req = await fetch('http://5cac1d41c85e05001452eef0.mockapi.io/jobs')
            const results = await req.json()
            this.setState({
                jobs: results.jobs
            })
        } catch (error) {
            console.error(error)
        }
    }
    
    render() {
        return (
            <div className="JobList container">
                <div className="row">
                <div className="col-12">
                    <select className="form-control"
                            style={dropdownStyle}
                            value={this.state.sortBy}
                            onChange={e => this.setState({ sortBy: e.target.value })}
                    >
                        <option value="" disabled>
                            Sort by:
                        </option>
                        <option value="date_asc">DATE (OLDEST)</option>
                        <option value="date_desc">DATE (NEWEST)</option>
                        <option value="price_asc">PRICE (LOWEST)</option>
                        <option value="price_desc">PRICE (HIGHEST)</option>
                    </select>
                </div>
                </div>
                <div className="row">
                    {this.state.jobs.map(job => (
                        <div className="col-lg-4 col-12 my-2" key={job.id}>
                            <JobCard destination={job.destination}
                                     origin={job.origin}
                                     price={job.price}
                                     date={job.date}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default JobList;
