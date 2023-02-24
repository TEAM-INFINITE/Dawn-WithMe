import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import SearchCard from '../../molecules/SearchCard/SearchCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import SearchWrapper from './styled';

const SearchTemplate = ({
  onChangeSearch,
  searchResultData,
  keyword,
  isLoading,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar
          cont='back'
          usersearch
          onChangeSearch={onChangeSearch}
          keyword={keyword}
        />
      </HeaderWrapper>
      <MainWrapper>
        <SearchWrapper>
          {isLoading && <LoadingSpinner />}
          {searchResultData?.map((user) => (
            <SearchCard key={user._id} user={user} keyword={keyword} />
          ))}

          {keyword && searchResultData?.length === 0 && (
            <p>검색된 이용자가 없습니다.</p>
          )}
        </SearchWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default SearchTemplate;
