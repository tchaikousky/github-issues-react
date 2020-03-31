import React, { Component } from 'react';
import Issue from './Issue.jsx';

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
                        <Issue key={issue.number} issue={issue} />
                    </div>
                ))}
            </div>
        );
    };
};

export default IssueList;