import React from 'react';
import Navbar from '../Navbar';

export default function LayoutHome({ children, title }) {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
          <div className="max-w-screen-md mb-8">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </>
  );
}
