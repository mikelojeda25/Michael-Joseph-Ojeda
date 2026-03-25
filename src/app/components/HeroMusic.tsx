import { useMemo, useState } from "react";
import { Albums } from "../data/Tracks";
import { usePlayerStore } from "../store/usePlayerStore";
import { ChevronLeft, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export const HeroMusic = () => {
  // Logic para sa URL-based navigation
  const [searchParams, setSearchParams] = useSearchParams();
  const albumIdFromUrl = searchParams.get("album");

  // Selected album is derived from URL or local state fallback
  const selectedAlbum = Albums.find((a) => a.id === albumIdFromUrl) || null;

  const { setTrack, currentTrack, isPlaying, togglePlay } = usePlayerStore();

  const [query, setQuery] = useState("");
  const [albumYearFilter, setAlbumYearFilter] = useState<string>("all");
  const [albumSort, setAlbumSort] = useState<
    "recent" | "name_asc" | "name_desc" | "tracks_desc"
  >("recent");
  const [albumView, setAlbumView] = useState<"list" | "grid">("list");

  const [trackArtistFilter, setTrackArtistFilter] = useState<string>("all");
  const [trackSort, setTrackSort] = useState<
    "index" | "title_asc" | "title_desc"
  >("index");

  const handleAlbumSelect = (id: string) => {
    setSearchParams({ album: id });
  };

  const handleGlobalTrackSelect = (albumId: string, trackId: string) => {
    const album = Albums.find((a) => a.id === albumId);
    const track = album?.tracks.find((t) => t.id === trackId);
    if (!album || !track) return;
    setSearchParams({ album: album.id });
    setTrack(track);
  };

  const handleBack = () => {
    setSearchParams({});
    setQuery("");
    setTrackArtistFilter("all");
    setTrackSort("index");
  };

  const albumYears = useMemo(() => {
    const years = Array.from(new Set(Albums.map((a) => a.year)));
    return years.sort((a, b) => Number(b) - Number(a));
  }, []);

  const filteredAlbums = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = Albums.filter((album) => {
      const matchesTrack = album.tracks.some(
        (track) =>
          track.title.toLowerCase().includes(q) ||
          track.artist.toLowerCase().includes(q),
      );
      const matchesQuery =
        q.length === 0 ||
        album.name.toLowerCase().includes(q) ||
        album.artist.toLowerCase().includes(q) ||
        album.year.toLowerCase().includes(q) ||
        matchesTrack;

      const matchesYear =
        albumYearFilter === "all" ? true : album.year === albumYearFilter;

      return matchesQuery && matchesYear;
    });

    const sorted = [...base];
    sorted.sort((a, b) => {
      switch (albumSort) {
        case "name_asc":
          return a.name.localeCompare(b.name);
        case "name_desc":
          return b.name.localeCompare(a.name);
        case "tracks_desc":
          return b.tracks.length - a.tracks.length;
        case "recent":
        default:
          return (
            Number(b.year) - Number(a.year) || a.name.localeCompare(b.name)
          );
      }
    });
    return sorted;
  }, [query, albumYearFilter, albumSort]);

  const trackArtists = useMemo(() => {
    if (!selectedAlbum) return [];
    const artists = Array.from(
      new Set(selectedAlbum.tracks.map((t) => t.artist)),
    );
    return artists.sort((a, b) => a.localeCompare(b));
  }, [selectedAlbum]);

  const filteredTracks = useMemo(() => {
    if (!selectedAlbum) return [];
    const q = query.trim().toLowerCase();

    const base = selectedAlbum.tracks
      .map((t, idx) => ({ t, idx }))
      .filter(({ t }) => {
        const matchesQuery =
          q.length === 0 ||
          t.title.toLowerCase().includes(q) ||
          t.artist.toLowerCase().includes(q);
        const matchesArtist =
          trackArtistFilter === "all" ? true : t.artist === trackArtistFilter;
        return matchesQuery && matchesArtist;
      });

    const sorted = [...base];
    sorted.sort((a, b) => {
      switch (trackSort) {
        case "title_asc":
          return a.t.title.localeCompare(b.t.title);
        case "title_desc":
          return b.t.title.localeCompare(a.t.title);
        case "index":
        default:
          return a.idx - b.idx;
      }
    });
    return sorted;
  }, [selectedAlbum, query, trackArtistFilter, trackSort]);

  const globalTrackResults = useMemo(() => {
    if (selectedAlbum) return [];
    const q = query.trim().toLowerCase();
    if (q.length === 0) return [];

    return Albums.flatMap((album) =>
      album.tracks
        .filter(
          (track) =>
            track.title.toLowerCase().includes(q) ||
            track.artist.toLowerCase().includes(q),
        )
        .map((track) => ({ album, track })),
    );
  }, [selectedAlbum, query]);

  // Animation Variants para sa Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Animation Variants para sa Individual Items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto mb-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(340px,520px)] gap-6 items-start relative"
      >
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
            {selectedAlbum ? selectedAlbum.name : "Sonic Archives"}
          </h2>
        </div>

        {selectedAlbum && (
          <button
            onClick={handleBack}
            className="hidden lg:flex absolute top-0 right-0 items-center gap-2 text-white/50 hover:text-yellow-500 transition-all uppercase tracking-widest text-xs font-bold border-b border-white/10 hover:border-yellow-500 pb-1 cursor-pointer"
          >
            <ChevronLeft size={14} /> Back
          </button>
        )}

        <div className="w-full">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                selectedAlbum
                  ? "Search tracks (title, artist)..."
                  : "Search albums + tracks..."
              }
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-transparent text-white placeholder:text-white/30 border border-white/15 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 justify-end">
            {!selectedAlbum ? (
              <>
                <select
                  value={albumYearFilter}
                  onChange={(e) => setAlbumYearFilter(e.target.value)}
                  className="rounded-xl bg-black/35 text-white border border-white/15 px-3 py-2 text-xs font-bold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                  aria-label="Filter by year"
                >
                  <option
                    value="all"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    All Years
                  </option>
                  {albumYears.map((y) => (
                    <option
                      key={y}
                      value={y}
                      style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                    >
                      {y}
                    </option>
                  ))}
                </select>

                <select
                  value={albumSort}
                  onChange={(e) =>
                    setAlbumSort(
                      e.target.value as
                        | "recent"
                        | "name_asc"
                        | "name_desc"
                        | "tracks_desc",
                    )
                  }
                  className="rounded-xl bg-black/35 text-white border border-white/15 px-3 py-2 text-xs font-bold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                  aria-label="Sort albums"
                >
                  <option
                    value="recent"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    Recent
                  </option>
                  <option
                    value="name_asc"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    Name A–Z
                  </option>
                  <option
                    value="name_desc"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    Name Z–A
                  </option>
                  <option
                    value="tracks_desc"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    Most Songs
                  </option>
                </select>

                <div className="inline-flex rounded-xl border border-white/15 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setAlbumView("list")}
                    className={`px-3 py-2 text-xs font-bold tracking-widest uppercase transition-colors ${
                      albumView === "list"
                        ? "bg-yellow-500 text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                    aria-label="Album list view"
                  >
                    List
                  </button>
                  <button
                    type="button"
                    onClick={() => setAlbumView("grid")}
                    className={`px-3 py-2 text-xs font-bold tracking-widest uppercase border-l border-white/15 transition-colors ${
                      albumView === "grid"
                        ? "bg-yellow-500 text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                    aria-label="Album grid view"
                  >
                    Grid
                  </button>
                </div>
              </>
            ) : (
              <>
                {trackArtists.length > 1 && (
                  <select
                    value={trackArtistFilter}
                    onChange={(e) => setTrackArtistFilter(e.target.value)}
                    className="rounded-xl bg-black/35 text-white border border-white/15 px-3 py-2 text-xs font-bold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                    aria-label="Filter by artist"
                  >
                    <option
                      value="all"
                      style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                    >
                      All Artists
                    </option>
                    {trackArtists.map((a) => (
                      <option
                        key={a}
                        value={a}
                        style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                      >
                        {a}
                      </option>
                    ))}
                  </select>
                )}

                <select
                  value={trackSort}
                  onChange={(e) =>
                    setTrackSort(
                      e.target.value as "index" | "title_asc" | "title_desc",
                    )
                  }
                  className="rounded-xl bg-black/35 text-white border border-white/15 px-3 py-2 text-xs font-bold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                  aria-label="Sort tracks"
                >
                  <option
                    value="index"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    Album Sequence
                  </option>
                  <option
                    value="title_asc"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    Title A–Z
                  </option>
                  <option
                    value="title_desc"
                    style={{ color: "#0f172a", backgroundColor: "#f8fafc" }}
                  >
                    Title Z–A
                  </option>
                </select>
              </>
            )}
          </div>
        </div>
      </motion.div>

      <p className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-6">
        {selectedAlbum ? `Released ${selectedAlbum.year}` : "Discography"}
      </p>

      <div className="mb-8 flex items-center justify-between text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/30">
        <div className="tabular-nums">
          {!selectedAlbum
            ? `${filteredAlbums.length} album${filteredAlbums.length === 1 ? "" : "s"}`
            : `${filteredTracks.length} track${filteredTracks.length === 1 ? "" : "s"}`}
        </div>
        <div className="flex items-center gap-3">
          {selectedAlbum && (
            <button
              onClick={handleBack}
              className="lg:hidden flex items-center gap-2 text-white/50 hover:text-yellow-500 transition-all uppercase tracking-widest text-xs font-bold border-b border-white/10 hover:border-yellow-500 pb-1 cursor-pointer"
            >
              <ChevronLeft size={14} /> Back
            </button>
          )}
          {query.trim().length > 0 && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-white/40 hover:text-yellow-500 transition-colors"
            >
              Clear search
            </button>
          )}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed text-center text-sm md:text-base"
      >
        A showcase of{" "}
        <span className="text-white font-medium">human-AI synergy</span> in
        music production. Each track is developed through{" "}
        <span className="text-yellow-500 font-semibold italic">
          original lyrics
        </span>{" "}
        and a technical workflow involving{" "}
        <span className="text-white font-medium">Suno AI</span>,{" "}
        <span className="text-white font-medium">CapCut</span> for sequencing,
        and <span className="text-white font-medium">TagMP3</span> for metadata
        architecture.
      </motion.p>

      <AnimatePresence mode="wait">
        {!selectedAlbum ? (
          /* VIEW 1: ALBUM GRID */
          <div className="space-y-10">
            {globalTrackResults.length > 0 && (
              <motion.div
                key="global-track-results"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 8 }}
                className="space-y-3"
              >
                <p className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-yellow-500">
                  Track Matches
                </p>
                <div className="flex flex-col gap-3">
                  {globalTrackResults.map(({ album, track }) => {
                    const isActive = currentTrack?.id === track.id;
                    return (
                      <motion.button
                        key={`${album.id}-${track.id}`}
                        variants={itemVariants}
                        whileHover={{ y: -3 }}
                        type="button"
                        onClick={() => handleGlobalTrackSelect(album.id, track.id)}
                        className={`w-full text-left group flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer border min-h-[92px] ${
                          isActive
                            ? "bg-white/10 border-white/20 shadow-xl"
                            : "bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={track.coverUrl}
                            className="h-[72px] w-[72px] rounded-xl border border-white/10 shrink-0 object-cover"
                            alt={track.title}
                          />
                          <div>
                            <h4
                              className={`text-base md:text-lg font-bold tracking-tight ${
                                isActive
                                  ? "text-yellow-500"
                                  : "text-white group-hover:text-yellow-500"
                              }`}
                            >
                              {track.title}
                            </h4>
                            <p className="text-gray-500 text-[10px] md:text-xs tracking-widest uppercase mt-1">
                              {track.artist} • {album.name}
                            </p>
                          </div>
                        </div>
                        <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-xl">
                          →
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {albumView === "grid" ? (
              <motion.div
                key="album-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
              >
                {filteredAlbums.map((album) => (
                  <motion.div
                    key={album.id}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                    onClick={() => handleAlbumSelect(album.id)}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 shadow-2xl ring-1 ring-white/10 group-hover:ring-yellow-500/50 transition-all duration-500">
                      <img
                        src={album.coverUrl}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                        alt={album.name}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                        <span className="text-white font-black uppercase tracking-[0.3em] text-sm translate-y-4 group-hover:translate-y-0 transition-transform">
                          View Tracks
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-5 text-lg md:text-2xl font-bold text-white uppercase italic group-hover:text-yellow-500 transition-colors">
                      {album.name}
                    </h3>
                    <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                      {album.tracks.length} Songs
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="album-list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 12 }}
                className="flex flex-col gap-3"
              >
                {filteredAlbums.map((album) => (
                  <motion.button
                    key={album.id}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    type="button"
                    onClick={() => handleAlbumSelect(album.id)}
                    className="w-full text-left group flex items-stretch justify-between p-4 rounded-2xl transition-all cursor-pointer border bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10 min-h-[96px]"
                  >
                    <div className="flex items-stretch gap-4">
                      <img
                        src={album.coverUrl}
                        className="h-[88px] w-[88px] rounded-xl border border-white/10 shrink-0 object-cover self-stretch"
                        alt={album.name}
                      />
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white uppercase italic group-hover:text-yellow-500 transition-colors">
                          {album.name}
                        </h3>
                        <p className="text-gray-500 text-[10px] md:text-xs tracking-widest uppercase mt-1">
                          {album.artist} • {album.year} • {album.tracks.length} Songs
                        </p>
                      </div>
                    </div>
                    <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-xl">
                      →
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          /* VIEW 2: TRACK LIST */
          <motion.div
            key="track-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col gap-3"
          >
            {filteredTracks.map(({ t: track, idx }) => {
              const isActive = currentTrack?.id === track.id;

              return (
                <motion.div
                  key={track.id}
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => (isActive ? togglePlay() : setTrack(track))}
                  className={`group flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer border 
                    ${
                      isActive
                        ? "bg-white/10 border-white/20 shadow-xl"
                        : "bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-center gap-5 md:gap-8">
                    <div className="w-8 flex justify-center">
                      {isActive && isPlaying ? (
                        <div className="flex gap-1 items-end h-4">
                          <motion.span
                            animate={{ height: [4, 16, 8, 16, 4] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-1 bg-yellow-500 rounded-full"
                          />
                          <motion.span
                            animate={{ height: [16, 4, 16, 4, 16] }}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                            className="w-1 bg-yellow-500 rounded-full"
                          />
                          <motion.span
                            animate={{ height: [8, 16, 4, 16, 8] }}
                            transition={{ repeat: Infinity, duration: 0.7 }}
                            className="w-1 bg-yellow-500 rounded-full"
                          />
                        </div>
                      ) : (
                        <span
                          className={`text-lg font-black italic ${
                            isActive
                              ? "text-yellow-500"
                              : "text-white/20 group-hover:text-yellow-500"
                          }`}
                        >
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      )}
                    </div>

                    <div
                      className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        isActive
                          ? "border-yellow-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                          : "border-white/10"
                      }`}
                    >
                      <img
                        src={track.coverUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4
                        className={`text-lg md:text-xl font-bold tracking-tight ${
                          isActive
                            ? "text-yellow-500"
                            : "text-white group-hover:text-yellow-500"
                        }`}
                      >
                        {track.title}
                      </h4>
                    </div>
                  </div>

                  <div
                    className={`${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-all pr-4`}
                  >
                    {isActive && isPlaying ? (
                      <div className="text-yellow-500 flex gap-1 font-black">
                        <span className="w-1.5 h-5 bg-yellow-500 rounded-full" />
                        <span className="w-1.5 h-5 bg-yellow-500 rounded-full" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black pl-1">
                        ▶
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
