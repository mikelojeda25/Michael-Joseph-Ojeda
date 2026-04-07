// src/app/data/Tracks.ts
import { interludeLyrics } from "./Lyrics/interlude";

import { imminealoneLyrics } from "./Lyrics/imminealone";
import { shadeLyrics } from "./Lyrics/shade";

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
import { driftAwayLyrics } from "./Lyrics/drift-away";
import { pocketMoneyLyrics } from "./Lyrics/pocket-money";
import { scratchLyrics } from "./Lyrics/scratch";
import { dontThinkItLyrics } from "./Lyrics/dont-think-it";
import { myHelpLyrics } from "./Lyrics/my-help";
import { silenceRemembersMeLyrics } from "./Lyrics/silence-remembers-me";
import { powerTrippingLyrics } from "./Lyrics/power-tripping";

import { alapaapLyrics } from "./Lyrics/alapaap";
import { kinalimutangKahaponLyrics } from "./Lyrics/kinalimutang-kahapon";
import { kontentoLyrics } from "./Lyrics/kontento";

import { allIveGotLyrics } from "./Lyrics/all-ive-got";
import { savingYourSeatLyrics } from "./Lyrics/saving-your-seat";

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
  //Can and Will Album
  {
    id: "can and will",
    name: "Can and Will",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1774190999/Untitled253_20260322222538_fuji0a.png",
    tracks: [
      {
        id: "cnw-1",
        title: "I'm Mine Alone",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1773842731/I_m_mine_alone_nksjvw.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1774190999/Untitled253_20260322222538_fuji0a.png",
        lyrics: imminealoneLyrics,
      },
      {
        id: "cnw-2",
        title: "Shade",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1773842693/Shade_-_Final_xp3syz.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1774190999/Untitled253_20260322222538_fuji0a.png",
        lyrics: shadeLyrics,
      },
    ],
  },
  // Surreal Waves Album
  {
    id: "surreal-waves",
    name: "Surreal Waves",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772864/Untitled245_20260306122907_wffpjv.png",
    tracks: [
      {
        id: "sw-7",
        title: "Strawberry Macchiato",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772553889/Strawberry_Macchiato_zaw5v9.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772864/Untitled245_20260306122907_wffpjv.png",
        lyrics: strawberryMacchiatoLyrics,
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
        id: "sw-0",
        title: "Seraphim Stare - Interlude",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774353068/Seraphim_Stare_-_Interlude_qbn0wy.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772864/Untitled245_20260306122907_wffpjv.png",
        lyrics: interludeLyrics,
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
        id: "sw-9",
        title: "A Promise We Couldn't Keep",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774352053/A_Promise_We_Couldn_t_Keep_eg27d9.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772864/Untitled245_20260306122907_wffpjv.png",
        lyrics: apwckLyrics,
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
        id: "sw-8",
        title: "Remind You",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774355469/Remind_You_tjcyip.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772864/Untitled245_20260306122907_wffpjv.png",
        lyrics: iryLyrics,
      },
    ],
  },

  // Hukom Album
  {
    id: "hukom-0",
    name: "Hukom",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773829710/Untitled249_20260318172446_fhazpt.png",
    tracks: [
      {
        id: "hukom-1",
        title: "Alipin",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772555095/Alipin_rodpi9.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773829710/Untitled249_20260318172446_fhazpt.png",
        lyrics: alipinLyrics,
      },
      {
        id: "hukom-2",
        title: "Tanikala",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1773844217/Tanikala_ivogyi.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773829710/Untitled249_20260318172446_fhazpt.png",
        lyrics: tanikalaLyrics,
      },
      {
        id: "hukom-3",
        title: "Bertud",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1773847887/BERTUD_20_rxxww1.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773829710/Untitled249_20260318172446_fhazpt.png",
        lyrics: bertudLyrics,
      },
    ],
  },
  // Heaven Paranoia Album
  {
    id: "heaven-paranoia",
    name: "Heaven Paranoia",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
    tracks: [
      {
        id: "hp-1423",
        title: "Drift Away",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774014264/Drift_Away_tgynfi.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: driftAwayLyrics,
      },
      {
        id: "hp-110",
        title: "Power Tripping",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774251867/Power_Trip_Marionette_dnfh7x.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: powerTrippingLyrics,
      },
      {
        id: "hp-1",
        title: "Barely Alive",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1773842712/Barely_Alive_rvdpqf.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: barelyAliveLyrics,
      },
      {
        id: "hp-7",
        title: "Fragile - Interlude",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774020430/Fragile_-_Interlude_xyahnj.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: interludeLyrics,
      },
      {
        id: "hp-2",
        title: "Don't Think It",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1773842685/Don_t_Think_It_nyzcq6.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: dontThinkItLyrics,
      },
      {
        id: "hp-1223",
        title: "Need Something",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774013117/Call_Me_q3mek1.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: myHelpLyrics,
      },
      {
        id: "hp-1243",
        title: "Pocket Money",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1773842699/Pocket_Money_mee4co.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773849169/IMG_20260318_235127_eeevha.png",
        lyrics: pocketMoneyLyrics,
      },
      {
        id: "hp-8843",
        title: "Scratch",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1775578344/scratch-final_skbu6j.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: scratchLyrics,
      },
      {
        id: "hp-8",
        title: "Echoes - Interlude",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774020430/Silent_Echoes_-_Interlude_zsi3dy.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: interludeLyrics,
      },
      {
        id: "hp-9",
        title: "Silence Remembers Me",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774174577/Silence_Remembers_Me_cs11vs.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1772772863/Untitled244_20260306111011_bijg3y.png",
        lyrics: silenceRemembersMeLyrics,
      },
    ],
  },
  {
    id: "kaisipan",
    name: "Kaisipan",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773830012/Untitled252_20260318182313_1_llt1ie.png",
    tracks: [
      {
        id: "kspn-1",
        title: "Alapaap",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475116/Alapaap_tlumad.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773830012/Untitled252_20260318182313_1_llt1ie.png",
        lyrics: alapaapLyrics,
      },
      {
        id: "kspn-2",
        title: "Kinalimutang Kahapon",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1772475116/Kinalimutang_Kahapon_qugf5f.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773830012/Untitled252_20260318182313_1_llt1ie.png",
        lyrics: kinalimutangKahaponLyrics,
      },
      {
        id: "kspn-3",
        title: "Kontento",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774340611/Kontento_bikx59.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1773830012/Untitled252_20260318182313_1_llt1ie.png",
        lyrics: kontentoLyrics,
      },
    ],
  },
  {
    id: "dented lens",
    name: "Dented Lens",
    artist: "Yozef",
    year: "2026",
    coverUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/v1774264325/Untitled256_20260323191054_tojq8n.png",
    tracks: [
      {
        id: "lens-1",
        title: "All I've Got",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774265809/All_I_ve_Got_-_Final_yxrdx1.wav",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1774264325/Untitled256_20260323191054_tojq8n.png",
        lyrics: allIveGotLyrics,
      },
      {
        id: "lens-2",
        title: "Saving Your Seat",
        artist: "Yozef",
        audioUrl:
          "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774285131/The_sun_is_hitting_the_side_of_my_room_pjkbqq.mp3",
        coverUrl:
          "https://res.cloudinary.com/dd5gbzoti/image/upload/v1774264325/Untitled256_20260323191054_tojq8n.png",
        lyrics: savingYourSeatLyrics,
      },
    ],
  },
];

export const musicTracks: Track[] = Albums[0].tracks;
