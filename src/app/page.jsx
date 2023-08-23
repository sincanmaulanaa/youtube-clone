import CardVideo from '@/components/CardVideo';
import Category from '@/components/Category';
import { getNowPlayingVideos } from '@/services/video.service';

export default async function Home() {
  const nowPlaying = await getNowPlayingVideos();

  return (
    <main className='bg-zinc-900 w-screen pt-10 pl-72'>
      <div id='movieWrapper' className='relative'>
        <Category />
        <div
          id='videoContainer'
          className='mt-5 pb-5 pt-20 pr-5 grid gap-5 grid-cols-5'
        >
          {nowPlaying.results.map((movie) => (
            <CardVideo id={movie.id}>
              <CardVideo.Header
                key={movie.id}
                imageSrc={
                  process.env.NEXT_PUBLIC_IMAGE_ENDPOINT + movie.backdrop_path
                }
                imageAlt={movie.title}
              />
              <CardVideo.Body
                logoSrc={
                  process.env.NEXT_PUBLIC_IMAGE_ENDPOINT + movie.backdrop_path
                }
                logoAlt={movie.title}
                movieId={movie.id}
              />
            </CardVideo>
          ))}
        </div>
      </div>
    </main>
  );
}
