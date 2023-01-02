import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import SearchCard from '../../molecules/SearchCard/SearchCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import SearchWrapper from './styled';

const SearchTemplate = ({
  onChangeSearch,
  searchResult,
  keyword,
  isLoading,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' usersearch onChangeSearch={onChangeSearch} />
      </HeaderWrapper>
      <MainWrapper>
        <SearchWrapper>
          {!isLoading && (
            <ul>
              {searchResult &&
                searchResult.map((user) => {
                  return (
                    <li key={user.accountname}>
                      <SearchCard user={user} keyword={keyword} />
                    </li>
                  );
                })}
            </ul>
          )}
          {isLoading && <LoadingSpinner />}
        </SearchWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default SearchTemplate;
