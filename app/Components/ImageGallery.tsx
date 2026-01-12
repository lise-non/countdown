interface ImageGalleryProps {
  onSelect: (url: string) => void;
}

const images = [
  '/photos/1.jpg',
  '/photos/2.jpg',
  '/photos/3.jpg',
'/photos/4.jpg',


];

export const ImageGallery = ({ onSelect }: ImageGalleryProps) => {
  return (
    <div className="flex gap-2 p-4 bg-white/10 backdrop-blur-md rounded-lg">
      {images.map((url) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
          key={url}
          src={url}
          onClick={() => onSelect(url)}
          className="w-16 h-16 object-cover cursor-pointer hover:ring-2 ring-blue-500 rounded"
          alt="Thumbnail"
        />
      ))}
    </div>
  );
};