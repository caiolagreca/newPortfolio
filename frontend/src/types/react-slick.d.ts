declare module 'react-slick' {
    import { Component, HTMLProps } from 'react';
  
    export interface Settings {
      accessibility?: boolean;
      adaptiveHeight?: boolean;
      afterChange?: (currentSlide: number) => void;
      // Add other props as needed
      // Refer to react-slick documentation for full list
    }
  
    export default class Slider extends Component<Settings & HTMLProps<any>> {}
  }
  