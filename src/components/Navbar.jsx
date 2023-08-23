import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='px-6 py-3 flex items-center justify-between fixed inset-x-0 bg-zinc-900 z-50'>
      <div className='flex items-center space-x-2'>
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M29 14H11V13H29V14ZM29 19H11V20H29V19ZM29 25H11V26H29V25Z'
            fill='white'
          />
        </svg>
        {/* logo youtube */}
        <Link href='/'>
          <Image
            className='w-auto h-auto'
            src={'/images/logo.png'}
            width={110}
            height={60}
            alt='youtube logo'
            priority={true}
          />
        </Link>
      </div>

      {/* search input */}
      <div className='flex items-center space-x-4'>
        <div
          id='searchContainer'
          className='flex items-center relative text-white'
        >
          <input
            type='search'
            id='default-search'
            className='bg-zinc-900 border border-zinc-600 w-96 px-5 py-2 rounded-full outline-none focus:ring-1 focus:ring-blue-400'
            placeholder='Telusuri'
          />
          <button
            type='submit'
            className='text-white absolute right-0.5 focus:outline-none font-medium rounded-r-full h-full w-14 text-sm px-4 py-1 bg-zinc-800 border-l border-zinc-600'
          >
            <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
              <svg
                className='w-4 h-4 text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
          </button>
        </div>

        <div>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='40' height='40' rx='20' fill='#2f2f2f' />
            <path
              d='M20 11C18.34 11 17 12.37 17 14.07V19.93C17 21.63 18.34 23 20 23C21.66 23 23 21.63 23 19.93V14.07C23 12.37 21.66 11 20 11ZM26.5 20H25.5C25.5 23.03 23.03 25.5 20 25.5C16.97 25.5 14.5 23.03 14.5 20H13.5C13.5 23.24 15.89 25.93 19 26.41V29H21V26.41C24.11 25.93 26.5 23.24 26.5 20Z'
              fill='white'
            />
          </svg>
        </div>
      </div>

      {/* profile container */}
      <div
        id='profileContainer'
        className='flex items-center justify-between space-x-4'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14 13H11V16H9V13H6V11H9V8H11V11H14V13ZM17 6H3V18H17V11.61L21 13.44V8.56L17 10.39V6ZM18 5V8.83L22 7V15L18 13.17V19H2V5H18Z'
            fill='white'
          />
        </svg>
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 28H22C22 29.1 21.1 30 20 30C18.9 30 18 29.1 18 28ZM28 25.35V27H12V25.35L14 23.47V18.32C14 15.4 15.56 13.1 18 12.34V11.96C18 10.54 19.49 9.46001 20.99 10.2C21.64 10.52 22 11.23 22 11.96V12.35C24.44 13.1 26 15.41 26 18.33V23.48L28 25.35ZM27 25.77L25 23.89V18.42C25 15.95 23.81 14.06 21.87 13.32C20.61 12.79 19.23 12.82 18.03 13.35C16.15 14.11 15 15.99 15 18.42V23.89L13 25.77V26H27V25.77Z'
            fill='white'
          />
        </svg>
        <Image
          src='/images/profile.jpg'
          alt='User Profile'
          width={35}
          height={35}
          className='rounded-full border border-blue-400'
        />
      </div>
    </nav>
  );
};

export default Navbar;
