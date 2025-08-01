import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-red-700 font-bold text-xl">
          Something went wrong. Please try again later.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
