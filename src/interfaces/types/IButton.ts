type ButtonColor = 'primary' | 'neutral' | 'white';

export interface IButton {
  colors: ButtonColor;
  text: 'dark' | 'light';
  className?: string;
  event?: () => void;
  children: React.ReactNode;
}
