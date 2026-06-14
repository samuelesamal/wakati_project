/// <reference types="react" />

/**
 * Ambient declarations for Iconify web components so TypeScript
 * doesn't complain about unknown JSX elements.
 */
declare namespace JSX {
  interface IntrinsicElements {
    'iconify-icon': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        inline?: boolean;
        flip?: string;
        rotate?: string | number;
      },
      HTMLElement
    >;
  }
}
