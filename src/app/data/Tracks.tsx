// src/app/data/Tracks.ts
import { hollowWorldLyrics } from "./Lyrics/hollow-world";
import { parallelLinesLyrics } from "./Lyrics/parallel-lines";
import { sweetLullabyLyrics } from "./Lyrics/sweet-lullaby";
import { immseLyrics } from "./Lyrics/immse";
import { breatheSlowlyLyrics } from "./Lyrics/breathe-slowly";
import { theHellIAmLyrics } from "./Lyrics/the-hell-i-am";
import { strawberryMacchiatoLyrics } from "./Lyrics/strawberry-macchiato";
import { iryLyrics } from "./Lyrics/iry";
import { apwckLyrics } from "./Lyrics/apwck";

import { tanikalaLyrics } from "./Lyrics/tanikala";
import { alipinLyrics } from "./Lyrics/alipin";
import { bertudLyrics } from "./Lyrics/bertud";

import { barelyAliveLyrics } from "./Lyrics/barely-alive";

import { alapaapLyrics } from "./Lyrics/alapaap";
import { kinalimutangKahaponLyrics } from "./Lyrics/kinalimutang-kahapon";

export interface Track {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  coverUrl: string;
  lyrics: string;
}

export interface Album {
  id: string; // Importante para sa .map()
  name: string;
  artist: string;
  year: string;
  coverUrl: string;
  tracks: Track[];
}

export const Albums: Album[] = [
  {
    id: "surreal-waves",
    name: "Surreal Waves",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/unnamed_20_bluq59.jpg",
    tracks: [
      {
        id: "sw-1",
        title: "Hollow World",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475349/Hollow_World_wemfdv.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772482746/Untitled240_20260303041733_ozeylg.png",
        lyrics: hollowWorldLyrics,
      },
      {
        id: "sw-2",
        title: "Parallel Lines",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475353/Parallel_Lines_tjj4il.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772483926/Untitled241_20260303043753_gqowf6.png",
        lyrics: parallelLinesLyrics,
      },
      {
        id: "sw-3",
        title: "Sweet Lullaby",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772711676/Sweet_Lullaby_lpelqc.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772550550/Untitled242_20260303225135_pyndnw.png",
        lyrics: sweetLullabyLyrics,
      },
      {
        id: "sw-4",
        title: "I'll Make Myself Enough",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475352/I_ll_Make_Myself_Enough_zuzfke.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772550552/Untitled242_20260303223636_ke35s7.png",
        lyrics: immseLyrics,
      },
      {
        id: "sw-5",
        title: "Breathe Slowly",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475352/Breathe_Slowly_lpeqid.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772550551/Untitled242_20260303230413_ugju2w.png",
        lyrics: breatheSlowlyLyrics,
      },
      {
        id: "sw-6",
        title: "The Hell I am",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772552093/The_Hell_I_Am_diof3k.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772552028/Untitled242_20260303233259_zvaiws.png",
        lyrics: theHellIAmLyrics,
      },
      {
        id: "sw-7",
        title: "Strawberry Macchiato",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772553889/Strawberry_Macchiato_zaw5v9.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/unnamed_20_bluq59.jpg",
        lyrics: strawberryMacchiatoLyrics,
      },
      {
        id: "sw-8",
        title: "Remind You",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772553888/I_ll_Remind_You_ledirz.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/unnamed_20_bluq59.jpg",
        lyrics: iryLyrics,
      },
      {
        id: "sw-9",
        title: "A Promise We Couldn't Keep",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772554787/A_Promise_We_Couldn_t_Keep_gtslxu.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/unnamed_20_bluq59.jpg",
        lyrics: apwckLyrics,
      },
    ],
  },
  {
    id: "tanikala",
    name: "Tanikala",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/Gemini_Generated_Image_6jsjzw6jsjzw6jsj_pjv9gd.png",
    tracks: [
      {
        id: "t-1",
        title: "Alipin",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772555095/Alipin_rodpi9.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/Gemini_Generated_Image_6jsjzw6jsjzw6jsj_pjv9gd.png",
        lyrics: alipinLyrics,
      },
      {
        id: "t-2",
        title: "Tanikala",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772555092/Tanikala_e1bj5g.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/Gemini_Generated_Image_6jsjzw6jsjzw6jsj_pjv9gd.png",
        lyrics: tanikalaLyrics,
      },
      {
        id: "t-3",
        title: "Bertud",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772713516/Bertud_kf3zsm.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475387/Gemini_Generated_Image_6jsjzw6jsjzw6jsj_pjv9gd.png",
        lyrics: bertudLyrics,
      },
    ],
  },
  {
    id: "heaven-paranoia",
    name: "Heaven Paranoia",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772555904/Heaven_Paranoia_dq9i2z.png",
    tracks: [
      {
        id: "hp-1",
        title: "Barely Alive",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772556025/Barely_Alive_mxiylb.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772555904/Heaven_Paranoia_dq9i2z.png",
        lyrics: barelyAliveLyrics,
      },
    ],
  },
  {
    id: "kaisipan",
    name: "Kaisipan",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475386/24fa3d13-012a-4745-904b-167bbc01510e_qoh8q9.jpg",
    tracks: [
      {
        id: "kspn-1",
        title: "Alapaap",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475116/Alapaap_tlumad.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475386/24fa3d13-012a-4745-904b-167bbc01510e_qoh8q9.jpg",
        lyrics: alapaapLyrics,
      },
      {
        id: "kspn-2",
        title: "Kinalimutang Kahapon",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475116/Kinalimutang_Kahapon_qugf5f.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772475386/24fa3d13-012a-4745-904b-167bbc01510e_qoh8q9.jpg",
        lyrics: kinalimutangKahaponLyrics,
      },
    ],
  },
];

export const musicTracks: Track[] = Albums[0].tracks;
