export default {
  MuiUseMediaQuery: {
    defaultProps: {
      noSsr: true,
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: 12,
        transition: 'box-shadow .2s',
        '&.Mui-focused': {
          boxShadow: `0 0 0 3px ${theme.palette.primary.main}33`,
        },
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: 0.2,
        transition: 'transform .15s, box-shadow .15s',
        '&:hover': { transform: 'translateY(-1px)' },
      },
      sizeMedium: {
        height: '42px',
      },
      containedPrimary: ({ theme }) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, #c04bff)`,
        boxShadow: '0 6px 18px rgba(91, 75, 255, 0.35)',
        '&:hover': { boxShadow: '0 10px 24px rgba(91, 75, 255, 0.5)' },
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      rounded: { borderRadius: 16 },
      root: { backgroundImage: 'none' },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 18, boxShadow: '0 8px 30px rgba(40, 40, 120, 0.15)' },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: 'linear-gradient(90deg, #5b4bff 0%, #c04bff 60%, #ff6bd6 100%)',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(91, 75, 255, 0.35)',
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: { '& .MuiIconButton-root': { borderRadius: 12 } },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 12,
        margin: '2px 8px',
        '&.Mui-selected': {
          background: `linear-gradient(90deg, ${theme.palette.primary.main}26, transparent)`,
          borderLeft: `4px solid ${theme.palette.primary.main}`,
        },
      }),
    },
  },
  MuiChip: {
    styleOverrides: { root: { fontWeight: 600, borderRadius: 10 } },
  },
  MuiDrawer: {
    styleOverrides: { paper: { borderRadius: 0 } },
  },
  MuiFormControl: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      enterDelay: 500,
      enterNextDelay: 500,
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        '@media print': {
          color: theme.palette.alwaysDark.main,
        },
      }),
    },
  },
};
