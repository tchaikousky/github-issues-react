import React from 'react';
import './App.css';
import IssueList from './components/IssueList';

function App() {
  
  return (
    <div className="App">
      <IssueList />
    </div>
  );
}

export default App;

// API Link: https://api.github.com/repos/facebook/create-react-app/issues
// Assignment
// Use the Github Issues API to make a page that looks similar to this: https://github.com/facebookincubator/create-react-app/issues
// Focus just the list of issues, ignore the search/filter/etc..
// App Structure
// Scaffold the app with create-react-app
// Remove the default information from App.js
// Leave App.js as a FUNCTIONAL component
// Create a CLASS based component called `IssueList`
// This component will hold the array of issues from the API
// The issues will be stored in the component's STATE
// This component will pass data for each issue as a PROP into a child component
// Create a FUNCTIONAL component called `Issue`
// This is the child component of `IssueList`
// It will receive issue data as a PROP
// This component will render the issue data 
// The component should show the issue title, URL (as a link!), and body
// Bonus
// Add styling. CSS/Bloomer/Bootstrap/etc...