import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import LoginPage from './pages/LoginPage/LoginPage';
import FreeBoardPage from './pages/FreeBoardPage/FreeBoardPage';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/freeboard' element={<FreeBoardPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/profile' element={<HomePage />} />
          <Route path='/feeddetail/:id' element={<HomePage />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
