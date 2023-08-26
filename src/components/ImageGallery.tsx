import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFirestore("images");

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
      {images.map((image) => (
        <div
          key={image.imageUrl}
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <figure className="max-h-[15rem]">
            <img src={image.imageUrl} alt="image" />
          </figure>
          <div className="card-body">
            <p>作者：{image.userEmail} </p>
            <span>作成日：{image.createdAt.toLocaleDateString()} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
