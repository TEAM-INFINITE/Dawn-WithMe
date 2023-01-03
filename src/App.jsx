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
import ProfileSettingPage from './pages/ProfileSettingPage/ProfileSettingPage';
import SplashPage from './pages/SplashPage/SplashPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ChatDetailPage from './pages/ChatPage/ChatDetailPage';
import MyProfilePage from './pages/ProfilePage/MyProfilePage';
import TimerPage from './pages/TimerPage/TimerPage';
import FeedPage from './pages/FeedPage/FeedPage';
import UserProfilePage from './pages/ProfilePage/UserProfilePage';
import FollowerPage from './pages/FollowPage/FollowersPage';
import FollowingPage from './pages/FollowPage/FollowingsPage';
import SearchPage from './pages/SearchPage/SearchPage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NotAuthRoutes from './router/NotAuthRoutes';
import PrivateRoute from './router/PrivateRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<NotAuthRoutes />}>
            <Route path='/' element={<SplashPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/profilesetting' element={<ProfileSettingPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/feed' element={<FeedPage />} />
            <Route path='/feeddetail/:id' element={<FeedDetailPage />} />
            <Route path='/myprofile' element={<MyProfilePage />} />
            <Route
              path='/myprofile/editprofile'
              element={<EditProfilePage />}
            />
            <Route
              path='/userprofile/:accountname'
              element={<UserProfilePage />}
            />
            <Route path='/category/:name' element={<CategoryPage />} />
            <Route
              path='/category/:name/:id'
              element={<CategoryDetailPage />}
            />
            <Route path='/category/post' element={<CategoryPostPage />} />
            <Route path='/timer' element={<TimerPage />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/chatdetail' element={<ChatDetailPage />} />
            <Route path='/followers/:accountname' element={<FollowerPage />} />
            <Route
              path='/followings/:accountname'
              element={<FollowingPage />}
            />
            <Route path='/search' element={<SearchPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
