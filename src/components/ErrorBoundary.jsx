import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600 p-8">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
                <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
                <p className="font-mono bg-gray-100 p-4 rounded overflow-auto mb-4">
                    {this.state.error && this.state.error.toString()}
                </p>
                <details className="whitespace-pre-wrap font-mono text-xs text-gray-800">
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                </details>
            </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
