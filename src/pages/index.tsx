import { Link } from '@/components/link';
import React from 'react';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">Sign In</Link>
    </div>
  );
};

Home.getLayout = (page: React.ReactNode) => page;

export default Home;
