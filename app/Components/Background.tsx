export const Background = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div 
      className="fixed inset-0 -z-10 transition-all duration-500 ease-in-out"
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
};