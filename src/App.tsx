import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      <p>Welcome, {WebApp.initDataUnsafe.user?.first_name}</p>
    </div>
  );
}

export default App;
