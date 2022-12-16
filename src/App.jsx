import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import FreeBoardPage from './pages/FreeBoardPage/FreeBoardPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/freeboard' element={<FreeBoardPage />} />
          <Route path='/profile' element={<Home />} />
          <Route path='/feeddetail/:id' element={<Home />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
