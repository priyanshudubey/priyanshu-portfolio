import { useState } from "react";
import { ArrowUpRight, Clock, Play, Youtube } from "lucide-react";
import yt from "../data/youtube.json";

// Fixed locale + UTC so the server render and the browser agree (no hydration mismatch).
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

/** Thumbnail, label, title and play key layered on the device screen. */
function Poster({ video, onPlay, landscape }) {
  return (
    <>
      <img
        src={video.thumbnail}
        alt=""
        width={landscape ? 1280 : 1080}
        height={landscape ? 720 : 1920}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Scrims so the overlaid text stays readable on any thumbnail */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${
          landscape
            ? "bg-[radial-gradient(circle_at_center,rgb(0_0_0/0.25),transparent_45%)]"
            : "bg-[linear-gradient(to_bottom,rgb(0_0_0/0.5),transparent_28%,transparent_50%,rgb(0_0_0/0.85))]"
        }`}
      />

      {/* Shorts thumbnails are plain frames, so label them on screen. Regular video
          thumbnails usually carry their own title art, so only a duration badge sits
          on them and the caption goes on the card below the device. */}
      {!landscape && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          <span className="led" aria-hidden="true" />
          {video.label}
        </span>
      )}
      {video.duration && (
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-black/75 px-2 py-0.5 font-mono text-xs text-white">
          <Clock aria-hidden="true" className="h-3 w-3" />
          <span className="sr-only">Duration </span>
          {video.duration}
        </span>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={onPlay}
          className="play-key"
          aria-label={`Play “${video.title}”`}
        >
          <Play aria-hidden="true" className="ml-1 h-8 w-8" fill="currentColor" />
        </button>
      </div>

      {!landscape && (
        <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
          <p className="text-[11px] font-medium uppercase tracking-wider text-white/80">
            {formatDate(video.published)}
          </p>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-semibold leading-snug hover:underline sm:text-lg"
          >
            {video.title}
            <span className="sr-only"> (opens on YouTube)</span>
          </a>
        </div>
      )}
    </>
  );
}

/**
 * A YouTube video from the channel on a soft-UI device: an upright phone for
 * Shorts, a landscape device for regular videos. Data comes from
 * src/data/youtube.json (see scripts/fetch-youtube.mjs). Only the thumbnail
 * loads up front; the YouTube player is inserted when the visitor presses play.
 */
export default function LatestVideo({ className = "", style }) {
  const { channel, video } = yt;
  const [playing, setPlaying] = useState(false);
  const landscape = !video.isShort;
  const embed = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0`;

  const screen = (
    <div
      className={`glass-screen relative ${landscape ? "aspect-video w-full rounded-[1.25rem]" : "aspect-[9/16] rounded-[2rem]"}`}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embed}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <Poster video={video} onPlay={() => setPlaying(true)} landscape={landscape} />
      )}
    </div>
  );

  return (
    <div className={`flex w-full flex-col items-center gap-8 ${className}`} style={style}>
      <figure
        className={
          landscape
            ? "phone landscape neu-raised flex w-full max-w-2xl items-center gap-2.5 p-2.5 sm:gap-3.5 sm:p-3.5"
            : "phone neu-raised w-[min(19rem,80vw)] p-3 sm:w-80 2xl:w-[22rem]"
        }
      >
        <figcaption className="sr-only">
          {video.label} from {channel.name}: {video.title}
        </figcaption>

        {landscape ? (
          <>
            {/* Front camera on the left bezel, home indicator on the right */}
            <span className="phone-camera shrink-0" aria-hidden="true" />
            <div className="min-w-0 flex-1">{screen}</div>
            <span
              className="neu-inset-sm h-16 w-1.5 shrink-0 rounded-full sm:h-20"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            {/* Earpiece + front camera */}
            <div className="mb-2.5 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="neu-inset-sm h-1.5 w-14 rounded-full" />
              <span className="phone-camera" />
            </div>
            {screen}
            <div className="mt-3 flex justify-center" aria-hidden="true">
              <span className="neu-inset-sm h-1.5 w-24 rounded-full" />
            </div>
          </>
        )}
      </figure>

      {/* Caption + channel card */}
      <div
        className={`neu-raised-sm w-full rounded-2xl p-3 pr-4 ${landscape ? "max-w-2xl sm:p-4 sm:pr-5" : "max-w-md"}`}
      >
        {landscape && (
          <div className="groove mb-3 px-1 pb-3">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
              <span className="led" aria-hidden="true" />
              {video.label} · {formatDate(video.published)}
            </p>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 block text-lg font-bold leading-snug text-ink hover:text-accent"
            >
              {video.title}
              <span className="sr-only"> (opens on YouTube)</span>
            </a>
          </div>
        )}
        <div className="flex items-center gap-3">
          <span className="icon-well h-12 w-12 shrink-0 rounded-full p-1">
            <img
              src={channel.avatar}
              alt=""
              width="40"
              height="40"
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
            />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-ink">{channel.name}</p>
            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 truncate text-sm text-muted hover:text-accent"
            >
              {channel.handle}
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              <span className="sr-only"> on YouTube (opens in a new tab)</span>
            </a>
          </div>
          <a
            href={`${channel.url}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="keycap keycap-accent mb-1.5 shrink-0 rounded-xl px-3.5 py-2 text-sm"
          >
            <Youtube aria-hidden="true" className="h-4 w-4" />
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
}
