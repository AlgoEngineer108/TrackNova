const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? '#0b1020' : '#f3f5ff',
    paper: darkMode ? '#141b33' : '#ffffff',
  },
  primary: {
    main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? '#8b9dff' : '#5b4bff'),
  },
  secondary: {
    main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? '#2de2c0' : '#00b894'),
  },
  neutral: {
    main: '#8892b0',
  },
  geometry: {
    main: '#ff6bd6',
  },
  alwaysDark: {
    main: '#0b1020',
  },
});
