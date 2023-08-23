const Category = () => {
  return (
    <div
      id='movieBasedCategories'
      className='fixed bg-zinc-900 w-full z-50 pb-4'
    >
      <ul className='flex items-center space-x-3'>
        <li>
          <button className='bg-zinc-800 py-1.5 px-3 rounded-lg text-sm'>
            Now playing
          </button>
        </li>
        <li>
          <button className='bg-zinc-800 py-1.5 px-3 rounded-lg text-sm'>
            Popular
          </button>
        </li>
        <li>
          <button className='bg-zinc-800 py-1.5 px-3 rounded-lg text-sm'>
            Top rated
          </button>
        </li>
        <li>
          <button className='bg-zinc-800 py-1.5 px-3 rounded-lg text-sm'>
            Upcoming
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Category;
