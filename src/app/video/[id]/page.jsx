import { getDetailVideo, getTrailerById } from '@/services/video.service';

const DetailVideoPage = async ({ params }) => {
  const video = await getDetailVideo(params.id);
  const trailer = await getTrailerById(params.id);

  const releaseType = trailer
    .filter((item) => {
      if (item.type === 'Trailer') {
        return item;
      }
    })
    .map((item) => item.key);

  return (
    <div className='pt-32 pl-72'>
      <h1>Detail video</h1>
      <p>Video: {params.id}</p>
      <p>Video name: {video.original_title}</p>
      <iframe
        width='560'
        height='315'
        src={`${process.env.NEXT_PUBLIC_YOUTUBE_URL + releaseType[0]}`}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default DetailVideoPage;
