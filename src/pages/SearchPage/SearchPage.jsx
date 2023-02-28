import { useState } from 'react';
import { useQuery } from 'react-query';
import getSearchUser from '../../api/search/getSearchUser';
import SearchTemplate from '../../components/template/SearchTemplate/SearchTemplate';
import useDebounceValue from '../../hooks/useDebounceValue';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [view, setView] = useState(1);

  const debouncedKeyword = useDebounceValue(keyword, 500);

  const { data, isLoading } = useQuery(
    ['searchUser', debouncedKeyword],
    () => getSearchUser(keyword),
    {
      enabled: !!debouncedKeyword,
      select: (result) =>
        result
          .filter((user) => user.username.includes(debouncedKeyword))
          .slice(0, view * 9),
    },
  );

  const onChangeSearch = (e) => {
    setKeyword(e.target.value);
    setView(1);
  };

  const onClickMore = () => {
    setView(view + 1);
  };

  return (
    <SearchTemplate
      onChangeSearch={onChangeSearch}
      onClickMore={onClickMore}
      searchResultData={data}
      keyword={keyword}
      view={view}
      isLoading={isLoading}
    />
  );
};

export default SearchPage;
