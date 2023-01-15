import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CategoryFeedCard from '../../organisms/CategoryFeedCard/CategoryFeedCard';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryTemplateWrapper from './styled';
import Alert from '../../molecules/Alert/Alert';
import Modal from '../../molecules/Modal/Modal';

const CategoryTemplate = ({
  postListData,
  onClickMoreHandler,
  onClickModalListHandler,
  onClickAlertEventHandler,
  alert,
  modal,
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
      {modal.isActive.post && (
        <Modal onClickModalListHandler={onClickModalListHandler} />
      )}
      {alert.isActive.post && (
        <Alert onClickAlertEventHandler={onClickAlertEventHandler} />
      )}
    </>
  );
};

export default CategoryTemplate;
