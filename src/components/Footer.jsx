import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '10px', textAlign: 'center', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} Core Developer Portfolio</p>
    </footer>
  );
}

export default Footer;