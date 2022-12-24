import { useState } from 'react';

import Img from '../../atoms/Img/Img';
import PostMenuWrapper from './styled';
import PlusButton from '../../../assets/images/icon-plus-btn.png';
import PostMenuButton from '../../atoms/Button/PostMemuButton/PostMenuButton';
import PostMenuOnButton from '../../atoms/Button/PostMemuButton/PostMenuOnButton';

const PostMenu = ({ postPath }) => {
  const [isMenu, setIsMenu] = useState(false);

  const onClickMenuHandler = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <PostMenuWrapper className={isMenu && 'active'}>
      <PostMenuButton to={postPath}>등록</PostMenuButton>
      <PostMenuButton to='/timer'>타이머</PostMenuButton>
      <PostMenuOnButton onClick={onClickMenuHandler}>
        <Img src={PlusButton} />
      </PostMenuOnButton>
    </PostMenuWrapper>
  );
};

export default PostMenu;
