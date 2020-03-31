import React, { Component } from 'react';
import { useParams, Router } from 'react-router-dom';

class IssueDetail extends Component {
    
    render() {
        const { issue } = this.props;
        console.log(issue);
        return(
            // <Router issue={issue.number}>
            //     <h4>{issue.title}</h4>
            //     <p>{issue.number}</p>
            //     <p>{issue.body}</p>
            // </Router>
            <div>Hey</div>
        );
    };
};

export default IssueDetail;