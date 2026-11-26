/* =========================================================================
   KONFIGURASI KONTEN — SILAKAN UBAH BAGIAN INI SESUAI KEBUTUHAN ANDA
   ========================================================================= */

/**
 * 1. HASH PIN (SHA-256)
 *    Jangan tulis PIN asli sebagai teks biasa di sini.
 *    Nilai di bawah ini adalah SHA-256 untuk PIN "221026".
 *    Lihat panduan di jawaban atau README untuk cara membuat hash PIN baru.
 */
const PIN_HASH_SHA256 = "122d723ab84185f56c4980f73111cfb7c9f4dd9563c7b1bd003663a8800d10e2";

/**
 * 2. TEKS HALAMAN PEMBUKA, AMPLOP, SURAT, DAN GALERI
 *    Ubah judul, sub judul, pesan error lembut, serta isi surat di sini.
 */
const CONFIG = {
  tabTitle: "Untuk Kamu — Buku Kenangan Kita",

  intro: {
    subtitle: "Kenangan Kecil Kita",
    title: "Untuk Kamu, Seseorang yang Paling Kusayang",
    text: "Ada banyak hal kecil yang rasanya tidak cukup kalau hanya kusampaikan lewat pesan singkat. Jadi aku menyimpannya di ini—khusus untukmu sayang.",
    pinPrompt: "Masukkan 6 digit tanggal spesial kita",
    pinWrongMessage: "Hmm, coba ingat lagi tanggal spesial kita ya 🤍"
  },

  envelope: {
    pretitle: "Sebuah surat kecil dariku",
    hint: "Ketuk untuk membuka"
  },

  letter: {
    date: "22 Oktober 2026",
    greeting: "Untukmu, Tugekku,",
    // GANTI: Isi surat Anda (setiap item array = 1 paragraf)
    paragraphs: [
      "Hai ibu dari anak-anakku. Bagaimana kabarmu hari ini? terimakasih sudah menyempatkan waktu untuk membaca surat ini. Ingat tidak momen-momen awal yang sederhana sangat bermakna? iyapp, momen di mana kita masih malu-malu tapi mau, wkwkwkwk.",
      "Ingat ga, momen waktu kamu to the point nanya apa aku suka kamu? pasti kamu berharap aku suka yaaa..... jujur ajaa sayang, hehehe. Jujur di hari itu aku gugup banget kamu nanya begitu dan takut kamu risih, tapi ternyata dari sana hubungan kita jadi makin deket ya sayang.",
      "Disini aku mau say thank you and sorry buat semua hal yang pernah aku lakukan ke kamu. Thank you udah selalu memperlakukan aku sebaik itu, kamu selalu ngertiin aku dan semua hal baik yang kamu lakukan. Di sisi lain, maaf kalau semisal ada perbuatanu yang menyinggung kamu sayang, aku tida bermaksud begitu kok. ",
      "Surat ini mungkin ga jelas, tapi aku cuma mau bilang. Kalo aku itu sayang banget sama kamu Tugek Ari, makasi udah selalu ada buat aku. Terimalah gift kecil dari aku ini, semoga kamu suka yaa.",
      "Dan akhir kata, Astungkara kita selalu kuat menghadapi segala badai yang menerpa kita. I Love u so muchh Tugekkuu, terimakasih banyak atas semuanya, sampai berjumpa di pernikahan kita sayang. EHEHEHE."
    ],
    signature: "Love u,",
    sender: "Dariku, Wah Okaa",
    buttonText: "Lihat Kenangan Kita 💌"
  },

  gallery: {
    title: "Halaman Kenangan Kita",
    subtitle: "Potongan waktu yang selalu ingin kuulang bersamamu"
  }
};

/**
 * 3. DAFTAR FOTO KENANGAN
 *    Tambahkan file foto Anda ke folder assets/photos/ lalu isi array di bawah.
 *    Format tiap item: { src: "assets/photos/nama-file.jpg", caption: "...", date: "..." }
 */
