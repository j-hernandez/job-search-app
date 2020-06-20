import React, { Component } from 'react';
import './Jobs.css';
import JobsListItem from './JobsListItem';
import Job from './Job';
import {Switch, Route} from 'react-router-dom';

import axios from 'axios';

class Jobs extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        axios.get('/api/jobs').then((response) => {
            this.setState({
                jobs: response.data
            })
        })
    }

    render() {
        const jobsJSX = this.state.jobs.map((job, index) => {
            return <JobsListItem key={index} {...job} />
        })
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Jobs In Atlanta</h1>
                        <p className="App-subtitle">Click to explore jobs</p>
                    </header>
                </div>
                <div className="Jobs">
                    <Switch>
                        <Route 
                            exact 
                            path="/jobs" 
                            render={() => jobsJSX} />
                        <Route path="/jobs/:id" component={Job} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Jobs;