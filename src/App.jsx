import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { CategoriesPage } from './pages/Categories/index.jsx';
import { PronunciationPage } from './pages/Pronunciation/index.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <CategoriesPage />,
  },
  {
    path: '/pronunciation',
    element: <PronunciationPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