const PHOTOS = [
  {
    src: "assets/photos/kenangan-01.jpg",
    caption: "First meet kata tugek",
    date: "01 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-02.jpg",
    caption: "Fotbar apollo",
    date: "03 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-03.jpg",
    caption: "Wedding kita, ehhh",
    date: "12 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-04.jpg",
    caption: "First date kita (hatees)",
    date: "19 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-05.jpg",
    caption: "Nempel banget kak, temenan loh",
    date: "19 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-06.jpg",
    caption: "Aku nyamperin kamu",
    date: "20 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-07.jpg",
    caption: "Aku nyamperin kamu lagi, kita mesra-mesraan",
    date: "21 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-08.jpg",
    caption: "Lucu bangett sih",
    date: "21 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-09.jpg",
    caption: "First Mwah ya???",
    date: "21 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-27.jpg",
    caption: "Ett, jadiann tuhhh",
    date: "22 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-10.jpg",
    caption: "Nyosor gitu kak",
    date: "23 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-11.jpg",
    caption: "Lw date sama kamu",
    date: "23 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-12.jpg",
    caption: "Numpang foto aja",
    date: "23 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-13.jpg",
    caption: "Belajar algoritma sama kamu",
    date: "26 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-14.jpg",
    caption: "mesra bangett kita kak",
    date: "29 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-15.jpg",
    caption: "Lucu banget kalian",
    date: "29 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-16.jpg",
    caption: "Jalan-jalan ke Bandong (collection)",
    date: "30 Oktober 2026"
  },
  {
    src: "assets/photos/kenangan-17.jpg",
    caption: "nempel bangett sih",
    date: "01 November 2026"
  },
  {
    src: "assets/photos/kenangan-18.jpg",
    caption: "Podscast bindo bareng mbg guehh",
    date: "01 November 2026"
  },
  {
    src: "assets/photos/kenangan-19.jpg",
    caption: "Peyukkkkkkkk",
    date: "06 November 2026"
  },
  {
    src: "assets/photos/kenangan-20.jpg",
    caption: "Ngedate teruss ya kak",
    date: "06 November 2026"
  },
  {
    src: "assets/photos/kenangan-21.jpg",
    caption: "Ketemu camer tuhh",
    date: "08 November 2026"
  },
  {
    src: "assets/photos/kenangan-22.jpg",
    caption: "LW date lagii dongg",
    date: "08 November 2026"
  },
  {
    src: "assets/photos/kenangan-23.jpg",
    caption: "poto-poto randomm aja, tapi selaluu bareng",
    date: "13 November 2026"
  },
  {
    src: "assets/photos/kenangan-24.jpg",
    caption: "Makrab date, lucuu ",
    date: "22 November 2026"
  },
  {
    src: "assets/photos/kenangan-25.jpg",
    caption: "seperti biasa, nempel terus",
    date: "22 November 2026"
  },
  {
    src: "assets/photos/kenangan-26.jpg",
    caption: "Aduh potbar tuhh",
    date: "22 November 2026"
  }
];

/* =========================================================================
   LOGIKA APLIKASI (UMUMNYA TIDAK PERLU DIUBAH)
   ========================================================================= */
