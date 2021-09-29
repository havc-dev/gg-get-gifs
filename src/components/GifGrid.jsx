import { useFetchGif } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

function GifGrid({ category }) {
  const { data: images, loading } = useFetchGif(category);

  return (
    <>
      <div className='cat-title animate__animated animate__zoomInDown w-full'>
        <h3 className='text-center text-white text-lg my-3 font-mono font-semibold border-b-2 border-t py-5 border-indigo-600'>
          Got Gifs for: <span className='text-indigo-400'>"{category}"...</span>
        </h3>
      </div>

      {loading && <p className='loading'>Loading...</p>}

      <div className='card-grid flex flex-wrap w-full justify-center'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
