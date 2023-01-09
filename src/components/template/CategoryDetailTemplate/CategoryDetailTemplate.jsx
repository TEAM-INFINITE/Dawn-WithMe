import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import NewAlertModal from '../../molecules/NewAlertModal/NewAlertModal';
import NewModal from '../../molecules/NewModal/NewModal';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import CategoryDetailFeed from '../../organisms/CategoryDetailFeed/CategoryDetailFeed';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryDetailTemplateWrapper from './styled';

const CategoryDetailTemplate = ({
  detailData,
  isLoading,
  isModal,
  isAlert,
  isError,
  setIsModal,
  onClickMoreHandler,
  onClickModalListHandler,
  onClickAlertEventHandler,
  textArray,
  alertText,
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
      {isModal && (
        <NewModal
          isModal={isModal}
          setIsModal={setIsModal}
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

export default CategoryDetailTemplate;