(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const screens = {
    pin: document.getElementById("screen-pin"),
    envelope: document.getElementById("screen-envelope"),
    letter: document.getElementById("screen-letter"),
    gallery: document.getElementById("screen-gallery")
  };

  let currentScreen = "pin";
  let isTransitioningScreen = false;
  let letterAnimated = false;
  let galleryBuilt = false;
  let lightboxIndex = 0;
  let userPausedMusic = false;

  // --- Elemen Musik ---
  const bgMusic = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle");
  let isMusicPlaying = false;

  function updateMusicUI(playing) {
    isMusicPlaying = playing;
    musicToggle.classList.toggle("is-playing", playing);
    musicToggle.setAttribute("aria-pressed", String(playing));
    musicToggle.setAttribute("aria-label", playing ? "Jeda musik latar" : "Putar musik latar");
  }

  function detachAutoplayUnlock() {
    document.removeEventListener("click",       handleFirstInteraction, true);
    document.removeEventListener("touchend",    handleFirstInteraction, true);
    document.removeEventListener("pointerdown", handleFirstInteraction, true);
    document.removeEventListener("touchstart",  handleFirstInteraction, true);
    document.removeEventListener("keydown",     handleFirstInteraction, true);
  }

  async function tryStartMusic({ force = false } = {}) {
    if (!bgMusic || isMusicPlaying) return;
    if (userPausedMusic && !force) return;
    try {
      bgMusic.volume = 0.45;
      const playPromise = bgMusic.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      updateMusicUI(true);
      detachAutoplayUnlock();
    } catch (err) {
      updateMusicUI(false);
      // Jika bukan AbortError (browser interrupt sendiri), coba lagi saat interaksi berikutnya
      if (!err || err.name !== "AbortError") {
        document.addEventListener("click", handleFirstInteraction, { capture: true, passive: true });
      }
    }
  }

  function handleFirstInteraction(event) {
    if (event.target && event.target.closest && event.target.closest("#music-toggle")) {
      return; // Biarkan toggleMusic() yang menangani klik tombol musik
    }
    tryStartMusic();
  }

  function initMusicAutoplay() {
    if (!bgMusic) return;

    bgMusic.addEventListener("play", () => {
      updateMusicUI(true);
      detachAutoplayUnlock();
    });
    bgMusic.addEventListener("pause", () => {
      updateMusicUI(false);
    });

    // Jika <audio autoplay> langsung berhasil diputar browser (desktop/Chrome)
    if (!bgMusic.paused) {
      updateMusicUI(true);
      return;
    }

    // Coba autoplay langsung saat halaman dimuat
    tryStartMusic();

    // Fallback: putar otomatis pada interaksi pertama pengguna (Safari iOS / Chrome mobile)
    document.addEventListener("click",       handleFirstInteraction, { capture: true, passive: true });
    document.addEventListener("touchend",    handleFirstInteraction, { capture: true, passive: true });
    document.addEventListener("pointerdown", handleFirstInteraction, { capture: true, passive: true });
    document.addEventListener("touchstart",  handleFirstInteraction, { capture: true, passive: true });
    document.addEventListener("keydown",     handleFirstInteraction, { capture: true });
  }

  function toggleMusic() {
    if (!bgMusic) return;
    if (isMusicPlaying) {
      userPausedMusic = true;
      bgMusic.pause();
      updateMusicUI(false);
      detachAutoplayUnlock();
    } else {
      userPausedMusic = false;
      tryStartMusic({ force: true });
    }
  }

  musicToggle.addEventListener("click", toggleMusic);

  // --- Injeksi Teks Konfigurasi ---
  function applyConfigTexts() {
    document.title = CONFIG.tabTitle;
    document.getElementById("intro-subtitle").textContent = CONFIG.intro.subtitle;
    document.getElementById("intro-title").textContent = CONFIG.intro.title;
    document.getElementById("intro-text").textContent = CONFIG.intro.text;
    document.getElementById("pin-prompt").textContent = CONFIG.intro.pinPrompt;

    document.querySelector(".envelope-pretitle").textContent = CONFIG.envelope.pretitle;
    document.getElementById("envelope-hint").textContent = CONFIG.envelope.hint;

    document.getElementById("letter-date").textContent = CONFIG.letter.date;
    document.getElementById("letter-greeting").textContent = CONFIG.letter.greeting;
    document.getElementById("letter-signature").textContent = CONFIG.letter.signature;
    document.getElementById("letter-sender").textContent = CONFIG.letter.sender;
    document.getElementById("to-gallery-btn-text").textContent = CONFIG.letter.buttonText;

    document.getElementById("gallery-title").textContent = CONFIG.gallery.title;
    document.getElementById("gallery-subtitle").textContent = CONFIG.gallery.subtitle;
  }

  // --- Hiasan Kelopak / Hati Melayang ---
  function initFloatingPetals() {
    if (prefersReducedMotion) return;
    const container = document.getElementById("floating-petals");
    if (!container) return;

    const count = 9;
    const petalSvg = `<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path d="M10 17.6l-1.2-1.1C4.5 12.6 2 10.2 2 7.2 2 4.8 3.9 3 6.3 3c1.4 0 2.8.7 3.7 1.8C10.9 3.7 12.3 3 13.7 3 16.1 3 18 4.8 18 7.2c0 3-2.5 5.4-6.8 9.3L10 17.6z"/></svg>`;
    const leafSvg = `<svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path d="M16.5 3.5C11 3.5 5.8 6.5 4 12.5c-.4 1.3-.5 2.7-.3 4 1.3.2 2.7.1 4-.3 6-1.8 9-7 8.8-12.7z"/></svg>`;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.className = "petal";
      el.innerHTML = i % 3 === 0 ? petalSvg : leafSvg;
      el.style.left = `${8 + ((i * 11) % 86)}%`;
      el.style.setProperty("--petal-dur", `${16 + (i % 5) * 3}s`);
      el.style.setProperty("--petal-delay", `${-(i * 2.3)}s`);
      el.style.setProperty("--petal-drift", `${(i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 12)}px`);
      el.style.setProperty("--petal-rot", `${(i % 2 === 0 ? 1 : -1) * (120 + i * 22)}deg`);
      el.style.setProperty("--petal-opacity", `${0.14 + (i % 3) * 0.06}`);
      container.appendChild(el);
    }
  }

  // --- Perpindahan Layar Halus ---
  function switchScreen(targetName) {
    if (isTransitioningScreen || currentScreen === targetName) return;
    const prev = screens[currentScreen];
    const next = screens[targetName];
    if (!prev || !next) return;

    isTransitioningScreen = true;
    prev.classList.add("screen--leaving");
    prev.classList.remove("screen--active");
    prev.setAttribute("aria-hidden", "true");

    const delay = prefersReducedMotion ? 50 : 240;
    window.setTimeout(() => {
      next.scrollTop = 0;
      next.classList.add("screen--active");
      next.setAttribute("aria-hidden", "false");
      currentScreen = targetName;

      if (targetName === "letter") {
        startLetterReveal();
      } else if (targetName === "gallery") {
        buildGalleryOnce();
      }

      window.setTimeout(() => {
        prev.classList.remove("screen--leaving");
        isTransitioningScreen = false;
      }, prefersReducedMotion ? 60 : 520);
    }, delay);
  }

  // --- SHA-256 Verifikasi PIN ---
  async function sha256Hex(text) {
    if (window.crypto && window.crypto.subtle) {
      const data = new TextEncoder().encode(text);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
    // Fallback murni JS hanya jika dibuka via file:// tanpa crypto.subtle
    return fallbackSha256(text);
  }

  function fallbackSha256(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    let result = "";
    const words = [];
    const asciiBitLength = ascii.length * 8;
    const hash = [];
    const k = [];
    let primeCounter = 0;
    const isComposite = {};

    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }

    ascii += "\x80";
    while ((ascii.length % 64) - 56) ascii += "\x00";
    for (let i = 0; i < ascii.length; i++) {
      const j = ascii.charCodeAt(i);
      words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words.length] = (asciiBitLength / maxWord) | 0;
    words[words.length] = asciiBitLength;

    for (let j = 0; j < words.length;) {
      const w = words.slice(j, (j += 16));
      const oldHash = hash.slice(0);
      for (let i = 0; i < 64; i++) {
        const w15 = w[i - 15];
        const w2 = w[i - 2];
        const a = hash[0];
        const e = hash[4];
        const temp1 =
          hash[7] +
          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
          ((e & hash[5]) ^ (~e & hash[6])) +
          k[i] +
          (w[i] =
            i < 16
              ? w[i]
              : (w[i - 16] +
                  (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                  w[i - 7] +
                  (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
                0);
        const temp2 =
          (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash.unshift((temp1 + temp2) | 0);
        hash[4] = (hash[4] + temp1) | 0;
        hash.pop();
      }
      for (let i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 3; j + 1; j--) {
        const b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? "0" : "") + b.toString(16);
      }
    }
    return result;
  }

  // --- Logika Layar 1: 6 Kotak PIN ---
  const pinGroup = document.getElementById("pin-group");
  const pinInputs = Array.from(document.querySelectorAll(".pin-digit"));
  const pinFeedback = document.getElementById("pin-feedback");
  let isVerifyingPin = false;

  function setPinFeedback(message) {
    pinFeedback.textContent = message;
    pinFeedback.classList.toggle("is-visible", Boolean(message));
  }

  function clearPinInputs({ focusFirst = false } = {}) {
    pinInputs.forEach((input) => {
      input.value = "";
      input.classList.remove("is-filled", "is-error", "is-success");
    });
    if (focusFirst) {
      pinInputs[0].focus();
    }
  }

  async function verifyPinIfComplete() {
    const code = pinInputs.map((input) => input.value).join("");
    if (code.length !== 6 || isVerifyingPin) return;

    isVerifyingPin = true;
    const digest = await sha256Hex(code);

    if (digest === PIN_HASH_SHA256) {
      setPinFeedback("");
      pinInputs.forEach((input) => {
        input.classList.remove("is-error");
        input.classList.add("is-success");
        input.blur();
      });

      window.setTimeout(() => {
        switchScreen("envelope");
      }, prefersReducedMotion ? 120 : 520);
    } else {
      pinInputs.forEach((input) => input.classList.add("is-error"));
      pinGroup.classList.remove("is-shake");
      void pinGroup.offsetWidth; // trigger reflow untuk ulang animasi shake
      pinGroup.classList.add("is-shake");
      setPinFeedback(CONFIG.intro.pinWrongMessage);

      window.setTimeout(() => {
        pinGroup.classList.remove("is-shake");
        clearPinInputs({ focusFirst: true });
        isVerifyingPin = false;
      }, prefersReducedMotion ? 160 : 520);
    }
  }

  function fillDigitsFrom(startIndex, digitsText) {
    const clean = digitsText.replace(/\D/g, "");
    if (!clean) return;

    let cursor = startIndex;
    for (const ch of clean) {
      if (cursor >= pinInputs.length) break;
      pinInputs[cursor].value = ch;
      pinInputs[cursor].classList.add("is-filled");
      pinInputs[cursor].classList.remove("is-error");
      cursor++;
    }

    if (cursor < pinInputs.length) {
      pinInputs[cursor].focus();
    } else {
      pinInputs[pinInputs.length - 1].focus();
    }

    verifyPinIfComplete();
  }

  pinInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      if (isVerifyingPin) {
        event.target.value = event.target.value.slice(-1);
        return;
      }

      setPinFeedback("");
      const raw = event.target.value.replace(/\D/g, "");

      if (!raw) {
        event.target.value = "";
        event.target.classList.remove("is-filled");
        return;
      }

      if (raw.length > 1) {
        fillDigitsFrom(index, raw);
        return;
      }

      event.target.value = raw;
      event.target.classList.add("is-filled");
      event.target.classList.remove("is-error");

      if (index < pinInputs.length - 1) {
        pinInputs[index + 1].focus();
      }
      verifyPinIfComplete();
    });

    input.addEventListener("keydown", (event) => {
      if (isVerifyingPin) return;

      if (event.key === "Backspace") {
        if (input.value) {
          input.value = "";
          input.classList.remove("is-filled");
        } else if (index > 0) {
          pinInputs[index - 1].value = "";
          pinInputs[index - 1].classList.remove("is-filled");
          pinInputs[index - 1].focus();
        }
        event.preventDefault();
      } else if (event.key === "ArrowLeft" && index > 0) {
        pinInputs[index - 1].focus();
      } else if (event.key === "ArrowRight" && index < pinInputs.length - 1) {
        pinInputs[index + 1].focus();
      }
    });

    input.addEventListener("paste", (event) => {
      event.preventDefault();
      if (isVerifyingPin) return;
      const pasted = (event.clipboardData || window.clipboardData).getData("text");
      fillDigitsFrom(index, pasted);
    });

    input.addEventListener("focus", () => {
      input.select();
    });
  });

  // --- Logika Layar 2: Animasi Amplop 3D (3.6 detik) ---
  const envelopeTrigger = document.getElementById("envelope-trigger");
  const envelopeFlap = document.getElementById("envelope-flap");
  const envelopeHint = document.getElementById("envelope-hint");
  const envelopePretitle = document.querySelector(".envelope-pretitle");
  let isOpeningEnvelope = false;

  envelopeTrigger.addEventListener("click", () => {
    if (isOpeningEnvelope) return;
    isOpeningEnvelope = true;
    envelopeTrigger.classList.add("is-opening");
    envelopeHint.classList.add("is-hiding-hint");
    envelopePretitle.style.opacity = "0";

    // Interaksi pengguna membuka amplop dipakai untuk memutar musik latar (aman untuk iOS)
    tryStartMusic();

    if (prefersReducedMotion) {
      envelopeTrigger.classList.add("step-flap");
      envelopeFlap.classList.add("is-behind");
      window.setTimeout(() => switchScreen("letter"), 120);
      return;
    }

    // 1. Penutup amplop terbuka 3D ke atas (0ms - 950ms)
    envelopeTrigger.classList.add("step-flap");
    window.setTimeout(() => {
      envelopeFlap.classList.add("is-behind");
    }, 450);

    // 2. Kertas surat perlahan naik keluar dari amplop (850ms - 1900ms)
    window.setTimeout(() => {
      envelopeTrigger.classList.add("step-rise");
    }, 850);

    // 3. Amplop memudar + sedikit turun (1800ms - 2600ms)
    window.setTimeout(() => {
      envelopeTrigger.classList.add("step-fade-envelope");
    }, 1800);

    // 4. Kertas surat membesar ke tengah, lalu pindah ke Layar 3 (2550ms - 3550ms)
    window.setTimeout(() => {
      envelopeTrigger.classList.add("step-expand");
    }, 2550);

    window.setTimeout(() => {
      switchScreen("letter");
    }, 3450);
  });

  // --- Logika Layar 3: Isi Surat Paragraf demi Paragraf ---
  const letterBody = document.getElementById("letter-body");
  const letterFooter = document.querySelector(".letter-footer");
  const toGalleryBtn = document.getElementById("to-gallery-btn");

  function startLetterReveal() {
    if (letterAnimated) return;
    letterAnimated = true;

    letterBody.innerHTML = "";
    const paragraphEls = CONFIG.letter.paragraphs.map((text) => {
      const p = document.createElement("p");
      p.className = "letter-paragraph";
      p.textContent = text;
      letterBody.appendChild(p);
      return p;
    });

    if (prefersReducedMotion) {
      paragraphEls.forEach((p) => p.classList.add("is-shown"));
      letterFooter.classList.add("is-shown");
      toGalleryBtn.disabled = false;
      toGalleryBtn.classList.add("is-visible");
      return;
    }

    const baseDelay = 220;
    const stepDelay = 680;

    paragraphEls.forEach((p, idx) => {
      window.setTimeout(() => {
        p.classList.add("is-shown");
      }, baseDelay + idx * stepDelay);
    });

    const footerDelay = baseDelay + paragraphEls.length * stepDelay + 180;
    window.setTimeout(() => {
      letterFooter.classList.add("is-shown");
    }, footerDelay);

    // Tombol baru muncul setelah seluruh isi surat selesai tampil
    window.setTimeout(() => {
      toGalleryBtn.disabled = false;
      toGalleryBtn.classList.add("is-visible");
    }, footerDelay + 520);
  }

  toGalleryBtn.addEventListener("click", () => {
    switchScreen("gallery");
  });

  // --- Logika Layar 4: Galeri Polaroid & Scroll Reveal ---
  const galleryGrid = document.getElementById("gallery-grid");
  const backToLetterBtn = document.getElementById("back-to-letter-btn");

  backToLetterBtn.addEventListener("click", () => {
    switchScreen("letter");
  });

  function buildGalleryOnce() {
    if (galleryBuilt) return;
    galleryBuilt = true;

    const fragment = document.createDocumentFragment();
    PHOTOS.forEach((photo, idx) => {
      const item = document.createElement("div");
      item.className = "polaroid-item";
      item.setAttribute("role", "listitem");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "polaroid-btn";
      btn.setAttribute("aria-label", `Buka foto: ${photo.caption}`);
      btn.addEventListener("click", () => openLightbox(idx));

      const wrap = document.createElement("div");
      wrap.className = "polaroid-photo-wrap";

      const img = document.createElement("img");
      img.className = "polaroid-photo";
      img.src = photo.src;
      img.alt = photo.caption;
      img.loading = "lazy";
      img.decoding = "async";

      const caption = document.createElement("p");
      caption.className = "polaroid-caption";
      caption.textContent = photo.caption;

      const date = document.createElement("p");
      date.className = "polaroid-date";
      date.textContent = photo.date;

      wrap.appendChild(img);
      btn.appendChild(wrap);
      btn.appendChild(caption);
      btn.appendChild(date);
      item.appendChild(btn);
      fragment.appendChild(item);
    });

    galleryGrid.appendChild(fragment);

    const items = Array.from(galleryGrid.querySelectorAll(".polaroid-item"));
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: screens.gallery,
        threshold: 0.12,
        rootMargin: "0px 0px -24px 0px"
      }
    );

    items.forEach((el, idx) => {
      el.style.transitionDelay = `${Math.min((idx % 4) * 70, 210)}ms`;
      observer.observe(el);
    });
  }

  // --- Lightbox + Swipe Kiri/Kanan di iPhone ---
  const lightbox = document.getElementById("lightbox");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  const lightboxStage = document.getElementById("lightbox-stage");
  const lightboxCard = document.getElementById("lightbox-card");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDate = document.getElementById("lightbox-date");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");

  function renderLightboxPhoto() {
    const item = PHOTOS[lightboxIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxDate.textContent = item.date;
    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${PHOTOS.length}`;
  }

  function openLightbox(index) {
    lightboxIndex = (index + PHOTOS.length) % PHOTOS.length;
    renderLightboxPhoto();
    lightbox.hidden = false;
    requestAnimationFrame(() => {
      lightbox.classList.add("is-open");
    });
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    window.setTimeout(() => {
      lightbox.hidden = true;
    }, prefersReducedMotion ? 40 : 280);
  }

  function stepLightbox(delta) {
    if (PHOTOS.length <= 1) return;
    lightboxIndex = (lightboxIndex + delta + PHOTOS.length) % PHOTOS.length;
    if (!prefersReducedMotion) {
      lightboxCard.style.opacity = "0.65";
      lightboxCard.style.transform = `translate3d(${delta > 0 ? "-14px" : "14px"}, 0, 0)`;
      window.setTimeout(() => {
        renderLightboxPhoto();
        lightboxCard.style.opacity = "1";
        lightboxCard.style.transform = "translate3d(0, 0, 0)";
      }, 120);
    } else {
      renderLightboxPhoto();
    }
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  lightboxNext.addEventListener("click", () => stepLightbox(1));

  // Tutup jika mengetuk area kosong di sekitar kartu pada stage
  lightboxStage.addEventListener("click", (event) => {
    if (event.target === lightboxStage) {
      closeLightbox();
    }
  });

  // Dukungan keyboard (Desktop)
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });

  // Dukungan swipe kiri-kanan (Touch / iPhone)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isSwiping = false;

  lightboxStage.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      touchDeltaX = 0;
      isSwiping = true;
      lightboxCard.style.transition = "none";
    },
    { passive: true }
  );

  lightboxStage.addEventListener(
    "touchmove",
    (event) => {
      if (!isSwiping || event.touches.length !== 1) return;
      const dx = event.touches[0].clientX - touchStartX;
      const dy = event.touches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy)) {
        touchDeltaX = dx;
        lightboxCard.style.transform = `translate3d(${dx * 0.45}px, 0, 0)`;
      }
    },
    { passive: true }
  );

  lightboxStage.addEventListener(
    "touchend",
    () => {
      if (!isSwiping) return;
      isSwiping = false;
      lightboxCard.style.transition = "";
      if (Math.abs(touchDeltaX) > 48) {
        stepLightbox(touchDeltaX < 0 ? 1 : -1);
      } else {
        lightboxCard.style.transform = "translate3d(0, 0, 0)";
      }
      touchDeltaX = 0;
    },
    { passive: true }
  );

  // --- Mode Development: lompat langsung ke layar tertentu ---
  // Pakai: http://127.0.0.1:5500/?step=gallery  (pin | envelope | letter | gallery)
  function devJumpTo(name) {
    if (!screens[name]) return;

    Object.entries(screens).forEach(([key, el]) => {
      const isTarget = key === name;
      el.classList.toggle("screen--active", isTarget);
      el.classList.remove("screen--leaving");
      el.setAttribute("aria-hidden", String(!isTarget));
    });
    currentScreen = name;

    if (name === "letter") startLetterReveal();
    if (name === "gallery") buildGalleryOnce();
  }

  // --- Inisialisasi ---
  applyConfigTexts();
  initFloatingPetals();
  initMusicAutoplay();

  const isDev = ["localhost", "127.0.0.1"].includes(location.hostname);
  const devStep = new URLSearchParams(location.search).get("step");
  if (isDev && devStep) devJumpTo(devStep);
})();
