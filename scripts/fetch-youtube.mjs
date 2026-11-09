// Keeps src/data/youtube.json (shown in the hero) up to date at build time.
//
// - If `video.pinned` is true in youtube.json, that video is kept as is and
//   only the channel avatar is refreshed.
// - Otherwise the latest upload from the channel's RSS feed is written there.
//
// YouTube's RSS feed can't be read from the browser (no CORS), so this runs in
// Node before `vite build`. If the network or YouTube is unavailable, the
// existing youtube.json is kept and the build carries on.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const CHANNEL_ID = "UCHEvZI_0nD40lqy14GascQg"; // @toastercode
const OUT = fileURLToPath(new URL("../src/data/youtube.json", import.meta.url));
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

// Channel avatars on yt3.googleusercontent.com are blocked by browsers when
// hotlinked (ERR_BLOCKED_BY_ORB), so the avatar is downloaded and self-hosted.
const AVATAR_SOURCE =
  "https://yt3.googleusercontent.com/LxSoe4eFOkIEls-Mq68p1f33F_a1eWdGE4QfeAjH5duZLufjVZapY6epsdjwQpM_jR0xoJ3er7A=s176-c-k-c0x00ffffff-no-rj";
const AVATAR_DIR = fileURLToPath(new URL("../public/youtube/", import.meta.url));

async function saveAvatar() {
  try {
    const res = await fetch(AVATAR_SOURCE, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`status ${res.status}`);
    await mkdir(AVATAR_DIR, { recursive: true });
    await writeFile(`${AVATAR_DIR}avatar.jpg`, Buffer.from(await res.arrayBuffer()));
  } catch (err) {
    console.warn(
      `⚠  Could not refresh the channel avatar (${err.message}); keeping the saved one.`,
    );
  }
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const pick = (xml, re) => {
  const m = re.exec(xml);
  return m ? decode(m[1].trim()) : "";
};

async function exists(url) {
  try {
    const res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(8000) });
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  await saveAvatar();

  const saved = JSON.parse(await readFile(OUT, "utf8"));
  if (saved.video?.pinned) {
    console.log(`✓ YouTube: showing pinned video "${saved.video.title}" (${saved.video.id})`);
    return;
  }

  const res = await fetch(FEED, { signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`feed responded ${res.status}`);
  const xml = await res.text();

  const entry = /<entry>([\s\S]*?)<\/entry>/.exec(xml)?.[1];
  if (!entry) throw new Error("feed has no videos");

  const id = pick(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
  const title = pick(entry, /<title>([^<]+)<\/title>/);
  const published = pick(entry, /<published>([^<]+)<\/published>/);
  const link = pick(entry, /<link rel="alternate" href="([^"]+)"/);
  const isShort = link.includes("/shorts/");

  // Shorts have a true 9:16 thumbnail (oar2); fall back to the standard ones.
  const candidates = isShort
    ? [`https://i.ytimg.com/vi/${id}/oar2.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`]
    : [
        `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
        `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      ];
  let thumbnail = candidates.at(-1);
  for (const url of candidates) {
    if (await exists(url)) {
      thumbnail = url;
      break;
    }
  }

  const data = {
    ...saved,
    video: {
      id,
      title,
      published,
      isShort,
      pinned: false,
      label: isShort ? "Latest Short" : "Latest video",
      url: isShort
        ? `https://www.youtube.com/shorts/${id}`
        : `https://www.youtube.com/watch?v=${id}`,
      thumbnail,
    },
  };
  await writeFile(OUT, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`✓ latest YouTube upload: "${title}" (${id})`);
}

main().catch((err) => {
  console.warn(
    `⚠  Could not fetch the latest YouTube video (${err.message}); keeping src/data/youtube.json as is.`,
  );
});
