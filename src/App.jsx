import { useCallback, useEffect, useState } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isErrorAtom } from './recoil/atom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
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
import CategoryEditPage from './pages/CategoryPage/CategoryEditPage';
import FeedUploadPage from './pages/FeedUploadPage/FeedUploadPage';
import EditFeedPage from './pages/EditFeedPage/EditFeedPage';
import { darkTheme, lightTheme } from './styles/theme';
import themeState from './recoil/theme';

const App = () => {
  const setIsError = useSetRecoilState(isErrorAtom);
  const [heightSize, setHeightSize] = useState(window.innerHeight * 0.01);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
    },
    queryCache: new QueryCache({
      onSuccess: (resData) => {
        if (resData.status === 404) {
          setIsError(true);
          toast.error(
            `서버에 문제가 있습니다 :( !
          잠시 후 시도해 주세요.`,
            {
              theme: 'dark',
              position: 'top-center',
              autoClose: 3000,
            },
          );
        }
      },
    }),
  });

  const setScreenSize = () => {
    document.documentElement.style.setProperty('--vh', `${heightSize}px`);
  };

  const setScreenResize = useCallback(() => {
    setHeightSize(window.innerHeight * 0.01);
  }, [heightSize]);

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenResize);
    return () => {
      window.removeEventListener('resize', setScreenResize);
    };
  }, [heightSize]);

  const [themeMode, setThemeMode] = useRecoilState(themeState);
  const themeType = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeType}>
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
              <Route path='/category/edit/:id' element={<CategoryEditPage />} />
              <Route path='/timer' element={<TimerPage />} />
              <Route path='/chat' element={<ChatPage />} />
              <Route path='/chatdetail' element={<ChatDetailPage />} />
              <Route
                path='/followers/:accountname'
                element={<FollowerPage />}
              />
              <Route
                path='/followings/:accountname'
                element={<FollowingPage />}
              />
              <Route path='/search' element={<SearchPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/feed/upload' element={<FeedUploadPage />} />
            <Route path='/feed/edit/:id' element={<EditFeedPage />} />
          </Routes>
          <ReactQueryDevtools />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
