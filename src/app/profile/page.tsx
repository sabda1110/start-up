'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

const page = () => {
  return (
    <div>
      <h1>Halaman Profile</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default page;
