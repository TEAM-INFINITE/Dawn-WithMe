import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import FeedPage from './pages/FeedPage/FeedPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import FeedDetailPage from './pages/FeedPage/FeedDetailPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/profile' element={<HomePage />} />
          <Route path='/feeddetail/:id' element={<FeedDetailPage />} />
          <Route path='/category/:name' element={<CategoryPage />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
