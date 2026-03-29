<?php 
include __DIR__ . '/layout/header.php';
?>
   <!-- HERO SECTION -->
   <header class="relative z-10 text-center px-6 pt-12 pb-16 md:pt-20 md:pb-24">
    <div class="animate-in">
     <div class="starburst mx-auto mb-6" style="width:100px;height:100px;font-size:16px;">
      AGE 13!
     </div>
    </div>
    <h1 id="el-hero-title" class="animate-in delay-1" style="font-family:'Bangers',cursive;font-size:clamp(2.8rem,8vw,5.5rem);color:#222;line-height:1.05;letter-spacing:3px;text-shadow:3px 3px 0 #FFD93D, 6px 6px 0 rgba(0,0,0,0.08);">Allison Ramirez</h1>
    <p id="el-hero-subtitle" class="animate-in delay-2 mt-3" style="font-family:'Patrick Hand',cursive;font-size:clamp(1.1rem,3vw,1.6rem);color:#555;">Young Artist • Dreamer • Creator</p>
    <div class="animate-in delay-3 mt-8 max-w-md mx-auto">
     <div class="speech-bubble">
      <p id="el-hero-tagline" style="font-family:'Patrick Hand',cursive;font-size:1.15rem;color:#333;">Welcome to my creative world! 🎨</p>
     </div>
    </div><!-- Decorative pencil SVG -->
    <svg class="float-anim-alt mx-auto mt-8" width="120" height="30" viewbox="0 0 120 30" style="opacity:0.6;"><rect x="20" y="8" width="80" height="14" rx="2" fill="#FFD93D" stroke="#222" stroke-width="2" /> <polygon points="100,8 115,15 100,22" fill="#FFEAA7" stroke="#222" stroke-width="2" /> <rect x="10" y="8" width="14" height="14" rx="1" fill="#FF6B6B" stroke="#222" stroke-width="2" /> <line x1="115" y1="15" x2="118" y2="15" stroke="#222" stroke-width="2" />
    </svg>
   </header>
   <!-- ABOUT SECTION -->
<section id="about" class="relative z-10 px-6 py-14 md:px-10">
  <div class="max-w-4xl mx-auto">
    <h2
      id="el-about-heading"
      style="font-family:'Bangers',cursive;font-size:clamp(2rem,5vw,3rem);color:#222;letter-spacing:2px;"
    >✏️ About Me
    </h2>

    <div class="mt-6 flex flex-col md:flex-row gap-8 items-start">
      <div class="flex-1">
        <p
          id="el-about-text"
          style="font-family:'Patrick Hand',cursive;font-size:1.15rem;line-height:1.7;color:#444;"
        >
          Hi! I'm Allison, a 13-year-old artist who loves turning blank pages into colorful worlds. From comic book characters to handmade crafts, I'm always creating something new. Drawing is my superpower, and every day I challenge myself to learn new techniques and tell stories through my art. I believe creativity has no limits — and neither do I! 🚀
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#digitalArt" class="aboutmeLink"><span class="skill-tag" style="background:#FFE8E8;">🎨 Digital Art</span></a>
          <a href="#illustration" class="aboutmeLink"><span class="skill-tag" style="background:#E8FFF5;">🖼️ Illustration</span></a>
          <a href="#photography" class="aboutmeLink"><span class="skill-tag" style="background:#FFF8E1;">📸 Photography</span></a>
          <a href="#cosplay" class="aboutmeLink"><span class="skill-tag" style="background:#E8F4FF;">🎭 Cosplay</span></a>
        </div>
      </div>

      <div
        class="comic-panel flex-shrink-0 about-photo-card"
        style="width:240px;height:300px;background:linear-gradient(135deg,#FFD93D 0%,#FF6B6B 100%);display:flex;align-items:center;justify-content:center;padding:14px;"
      >
        <div style="text-align:center;width:100%;">
          <div class="image-zoom-container about-zoom-box">
            <img
              src="./assets/images/profilePic4.png"
              alt="Allison's picture"
              class="zoom-img"
            >
          </div>
          <div
            style="font-family:'Bangers',cursive;font-size:20px;color:#222;margin-top:10px;letter-spacing:1px;"
          >
            That's Me
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
   <!-- GALLERY SECTION -->
<section id="gallery" class="relative z-10 px-6 py-14 md:px-10">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center gap-4 flex-wrap">
      <h2
        id="el-gallery-heading"
        style="font-family:'Bangers',cursive;font-size:clamp(2rem,5vw,3rem);color:#222;letter-spacing:2px;"
      >
        🖼️ My Art Gallery
      </h2>

      <div class="starburst float-anim" style="width:64px;height:64px;font-size:11px;">
        WOW!
      </div>
    </div>

<a href="#about"><h3 id="digitalArt" class="gallery-subtitle">
  🎨 Digital Art: Jukies Collection | Used Tool: Tinkercad
</h3></a>
<div class="gallery-grid mt-8" id="gallery-container-jukies"></div>
<br>
<a href="#about"><h3 id="illustration" class="gallery-subtitle">
  🖼️ Illustration Art
</h3></a>
<div class="gallery-grid mt-8" id="gallery-container-illustration"></div>
<br>
<a href="#about"><h3 id="photography" class="gallery-subtitle">
  📸 Photography
</h3></a>
<div class="gallery-grid mt-8" id="gallery-container-photography"></div>
<br>
<a href="#about"><h3 id="cosplay" class="gallery-subtitle">
  🎭 Cosplay Gallery
</h3></a>
<div class="gallery-grid mt-8" id="gallery-container-cosplay"></div>
</section>
<!-- VIDEO SECTION -->
<section id="video" class="relative z-10 px-6 py-14 md:px-10">
    <div class="max-w-3xl mx-auto">
     <h2 id="el-video-heading" style="font-family:'Bangers',cursive;font-size:clamp(2rem,5vw,3rem);color:#222;letter-spacing:2px;">🎬 Artist Statement</h2>
     <br>
     <div class="relative">
      <div class="washi-tape washi-tape-1"></div>
      <div class="washi-tape washi-tape-2"></div>
      <div class="comic-panel" style="background:#fff;">
<!-- EMBEDED VIDEO -->

<div id="video-area" class="video-container">
<!-- Removed from video:   autoplay muted loop playsinline   -->
<video
    class="portfolio-video"
    controls
    preload="metadata"
    poster="./assets/images/profilePic3.png"
  >
    <source src="./assets/videos/AllisonVideo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>


      </div>
     </div>
    </div>
   </section>
   


<?php 
include __DIR__ . '/layout/footer.html';
?>
   
 