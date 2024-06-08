'use client';

import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const DateMaterial = () => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (newValue) {
      console.log('Formatted Date:', newValue.format('YYYY-MM-DD')); // Tampilkan hanya tahun-bulan-tanggal
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          value={value}
          onChange={handleDateChange}
          className=" rounded-full "
          label="Tanggal Deadline"
          sx={{
            width: '100%',
            '@media (max-width:600px)': { width: '100%' },
            borderRadius: '200px'
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateMaterial;
