import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string,
    alt: string
  },
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* <img {...image} /> //! This can also be done but not preferred */}
      <img src={image.src} alt={image.alt} />   
      {children}
    </header>
  );
}
