import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import Alert from '../../molecules/Alert/Alert';
import Modal from '../../molecules/Modal/Modal';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CategoryDetailFeed from '../../organisms/CategoryDetailFeed/CategoryDetailFeed';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryDetailTemplateWrapper from './styled';

const CategoryDetailTemplate = ({
  detailData,
  isLoading,
  modal,
  alert,
  isError,
  onClickMoreHandler,
  onClickModalListHandler,
  onClickAlertEventHandler,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <CategoryDetailTemplateWrapper>
          {!isLoading && !isError && (
            <CategoryDetailFeed
              data={detailData}
              onClickMoreHandler={onClickMoreHandler}
            />
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </CategoryDetailTemplateWrapper>
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

export default CategoryDetailTemplate;
