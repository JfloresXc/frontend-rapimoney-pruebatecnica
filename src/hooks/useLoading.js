// import { useContext } from 'react';
// import { LoadingContext } from '@/contexts/LoadingContext';

import { useState } from 'react';

export const useLoading = () => {
  // const { loading, setLoading } = useContext(LoadingContext);
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);

  const hideLoading = () => setLoading(false);

  return {
    isLoading: Boolean(loading),
    showLoading,
    hideLoading,
  };
};
