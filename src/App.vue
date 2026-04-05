<template>
  <main class="app">
    <!-- Section 1: Hero -->
    <section class="section hero" id="hero">
      <div class="hero-bg" :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1596464716127-f9a82b294132?w=800)' }"></div>
      <div class="hero-overlay"></div>
      <div class="clouds-container">
        <img v-for="n in 12" :key="'hero-'+n" :src="'/emily-invitacion/images/cloud' + ((n-1)%4+1) + '.png'" 
             class="cloud" :style="getCloudStyle(n)" alt="cloud">
      </div>
      <div class="lottie-bunny">
        <lottie-player 
          src="https://oliver404.github.io/emily-invitacion/conejito.json"
          background="transparent"
          speed="1"
          style="width: 200px; height: 200px;"
          loop
          autoplay
        />
      </div>
      <div class="hero-content">
        <div class="lottie-in-content">
          <lottie-player 
            src="https://oliver404.github.io/emily-invitacion/pastel.json"
            background="transparent"
            speed="1"
            style="width: 100px; height: 100px;"
            loop
            autoplay
          />
        </div>
        <h1 class="hero-title">{{ data.evento.titulo }}</h1>
        <p class="hero-subtitle">{{ data.evento.subtitulo }}</p>
        <div class="hero-name">{{ data.cumpleañero.nombre }}</div>
        <div class="hero-age">{{ data.cumpleañero.edad }}.er Birthday! 🎂</div>
        <div class="scroll-hint">⬇ Desliza para más ⬇</div>
      </div>
    </section>

    <!-- Section 2: Fecha -->
    <section class="section fecha" id="fecha">
      <div class="clouds-container">
        <img v-for="n in 12" :key="'fecha-'+n" :src="'/emily-invitacion/images/cloud' + ((n-1)%4+1) + '.png'" 
             class="cloud" :style="getCloudStyle(n)" alt="cloud">
      </div>
      <div class="section-content">
        <div class="icon">
          <lottie-player 
            src="/emily-invitacion/fecha.json"
            background="transparent"
            speed="1"
            style="width: 150px; height: 150px;"
            loop
            autoplay
          />
        </div>
        <h2>Fecha y Hora</h2>
        <div class="date-box">
          <div class="date">{{ data.evento.fecha }}</div>
          <div class="time">{{ data.evento.hora }}</div>
        </div>
      </div>
    </section>

    <!-- Section 3: Ubicación -->
    <section class="section ubicacion" id="ubicacion">
      <div class="clouds-container">
        <img v-for="n in 12" :key="'ubi-'+n" :src="'/emily-invitacion/images/cloud' + ((n-1)%4+1) + '.png'" 
             class="cloud" :style="getCloudStyle(n)" alt="cloud">
      </div>
      <div class="bg-image" :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800)' }"></div>
      <div class="overlay"></div>
      <div class="section-content">
        <div class="icon">📍</div>
        <h2>Ubicación</h2>
        <div class="location-box">
          <div class="place">{{ data.evento.ubicacion.lugar }}</div>
          <div class="address">{{ data.evento.ubicacion.dirección }}</div>
          <div class="city">{{ data.evento.ubicacion.ciudad }}</div>
          <div class="map-container">
            <iframe 
              width="100%" 
              height="150" 
              style="border:0; border-radius: 15px;" 
              loading="lazy" 
              allowfullscreen 
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU4LjEiTiA5OUoxMzMsMjAuNTYY!5e0!3m2!1ses!2smx!4v1">
            </iframe>
          </div>
          <a :href="mapsUrl" target="_blank" class="directions-btn">
            📍 Cómo llegar
          </a>
        </div>
      </div>
    </section>

    <!-- Section 4: Dress Code -->
    <section class="section dresscode" id="dresscode">
      <div class="clouds-container">
        <img v-for="n in 12" :key="'dress-'+n" :src="'/emily-invitacion/images/cloud' + ((n-1)%4+1) + '.png'" 
             class="cloud" :style="getCloudStyle(n)" alt="cloud">
      </div>
      <div class="bg-image" :style="{ backgroundImage: 'url(' + data.fotos.dressCode + ')' }"></div>
      <div class="overlay"></div>
      <!-- <div class="lottie-overlay">
        <lottie-player 
          src="/emily-invitacion/conejito.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: 100%; position: absolute;"
          loop
          autoplay
        />
      </div> -->
      <div class="dc-content">
        <div class="icon">👗</div>
        <h2>Dress Code</h2>
        <div class="dc-box">{{ data.evento.dressCode }}</div>
      </div>
    </section>

    <!-- Section 5: RSVP -->
    <section class="section rsvp" id="rsvp">
      <div class="clouds-container">
        <img v-for="n in 12" :key="'rsvp-'+n" :src="'/emily-invitacion/images/cloud' + ((n-1)%4+1) + '.png'" 
             class="cloud" :style="getCloudStyle(n)" alt="cloud">
      </div>
      <div class="section-content">
        <div class="icon">💌</div>
        <h2>Confirmar Asistencia</h2>
        <div class="rsvp-box">
          <p>¡Quiero estar en tu fiesta! 🎈</p>
          <a :href="data.rsvp.whatsapp" target="_blank" class="rsvp-btn">
            Confirmar 💕
          </a>
          <p class="contact">{{ data.rsvp.contacto }}</p>
        </div>
      </div>
    </section>

    <!-- Section 6: Fotos Recuerdos -->
    <section class="section fotos" id="fotos">
      <div class="parallax-container" id="parallax-container">
        <img 
          v-for="(photo, index) in photos" 
          :key="index"
          :src="photo.url"
          class="parallax-photo"
          :style="photo.style"
        >
      </div>
      <div class="section-content">
        <div class="icon">📸</div>
        <h2>Recuerdos</h2>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from './data/invitacion.json'

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.evento.ubicacion.lugar + ' ' + data.evento.ubicacion.dirección + ' ' + data.evento.ubicacion.ciudad)}`

const getCloudStyle = (n) => {
  const sizes = [60, 90, 120, 80, 140, 100, 70, 130, 110, 95, 85, 125]
  const topPositions = [5, 15, 25, 35, 45, 55, 65, 75, 10, 30, 50, 70]
  const speeds = [25, 20, 15, 22, 12, 18, 28, 14, 16, 24, 19, 13]
  const delays = [0, -5, -10, -3, -8, -15, -2, -12, -7, -4, -11, -6]
  const size = sizes[n-1]
  return {
    width: size + 'px',
    top: topPositions[n-1] + '%',
    animationDuration: speeds[n-1] + 's',
    animationDelay: delays[n-1] + 's',
    opacity: size > 100 ? 0.5 : (size / 100) * 0.4 + 0.1
  }
}

// Parallax rain with lanes - avoiding overlaps
const photos = ref([])

onMounted(() => {
  // Duplicate photos for more images
  const allPhotos = [
    ...data.fotos.galeria,
    ...data.fotos.galeria,
    ...data.fotos.galeria,
    ...data.fotos.galeria
  ]
  
  // 5 lanes (horizontal positions)
  const lanes = [5, 25, 45, 65, 80]
  
  // Track accumulated delay per lane
  let delaysPerLane = [
    Math.random() * 2,
    Math.random() * 2,
    Math.random() * 2,
    Math.random() * 2,
    Math.random() * 2
  ]
  
  const generatedPhotos = []
  
  allPhotos.forEach((url) => {
    // Random lane selection
    const laneIndex = Math.floor(Math.random() * lanes.length)
    const laneBase = lanes[laneIndex]
    
    // Small variation so not perfectly aligned in lane
    const xVariation = Math.floor(Math.random() * 10) - 5
    const finalLeft = laneBase + xVariation
    
    // Use accumulated delay for this lane
    const finalDelay = delaysPerLane[laneIndex]
    
    // Update delay for next photo in same lane (2.5-4.5s gap)
    delaysPerLane[laneIndex] += (Math.random() * 2) + 2.5
    
    // Duration: 12-27 seconds (parallax effect)
    const randomDuration = Math.floor(Math.random() * 15) + 12
    
    // Width: 100-160px
    const randomWidth = Math.floor(Math.random() * 60) + 100
    
    generatedPhotos.push({
      url: url,
      style: {
        left: finalLeft + '%',
        animationDuration: randomDuration + 's',
        animationDelay: finalDelay + 's',
        width: randomWidth + 'px',
        height: (randomWidth * 1.2) + 'px',
        zIndex: Math.floor(randomWidth / 10)
      }
    })
  })
  
  photos.value = generatedPhotos
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@400;500;600;700&display=swap');

.app {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  overflow: hidden;
  scroll-snap-stop: always;
}

.icon {
  font-size: 3rem;
  margin-bottom: 10px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Clouds */
.clouds-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.cloud {
  position: absolute;
  left: -150px;
  animation: cloudFloat linear infinite;
  will-change: transform;
}

@keyframes cloudFloat {
  from { transform: translateX(0); }
  to { transform: translateX(calc(100vw + 300px)); }
}

/* Background images */
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.overlay, .hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 182, 193, 0.6);
  z-index: 0;
}

.lottie-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.lottie-bunny {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 3;
}

/* Hero */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.hero-content {
  text-align: center;
  z-index: 2;
}

.lottie-in-content {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lottie-in-content lottie-player {
  width: 200px !important;
  height: 200px !important;
}

.bunny-icon {
  font-size: 4rem;
  animation: wiggle 1s infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

.hero-title {
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 10px;
}

.hero-subtitle {
  font-family: 'Baloo 2', cursive;
  font-size: 1.4rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 20px;
}

.hero-name {
  font-family: 'Fredoka', cursive;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 3px 3px 0 #ff69b4, 2px 2px 6px rgba(0,0,0,0.5);
}

.hero-age {
  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;
  margin: 10px 0 40px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.scroll-hint {
  font-family: 'Baloo 2', cursive;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  animation: pulse 2s infinite;
  background: rgba(255,105,180,0.4);
  padding: 10px 20px;
  border-radius: 20px;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* Sections */
.section-content {
  text-align: center;
  max-width: 500px;
  z-index: 2;
}

.section h2 {
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 20px;
}

/* Fecha */
.fecha {
  background: linear-gradient(135deg, #ff69b4, #ffb6c1);
}

.date-box {
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.date, .time {
  font-family: 'Fredoka', cursive;
  font-size: 1.6rem;
  color: #ff69b4;
  font-weight: bold;
  margin: 10px 0;
}

/* Ubicación */
.ubicacion {
  background: linear-gradient(135deg, #ffb6c1, #ffa0b4);
}

.location-box {
  background: rgba(255,255,255,0.95);
  padding: 25px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.place {
  font-family: 'Fredoka', cursive;
  font-size: 1.4rem;
  font-weight: bold;
  color: #ff69b4;
  margin-bottom: 10px;
}

.address, .city {
  font-family: 'Baloo 2', cursive;
  font-size: 1.1rem;
  color: #555;
  margin: 5px 0;
}

.map-container { margin: 15px 0; }

.directions-btn {
  display: inline-block;
  padding: 12px 25px;
  background: linear-gradient(135deg, #ff69b4, #ff85a2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  transition: transform 0.3s;
}

.directions-btn:hover { transform: scale(1.05); }

/* Dress Code */
.dresscode {
  background: linear-gradient(135deg, #ffa0b4, #ff85a2);
}

.dc-content {
  z-index: 2;
  text-align: center;
}

.dc-box {
  font-family: 'Fredoka', cursive;
  background: rgba(255,255,255,0.95);
  padding: 25px 40px;
  border-radius: 25px;
  font-size: 1.4rem;
  color: #ff69b4;
  font-weight: bold;
}

/* RSVP */
.rsvp {
  background: linear-gradient(135deg, #ff85a2, #ffb6c1);
}

.rsvp-box {
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.rsvp-box p {
  font-family: 'Baloo 2', cursive;
  font-size: 1.2rem;
}

.rsvp-btn {
  display: inline-block;
  margin: 20px 0;
  padding: 15px 40px;
  background: linear-gradient(135deg, #ff69b4, #ff85a2);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  font-size: 1.1rem;
  transition: transform 0.3s;
}

.rsvp-btn:hover { transform: scale(1.05); }

.contact {
  margin-top: 15px;
  font-family: 'Baloo 2', cursive;
  font-size: 0.9rem;
  color: #555;
}

/* Fotos - Parallax with lanes */
.fotos {
  background: linear-gradient(135deg, #ffb6c1, #ffc0cb);
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.parallax-photo {
  position: absolute;
  top: 100%;
  border-radius: 10px;
  border: 3px solid #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  object-fit: cover;
  animation: parallaxRain linear infinite;
}

@keyframes parallaxRain {
  0% {
    top: 100%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: -100%;
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 600px) {
  .hero-title { font-size: 2rem; }
  .hero-name { font-size: 2.5rem; }
  .section h2 { font-size: 1.5rem; }
  .bunny-icon { font-size: 3rem; }
  .scroll-hint { font-size: 1.1rem; }
  .lottie-bunny { width: 120px !important; height: 120px !important; }
}
</style>
