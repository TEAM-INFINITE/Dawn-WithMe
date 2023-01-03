import { useQuery } from 'react-query';
import getUserInfo from '../../api/user/getUserInfo';
import FeedUploadTemplate from '../../components/template/FeedUploadTeplate/FeedUploadTemplate';

const FeedUploadPage = () => {
  // 유저 정보 불러오기
  const { data: userdata, isLoading: isProfileDataLoading } = useQuery(
    ['userInfo'],
    getUserInfo,
  );
  if (isProfileDataLoading) return <p>로딩 중...</p>;
  const { user } = userdata;

  return <FeedUploadTemplate user={user} />;
};

export default FeedUploadPage;
