import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;

  width: string;
  height: string;
  objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  borderRadius: string;
};

export default function LazyImage({
  src,
  alt,
  width,
  height,
  objectFit,
  borderRadius,
}: Props) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={visible ? src : undefined}
      alt={alt}
      style={{
        minHeight: "200px",
        width: width,
        height: height,
        objectFit: objectFit,
        borderRadius: borderRadius
      }} 
    />
  );
}
