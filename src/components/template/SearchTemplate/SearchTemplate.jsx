import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import SearchCard from '../../molecules/SearchCard/SearchCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import SearchWrapper, { UserMore, UserNotMessage } from './styled';

const SearchTemplate = ({
  onChangeSearch,
  onClickMore,
  searchResultData,
  keyword,
  view,
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
          {keyword &&
            searchResultData?.map((user) => (
              <SearchCard key={user._id} user={user} keyword={keyword} />
            ))}
          {keyword &&
            searchResultData?.length > 0 &&
            searchResultData?.length >= view * 9 && (
              <UserMore onClick={onClickMore}>유저 더보기</UserMore>
            )}
          {keyword && searchResultData?.length === 0 && (
            <UserNotMessage>검색된 이용자가 없습니다.</UserNotMessage>
          )}
        </SearchWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default SearchTemplate;
