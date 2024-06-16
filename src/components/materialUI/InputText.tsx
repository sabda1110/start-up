'use client';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const InputText: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '100%',
          '@media (max-width:600px)': { m: 0, width: '100%' }
        }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Jenis"
        variant="outlined"
        sx={{ width: '100%', borderRadius: '200px' }}
        className=""
      />
    </Box>
  );
};

export default InputText;
