import React from 'react';

// Using "Stateless Functional Components"
export default function(idea) {
  return (
    <div className="idea-details">      
      <div className="details">
        <h1>{idea.title}</h1>
        <h3>Id: {idea.id}</h3>
        <h3>Details: {idea.body}</h3>
        <small>Created date: {idea.created_date}</small>        
      </div>
    </div>
  );
}
