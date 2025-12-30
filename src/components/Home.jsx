import React, { useEffect, useState } from "react";




const Home = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await fetch("https://api.unsplash.com/photos?per_page=20&client_id=YOUR_ACCESS_KEY");

      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto p-4">
      <div
        className="
          columns-4 gap-10
          max-lg:columns-3
          max-md:columns-2
          max-sm:columns-1
        "
      >
        {images.map((image, index) => {
          return <img key={index} src={image} alt="image" className="
              mb-4 w-full rounded-xl
              break-inside-avoid
              hover:scale-[1.02]
              transition-transform
            " />
        })}
      </div>
    </div>
  );
};


export default Home;