import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import themeState from '../recoil/theme';

const useTheme = () => {
  const [themeMode, setThemeMode] = useRecoilState(themeState);

  const themeChange = useCallback(
    (e) => {
      setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

      if (themeMode === 'light') {
        e.target.textContent = 'LIGHT';
      } else {
        e.target.textContent = 'DARK';
      }
    },
    [themeMode],
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeMode));
  }, [themeMode]);

  return themeChange;
};

export default useTheme;
