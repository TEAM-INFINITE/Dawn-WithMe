import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import getSearchUser from '../../api/search/getSearchUser';
import SearchTemplate from '../../components/template/SearchTemplate/SearchTemplate';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');

  // 유저 검색
  // data : 서버에 있는 모든 유저
  const {
    data: searchResultData,
    isLoading,
    isError,
  } = useQuery(['searchUser', keyword], () => getSearchUser(keyword), {
    enabled: !!keyword,
    select: (result) =>
      result.filter((user) => {
        return user.username.includes(keyword);
      }),
  });

  console.log(searchResultData);

  const onChangeSearch = (event) => {
    const searchText = event.target.value;
    setKeyword(searchText);
  };

  return (
    <SearchTemplate
      onChangeSearch={onChangeSearch}
      searchResultData={searchResultData}
      keyword={keyword}
      isLoading={isLoading}
    />
  );
};

export default SearchPage;
