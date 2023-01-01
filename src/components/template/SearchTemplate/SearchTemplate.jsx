import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import SearchCard from '../../molecules/SearchCard/SearchCard';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import SearchWrapper from './styled';

const SearchTemplate = ({ onChangeSearch, searchResult, keyword }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' usersearch onChangeSearch={onChangeSearch} />
      </HeaderWrapper>
      <MainWrapper>
        <SearchWrapper>
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
        </SearchWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default SearchTemplate;
