const Sidebar = () => {
  return (
    <aside className='bg-zinc-900 w-72 px-8 py-6 min-h-screen text-sm pt-20 fixed z-10'>
      <div>
        <ul className='flex flex-col space-y-2'>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_102_1217)'>
                <path d='M4 10V21H10V15H14V21H20V10L12 3L4 10Z' fill='white' />
              </g>
              <defs>
                <clipPath id='clip0_102_1217'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <span>Beranda</span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.00304 14.8666L8.25304 15.2997C8.43056 15.1972 8.52754 14.9967 8.49772 14.7939C8.46789 14.5911 8.3173 14.427 8.11778 14.38L8.00304 14.8666ZM6.80562 15.558L6.55562 15.125L6.80562 15.558ZM17.1524 10.6823L16.9024 10.2493C16.7249 10.3518 16.6279 10.5523 16.6577 10.7551C16.6875 10.9579 16.8381 11.1219 17.0377 11.169L17.1524 10.6823ZM18.3498 9.99098L18.0998 9.55797L18.3498 9.99098ZM6.20751 12.9599C5.37909 11.525 5.87071 9.69024 7.30559 8.86181L6.80559 7.99579C4.89242 9.10036 4.23692 11.5467 5.34149 13.4599L6.20751 12.9599ZM8.11778 14.38C7.33989 14.1966 6.63817 13.7058 6.20751 12.9599L5.34149 13.4599C5.91565 14.4544 6.85325 15.1093 7.8883 15.3533L8.11778 14.38ZM7.05562 15.991L8.25304 15.2997L7.75304 14.4336L6.55562 15.125L7.05562 15.991ZM5.95754 20.0891C5.12912 18.6542 5.62074 16.8194 7.05562 15.991L6.55562 15.125C4.64245 16.2295 3.98695 18.6759 5.09152 20.5891L5.95754 20.0891ZM10.0556 21.1871C8.62074 22.0156 6.78597 21.5239 5.95754 20.0891L5.09152 20.5891C6.19609 22.5022 8.64245 23.1577 10.5556 22.0532L10.0556 21.1871ZM17.8498 16.6871L10.0556 21.1871L10.5556 22.0532L18.3498 17.5532L17.8498 16.6871ZM18.9479 12.5891C19.7764 14.0239 19.2847 15.8587 17.8498 16.6871L18.3498 17.5532C20.263 16.4486 20.9185 14.0022 19.8139 12.0891L18.9479 12.5891ZM17.0377 11.169C17.8155 11.3524 18.5173 11.8431 18.9479 12.5891L19.8139 12.0891C19.2398 11.0946 18.3022 10.4397 17.2671 10.1957L17.0377 11.169ZM18.0998 9.55797L16.9024 10.2493L17.4024 11.1153L18.5998 10.424L18.0998 9.55797ZM19.1979 5.45989C20.0263 6.89477 19.5347 8.72954 18.0998 9.55797L18.5998 10.424C20.513 9.31942 21.1685 6.87306 20.0639 4.95989L19.1979 5.45989ZM15.0998 4.36182C16.5347 3.53339 18.3695 4.02501 19.1979 5.45989L20.0639 4.95989C18.9593 3.04672 16.513 2.39122 14.5998 3.49579L15.0998 4.36182ZM7.30559 8.86181L15.0998 4.36182L14.5998 3.49579L6.80559 7.99579L7.30559 8.86181Z'
                fill='white'
              />
              <path
                d='M15.75 12.75L11.25 15.3481L11.25 10.1519L15.75 12.75Z'
                fill='white'
              />
            </svg>
            <span>Shorts</span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.25 15.75L10.75 18.3481L10.75 13.1519L15.25 15.75Z'
                fill='white'
              />
              <rect x='3.25' y='10.25' width='19' height='11' stroke='white' />
              <rect x='4.75' y='6.75' width='16' height='1' fill='white' />
              <rect x='7.75' y='3.75' width='10' height='1' fill='white' />
            </svg>
            <span>Subscription</span>
          </li>
          <li className='flex items-center space-x-4 justify-center'>
            <span className='border border-zinc-600 w-full'></span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='7.25' y='4.25' width='14' height='14' stroke='white' />
              <path
                d='M17.75 11.25L11.75 14.7141L11.75 7.7859L17.75 11.25Z'
                fill='white'
              />
              <path d='M4.25 7.25V21.25H18.25' stroke='white' />
            </svg>
            <span>Koleksi</span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.25 12.75C3.25 15.1137 4.13117 17.3925 5.72139 19.1413C7.31161 20.8901 9.49665 21.9832 11.8497 22.2072C14.2028 22.4312 16.5548 21.77 18.4464 20.3527C20.3381 18.9353 21.6334 16.8637 22.0794 14.5425C22.5254 12.2212 22.09 9.8171 20.8583 7.79968C19.6266 5.78225 17.6871 4.29645 15.4185 3.63249C13.15 2.96853 10.7154 3.17411 8.59036 4.20908C6.46529 5.24404 4.80237 7.03404 3.92642 9.22944'
                stroke='white'
              />
              <path d='M3.25 3.75V9.25H8.75' stroke='white' />
              <path
                d='M11.75 8V14L15.75 16.75'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
            <span>Histori</span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='4.25' y='4.25' width='17' height='17' stroke='white' />
              <path
                d='M16.75 12.75L10.75 16.2141L10.75 9.2859L16.75 12.75Z'
                fill='white'
              />
            </svg>
            <span>Video Anda</span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z'
                fill='white'
              />
            </svg>
            <span>Tonton nanti</span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='3.25' y='10.75' width='4.5' height='11' stroke='white' />
              <path
                d='M14.8533 3.72277L14.4998 3.36922V3.36922L14.8533 3.72277ZM17.3185 5.31012L16.8503 5.13455V5.13455L17.3185 5.31012ZM7.7501 10.826V11.326C7.88271 11.326 8.00989 11.2733 8.10366 11.1796L7.7501 10.826ZM7.75 10.826V10.326C7.47386 10.326 7.25 10.5499 7.25 10.826H7.75ZM7.75 21.826H7.25C7.25 22.1022 7.47386 22.326 7.75 22.326V21.826ZM20.3529 19.6154L19.8705 19.4838L20.3529 19.6154ZM22.061 13.3523L21.5786 13.2207L22.061 13.3523ZM15.25 10.826L14.7819 10.6505C14.7243 10.804 14.7457 10.976 14.8391 11.1108C14.9325 11.2456 15.086 11.326 15.25 11.326V10.826ZM15.2069 4.07633C15.9674 3.31587 17.2279 4.12759 16.8503 5.13455L17.7867 5.48568C18.5419 3.47174 16.0207 1.84832 14.4998 3.36922L15.2069 4.07633ZM8.10366 11.1796L15.2069 4.07633L14.4998 3.36922L7.39655 10.4725L8.10366 11.1796ZM7.75 11.326H7.7501V10.326H7.75V11.326ZM8.25 10.8261V10.826H7.25V10.8261H8.25ZM8.25 21.826V10.8261H7.25V21.826H8.25ZM17.4586 21.326H7.75V22.326H17.4586V21.326ZM19.8705 19.4838C19.5739 20.5715 18.586 21.326 17.4586 21.326V22.326C19.0369 22.326 20.42 21.2696 20.8353 19.7469L19.8705 19.4838ZM21.5786 13.2207L19.8705 19.4838L20.8353 19.7469L22.5434 13.4838L21.5786 13.2207ZM20.1315 11.326C21.1206 11.326 21.8389 12.2665 21.5786 13.2207L22.5434 13.4838C22.9771 11.8935 21.7799 10.326 20.1315 10.326V11.326ZM15.25 11.326H20.1315V10.326H15.25V11.326ZM16.8503 5.13455L14.7819 10.6505L15.7182 11.0016L17.7867 5.48568L16.8503 5.13455Z'
                fill='white'
              />
            </svg>
            <span>Video yang disukai</span>
          </li>
          <li className='flex items-center space-x-4 box-border p-2 rounded-md hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer transition duration-200'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='2.75' y='7.75' width='20' height='1' fill='white' />
              <rect x='2.75' y='11.75' width='11' height='1' fill='white' />
              <rect x='2.75' y='15.75' width='11' height='1' fill='white' />
              <path
                d='M22.25 15.75L16.25 19.2141L16.25 12.2859L22.25 15.75Z'
                fill='white'
              />
            </svg>
            <span>Song of the day</span>
          </li>
          <li className='flex items-center space-x-4 justify-center'>
            <span className='border border-zinc-600 w-full'></span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
