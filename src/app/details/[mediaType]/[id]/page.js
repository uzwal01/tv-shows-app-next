import { getMediaDetails } from "@/lib/tmdb";
import Image from "next/image";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import FavouriteBtn from "../../../../components/favouriteButton/FavoriteBtn";

const MediaDetailPage = async ({ params }) => {
  const { mediaType, id } = await params;
  const media = await getMediaDetails(mediaType, id);

  if (!media) {
    return <div>{mediaType.tpUpperCase()} not found</div>;
  }

  const {
    title,
    overview,
    poster_path,
    name,
    release_date,
    first_air_date,
    vote_average,
    origin_country,
    runtime,
    vote_count,
    backdrop_path,
    genres,
    // videos: videoData,
  } = media;

  // const videos = videoData?.results || [];
  //RunTime minutes to hours.
  const hrs = Math.floor(runtime / 60);
  const min = runtime % 60;
  const time = `${hrs}h ${min}m`;

  // for Smaller sized image
  const imageBase = "https://image.tmdb.org/t/p/w500";

  // for original sized image
  const imageOriginal = "https://image.tmdb.org/t/p/original";

  // //  Youtube Trailer
  // const trailer = videos.find(
  //   (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  // );
  // const trailerkey = trailer?.key

  return (
    <>
      <section className="min-h-screen w-full">
        {/* Backdrop Image */}
        <div className="relative w-full h-[300px] sm:h-[500px]">
          <Image
            src={imageOriginal + backdrop_path}
            alt={title || name}
            layout="fill"
            className="object-contain object-center sm:object-cover opacity-60 blur-[0.07rem]"
          />
          {/* Content - overlay */}
          <div className="absolute inset-0 flex items-center justify-start px-4 md:px-10">
            {/* Left - Poster */}
            <div className="w-[100px] sm:w-[150px] md:w-[300px] relative sm:static top-0 left-0">
              <Image
                src={imageBase + poster_path}
                alt={title || name}
                width={300}
                height={370}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right - Details */}
            <div className="absolute sm:static top-[300px] sm:top-0 sm:ml-6 h-full flex-1">
              <div className="p-2 md:p-5 text-[var(--color-text)]">
                {/* Title */}
                <div className="flex items-center gap-2 flex-wrap mb-2 sm:mt-6">
                  <h1 className="text-xl md:text-3xl font-bold">{title || name}</h1>
                  {release_date && (
                    <span className="text-xl md:text-2xl text-[var(--color-muted)]">
                      ({release_date.slice(0, 4)})
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-row flex-wrap items-center gap-2 text-sm text-[var(--color-text)]">
                  <div className="flex items-center gap-2">
                    <MdDateRange className="text-xl" />
                    {release_date || first_air_date} ({origin_country})
                  </div>
                  <div className="flex items-center gap-1">
                    <GoDotFill className="text-xs" />
                    <p key={genres.id}>
                      {genres.map((genre) => genre.name).join(", ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <GoDotFill className="text-xs" />
                    <p>{time}</p>
                  </div>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-6 items-start sm:items-center py-2 my-5
             "
                >
                 <div className="flex items-center gap-8">
                   {/* Ratings */}
                  <div className="flex items-center gap-2 ">
                    <FaStar className="text-3xl text-[var(--color-yellow)]" />
                    <div>
                      <div>
                        <span className="font-bold text-lg">
                          {vote_average?.toFixed(1)}
                        </span>
                        <span className="text-md text-[var(--color-muted)]">
                          /10
                        </span>
                      </div>
                      <div className="text-xs text-[var(--color-muted)]">
                        {vote_count}
                      </div>
                    </div>
                  </div>
                  {/* Favorite Button */}
                  <div className="ml-6">
                    <FavouriteBtn media={media} />
                  </div>
                 </div>

                  {/* Youtube Trialer
                <div>
                  {trailer ? (
                    <div className="relative h-[300px] w-full mt-4">
                      <h4 className="mb-2 font-bold">Play Trailer</h4>
                      <iframe
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        title="YouTube Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">
                      No trailer available for this title.
                    </p>
                  )}
                </div>*/}
                </div>

                {/* Overview */}
                <p className="text-sm md:text-base leading-relaxed text-[var(--color-text)]">{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaDetailPage;
