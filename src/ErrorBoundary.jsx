import React, { useState } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  function componentDidCatch(error, errorInfo) {
    // Update state to indicate an error has occurred
    setHasError(true);
    // Log the error to an error reporting service
    console.error(error, errorInfo);
  }

  if (hasError) {
    // Render an error message or fallback UI
    return <h1>Something went wrong.</h1>;
  }

  // Render the child components normally
  return props.children;
}

export default ErrorBoundary;