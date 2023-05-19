import { useState } from 'react';
import { useRecoilState } from 'recoil';
import themeState from '../../../recoil/theme';
import Img from '../../atoms/Img/Img';
import PostMenuWrapper from './styled';
import PlusButton from '../../../assets/images/icon-plus-btn.png';
import LightPlusButton from '../../../assets/images/icon-plus-light-btn.png';
import PostMenuButton from '../../atoms/Button/PostMemuButton/PostMenuButton';
import PostMenuOnButton from '../../atoms/Button/PostMemuButton/PostMenuOnButton';
import ModeToggleBtn from '../ModeToggleBtn/ModeToggleBtn';

const PostMenu = ({ postPath }) => {
  const [isMenu, setIsMenu] = useState(false);

  const onClickMenuHandler = () => {
    setIsMenu((prev) => !prev);
  };

  const [themeMode, setThemeMode] = useRecoilState(themeState);

  return (
    <PostMenuWrapper className={isMenu && 'active'}>
      <ModeToggleBtn />
      <PostMenuButton to={postPath}>등록</PostMenuButton>
      <PostMenuButton to='/timer'>타이머</PostMenuButton>
      <PostMenuOnButton onClick={onClickMenuHandler}>
        {themeMode === 'light' ? (
          <Img src={LightPlusButton} alt='메뉴펼치기 버튼' />
        ) : (
          <Img src={PlusButton} alt='메뉴펼치기 버튼' />
        )}
      </PostMenuOnButton>
    </PostMenuWrapper>
  );
};

export default PostMenu;
