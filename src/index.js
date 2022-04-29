import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
