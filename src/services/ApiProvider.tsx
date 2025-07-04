import {ReactNode} from 'react';
import { QueryClient, QueryClientProvider, keepPreviousData } from '@tanstack/react-query';

export default function PodcastApiProvider({ children }: { children: ReactNode | undefined }) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: 86400000,
        gcTime: 86400000,
        placeholderData: keepPreviousData,
      },
    },
  });

  return <QueryClientProvider client={client} children={children}/>;
}
