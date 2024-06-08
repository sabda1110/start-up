'use client';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Link from 'next/link';

const BreadCrumbs: React.FC = () => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className=" hover:border-b hover:border-black" href="/dashboard-worker">
          Dashboard
        </Link>
        <Link className=" hover:border-b hover:border-black" href={'/project'}>
          Project
        </Link>

        <Typography color="text.primary">Select Project</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
