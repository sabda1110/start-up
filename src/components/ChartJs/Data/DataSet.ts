export const linerData = {
  labels: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  datasets: [
    {
      label: 'Pekerjaan',
      data: [100, 200, 400, 300, 500, 500, 700],
      backgroundColor: 'rgba(255, 255, 132, 0.5)',
      borderColor: 'rgba(255, 255, 132, 1)',
      borderWidth: 1,
      tension: 0.5
    }
  ]
};

export const pieData = {
  labels: ['Pendapatan', 'Pengeluaran'],
  datasets: [
    {
      label: 'Keuangan',
      data: [200000, 100000],
      backgroundColor: [`#559BED`, '#62D2FF'],
      hoverOffset: 4
    }
  ]
};
