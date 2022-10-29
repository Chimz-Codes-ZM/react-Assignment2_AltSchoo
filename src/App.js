import React from 'react';
import './style.css';
import Home from './Components/Home.js';
import Users from './Components/Users.js';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import History from './Components/History.js'
import Broadcom from './Components/Broadcom.js'
import Fischer from './Components/Fischer.js'
import { Routes, Route } from 'react-router-dom';
import NoMatch from './Components/NoMatch.js';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="broadcom" element={<Broadcom />} />
            <Route path="fischer" element={<Fischer />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
