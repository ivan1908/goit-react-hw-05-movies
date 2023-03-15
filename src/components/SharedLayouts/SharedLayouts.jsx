import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {AppBar} from '../AppBar/AppBar';
import { Loader } from '../Loading/Loading';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};