import React, { Component } from 'react';
import Issue from './Issue.jsx';
import IssueDetail from './IssueDetail.jsx';

class IssueList extends Component {
  
    state = {
        issues: []
    };
    
    loadData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        console.log(data);
        return data;
    };

    async componentDidMount() {
        const issuesData = await this.loadData();
        
        this.setState({
          issues: issuesData
        });
    }

    render() {
        
        return(
            <div>
                {
                this.state.issues.map(issue => (
                    <div className="IssueAsList">
                        <h3>{issue.title}</h3>
                        <a href={issue.number}>{issue.number}</a>
                    </div>
                    
                ))}
                
            </div>
        );
    };
};

export default IssueList;