import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import FeedDetailPage from './pages/FeedPage/FeedDetailPage';
import CategoryDetailPage from './pages/CategoryPage/CategoryDetailPage';
import CategoryPostPage from './pages/CategoryPage/CategoryPostPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SplashPage from './pages/SplashPage/SplashPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ChatDetailPage from './pages/ChatPage/ChatDetailPage';
import MyProfilePage from './pages/ProfilePage/MyProfilePage';
import FeedPage from './pages/FeedPage/FeedPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<SplashPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/feeddetail/:id' element={<FeedDetailPage />} />
          <Route path='/myprofile' element={<MyProfilePage />} />
          <Route path='/category/:name' element={<CategoryPage />} />
          <Route path='/category/:name/:id' element={<CategoryDetailPage />} />
          <Route path='/category/post' element={<CategoryPostPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/chatdetail' element={<ChatDetailPage />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
