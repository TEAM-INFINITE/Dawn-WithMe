import { useState } from 'react';
import { useQuery } from 'react-query';
import getSearchUser from '../../api/search/getSearchUser';
import SearchTemplate from '../../components/template/SearchTemplate/SearchTemplate';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  // 유저 검색
  const {
    data: searchResultData,
    isLoading,
    isError,
  } = useQuery(['searchUser', keyword], () => {
    return getSearchUser(keyword);
  });

  const onChangeSearch = (event) => {
    const searchText = event.target.value;
    if (!searchText) {
      setSearchResult(null);
      return;
    }
    setSearchResult(searchResultData);
    setKeyword(searchText);
  };

  return (
    <SearchTemplate
      onChangeSearch={onChangeSearch}
      searchResult={searchResult}
      keyword={keyword}
      isLoading={isLoading}
    />
  );
};

export default SearchPage;
