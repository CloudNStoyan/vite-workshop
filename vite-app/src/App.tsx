import { useEffect, useState, JSX } from 'react';
import logoUrl from 'src/logo.png';
import { Button, CssBaseline } from '@mui/material';

import { formatDate } from '~helpers';

export const App = (): JSX.Element => {
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    void fetch('http://localhost:3001/')
      .then((res) => res.text())
      .then(setMessage);
  }, []);

  return (
    <div className="text">
      <CssBaseline />
      <div className="text-center">Hello Vite</div>
      <div data-testid="date-label">{formatDate(new Date())}</div>
      {message && <div data-testid="server-message">{message}</div>}
      <div>
        <img src={logoUrl} alt="logo" />
      </div>
      <div>
        <Button variant="outlined" size="small">
          Kitten
        </Button>
      </div>
    </div>
  );
};
