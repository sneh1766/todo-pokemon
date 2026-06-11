import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import UserDashboard from './components/UserDashboard';
import FocusTracker from './components/FocusTracker';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <Header />
      
      <main style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Task 5 Autofocus Engine component at the top */}
        <FocusTracker />
        
        {/* Task 1 & Task 2/3 User API Components beneath */}
        <RegistrationForm />
        <UserDashboard />
      </main>

      <Footer />
    </div>
  );
}

export default App;