import { useQuery } from 'react-query';
import getMyProfile from '../../api/profile/getMyProfile';
import MyProfileTemplate from '../../components/template/MyProfileTemplate/MyProfileTemplate';

const MyProfilePage = () => {
  const { data, isLoading, isError } = useQuery('myprofile', getMyProfile);

  if (isLoading) return <p>로딩 중</p>;
  if (isError) return <p>에러 발생</p>;

  console.log(data);

  return <MyProfileTemplate data={data} />;
};

export default MyProfilePage;
