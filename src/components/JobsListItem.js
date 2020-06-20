import React, { Component } from 'react';
import './JobsListItem.css';

class JobsListItem extends Component {
    render() {
        return (
            <div className="JobsListItem">
                <div className="left">
                    <b>Job Title</b>
                    <div>Company</div>
                </div>
                <div className="right">
                    <b>Type</b>
                    <div>Timestamp</div>
                </div>
            </div>
        )
    }
}

export default JobsListItem;