import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CategoryFeedCard from '../../organisms/CategoryFeedCard/CategoryFeedCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryTemplateWrapper from './styled';
import NewAlertModal from '../../molecules/NewAlertModal/NewAlertModal';
import NewModal from '../../molecules/NewModal/NewModal';

const CategoryTemplate = ({
  postListData,
  isModal,
  onClickMoreHandler,
  onClickModalListHandler,
  onClickAlertEventHandler,
  textArray,
  isAlert,
  alertText,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <CategoryTemplateWrapper>
          <ul>
            {postListData.map((item) => (
              <CategoryFeedCard
                data={item}
                key={item.id}
                onClickMoreHandler={onClickMoreHandler}
              />
            ))}
          </ul>
        </CategoryTemplateWrapper>
        <TabMenu />
      </MainWrapper>
      {isModal && (
        <NewModal
          textArray={textArray}
          onClickModalListHandler={onClickModalListHandler}
        />
      )}
      {isAlert && (
        <NewAlertModal
          alertText={alertText}
          onClickAlertEventHandler={onClickAlertEventHandler}
        />
      )}
    </>
  );
};

export default CategoryTemplate;
