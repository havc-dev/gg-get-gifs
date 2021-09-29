function GifGridItem({ id, title, url }) {
  return (
    <div className='animate__animated animate__zoomInUp w-60 mx-auto rounded bg-gray-700 shadow-xl my-3 border border-gray-700 flex flex-col justify-between'>
      <div className='h-60overflow-hidden w-full'>
        <img
          src={url}
          alt={title}
          id={id}
          className='rounded-t shadow-xl min-w-full object-scale-down z-0'
        />
      </div>
      <div className='rounded bg-gray-700 my-2 border h-12 w-full border-gray-700 bg-opacity-60 inline-block z-10'>
        {title ? (
          <div className='text-indigo-100 p-2  text-center uppercase truncate'>
            {title}
          </div>
        ) : (
          <div className='text-indigo-100 p-2 h-12 text-center uppercase text-base'>
            <span className='text-red-600 font-bold text-base'>ERROR</span>: NO
            DESCRIPTION
          </div>
        )}
      </div>
    </div>
  );
}

export default GifGridItem;
