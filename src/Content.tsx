import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

import { VigilantiumIcon } from './CustomIcons';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Desempeño adaptable',
    description:
      'Nuestros escaneos se ajustan a las necesidades específicas de tu infraestructura, mejorando la eficiencia y detectando vulnerabilidades con precisión.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Construido para ser duradero',
    description:
      'Ofrecemos soluciones de seguridad que garantizan protección a largo plazo, con un enfoque en la identificación temprana de riesgos y vulnerabilidades críticas.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Experiencia excepcional de usuario',
    description:
      'Integra nuestros servicios de escaneo en tus operaciones con una plataforma intuitiva y fácil de usar, que prioriza la seguridad sin complicaciones.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Funcionalidad innovadora',
    description:
      'Mantente a la vanguardia con herramientas de escaneo que detectan nuevas amenazas, asegurando que tu infraestructura esté protegida siempre.',
  },
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex', alignSelf: 'center' } }}>
        <VigilantiumIcon />
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}