import React from "react";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1519817650390-64a93db511aa",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",

  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1519817650390-64a93db511aa",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d"
];


const Home = () => {
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
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="pin"
            className="
              mb-4 w-full rounded-xl
              break-inside-avoid
              hover:scale-[1.02]
              transition-transform
            "
          />
        ))}
      </div>
    </div>
  );
};


export default Home;