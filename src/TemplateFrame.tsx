import * as React from 'react';
import {
  createTheme,
  ThemeProvider,
  PaletteMode,
  styled,
} from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ToggleColorMode from './ToggleColorMode';
import getSignInSideTheme from './theme/getSignInSideTheme';
import logoIcono from './assets/logoicono.png';

const IconoLogo = () => {
  return (
    <img src={logoIcono} alt="Logo" style={{ width: "30px", height: "30px" }} />
  );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  backgroundImage: 'none',
  zIndex: theme.zIndex.drawer + 1,
  flex: '0 0 auto',
}));

interface TemplateFrameProps {
  showCustomTheme: boolean;
  toggleCustomTheme: (theme: boolean) => void;
  mode: PaletteMode;
  toggleColorMode: () => void;
  children: React.ReactNode;
}

export default function TemplateFrame({
  mode,
  toggleColorMode,
  children,
}: TemplateFrameProps) {
  const signInSideTheme = createTheme(getSignInSideTheme(mode));

  return (
    <ThemeProvider theme={signInSideTheme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <StyledAppBar>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              p: '8px 12px',
            }}
          >
            <Button
              variant="text"
              size="medium"
              aria-label="Back to templates"
              startIcon={<IconoLogo />}
              component="a"
              href="https://vigilantium.com/"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Visitar Vigilantium
            </Button>
            <IconButton
              size="small"
              aria-label="Back to templates"
              component="a"
              href="/material-ui/getting-started/templates/"
              sx={{ display: { xs: 'auto', sm: 'none' } }}
            >
              <IconoLogo />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ToggleColorMode
                data-screenshot="toggle-mode"
                mode={mode}
                toggleColorMode={toggleColorMode}
              />
              <Box sx={{textAlign: 'center'}}>
                <Typography sx={{ color: mode === 'dark' ? 'white' : 'black' }}>
                  Modo
                </Typography>
                <Typography  sx={{ color: mode === 'dark' ? 'white' : 'black' }}>
                  {mode === 'dark' ? 'Oscuro' : 'Claro'}
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </StyledAppBar>
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}