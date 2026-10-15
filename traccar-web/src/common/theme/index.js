import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import dimensions from './dimensions';
import components from './components';

export default (server, darkMode, direction) =>
  useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Poppins,Inter,Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif',
          h6: { fontWeight: 700 },
          button: { fontWeight: 600 },
        },
        shape: { borderRadius: 14 },
        palette: palette(server, darkMode),
        direction,
        dimensions,
        components,
      }),
    [server, darkMode, direction],
  );
