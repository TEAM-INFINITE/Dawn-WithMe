import { useState } from 'react';
import { useQuery } from 'react-query';
import getSearchUser from '../../api/search/getSearchUser';
import SearchTemplate from '../../components/template/SearchTemplate/SearchTemplate';
import useDebounceValue from '../../hooks/useDebounceValue';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');

  const debouncedKeyword = useDebounceValue(keyword, 500);

  const { data, isLoading } = useQuery(
    ['searchUser', debouncedKeyword],
    () => getSearchUser(keyword),
    {
      enabled: !!debouncedKeyword,
      select: (result) =>
        result
          .filter((user) => user.username.includes(debouncedKeyword))
          .slice(0, 10),
    },
  );

  const onChangeSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <SearchTemplate
      onChangeSearch={onChangeSearch}
      searchResultData={data}
      keyword={keyword}
      isLoading={isLoading}
    />
  );
};

export default SearchPage;
