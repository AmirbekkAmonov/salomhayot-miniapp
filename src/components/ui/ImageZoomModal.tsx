import { useEffect, useRef, useState } from 'react';

interface Props {
  imageUrl: string;
  onClose: () => void;
}

const ImageZoomModal = ({ imageUrl, onClose }: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(prev => Math.max(0.5, Math.min(5, prev + (e.deltaY > 0 ? -0.1 : 0.1))));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
  };

  return (
    <div className="zoom-modal" onClick={onClose}>
      <div
        className="zoom-modal__inner"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          ref={imgRef}
          src={imageUrl}
          alt="zoom"
          className="zoom-modal__image"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            cursor: dragStart ? 'grabbing' : 'grab'
          }}
        />
        <button className="zoom-modal__close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageZoomModal;
