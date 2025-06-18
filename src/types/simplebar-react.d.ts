declare module 'simplebar-react' {
  import { ComponentProps, forwardRef } from 'react';

  interface SimpleBarProps {
    autoHide?: boolean;
    scrollableNodeProps?: any;
    clickOnTrack?: boolean;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  const SimpleBar: React.ForwardRefExoticComponent<SimpleBarProps & React.RefAttributes<HTMLElement>>;

  export default SimpleBar;
  export type { SimpleBarProps as Props };
}
