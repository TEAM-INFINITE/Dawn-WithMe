import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import NotFoundTemplateWrapper from './styled';
import logo404 from '../../../assets/images/404-logo.png';

const NotFoundTemplate = () => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper>
      <MainWrapper>
        <NotFoundTemplateWrapper>
          <Img src={logo404} />
          <p>페이지를 찾을 수 없습니다 :&#40;</p>
          <Link to={-1}>이전 페이지</Link>
        </NotFoundTemplateWrapper>
      </MainWrapper>
    </>
  );
};

export default NotFoundTemplate;
