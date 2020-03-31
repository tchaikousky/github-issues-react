import React from 'react';

function Issue(props) {
    const { issue } = props;

    return (
        <div>
            <h3>Issue: {issue.title}</h3>
            <p><a href = {issue.url}>{issue.url}</a></p>
            <p>{issue.body}</p>
        </div>
    );
};

export default Issue;