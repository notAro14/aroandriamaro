import { FC } from 'react';

import type { ToggleTheme } from './use-toggle-theme.hook';
import { ToggleThemeContext } from './use-toggle-theme.hook';

const ToggleThemeProvider: FC<{ value: ToggleTheme }> = ({
  children,
  value,
}) => {
  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeProvider;
