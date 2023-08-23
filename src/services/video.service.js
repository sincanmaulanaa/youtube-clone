export const getNowPlayingVideos = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/now_playing`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Now Playing');
    }

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

export const getDetailVideo = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${id}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Movie Detail');
    }
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

export const getTrailerById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${id}/videos?language=en-US`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Video Trailer');
    }

    const responseJson = await response.json();
    return responseJson.results;
  } catch (error) {
    console.log(error);
  }
};

// https://api.themoviedb.org/3/movie/976573/videos?language=en-US
