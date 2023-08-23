import { getDetailVideo } from '@/services/video.service';
import convertReleaseDateHandler from '@/utils/releaseDateConvertion';
import convertWatchedNumberHandler from '@/utils/watchedNumberConvertion';
import Image from 'next/image';
import Link from 'next/link';

function CardVideo({ id, children }) {
  return <Link href={`/video/${id}`}>{children}</Link>;
}

function Header({ imageSrc, imageAlt }) {
  return (
    <div className='card bg-zinc-900 rounded-xl overflow-clip'>
      <Image
        alt={imageAlt}
        src={imageSrc}
        className='w-full h-auto rounded-b-xl'
        width='500'
        height='60'
      />
    </div>
  );
}

function Body({ logoAlt, logoSrc, movieId }) {
  return (
    <div className='flex items-start mt-3'>
      <Image
        alt={logoAlt}
        src={logoSrc}
        className='w-10 h-10 rounded-full'
        width='500'
        height='500'
      />
      <Footer movieId={movieId} />
    </div>
  );
}

async function Footer({ movieId }) {
  const videoDetail = await getDetailVideo(movieId);

  return (
    <div className='text-zinc-400 ml-3'>
      <h1 className='text-white font-medium text-md'>
        {videoDetail.original_title}
      </h1>
      <h2 className='text-[14px] leading-none mt-2'>
        {videoDetail.production_companies[0].name}
      </h2>
      <span className='text-[14px] leading-none'>
        {convertWatchedNumberHandler(videoDetail.popularity)} x ditonton •{' '}
        {convertReleaseDateHandler(videoDetail.release_date)}
      </span>
    </div>
  );
}

CardVideo.Header = Header;
CardVideo.Body = Body;
CardVideo.Footer = Footer;

export default CardVideo;
