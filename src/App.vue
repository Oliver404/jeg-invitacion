<template>
  <main class="app">
    <!-- Section 1: Hero -->
    <section class="section hero" id="hero">
      <div class="clouds">
        <div class="cloud cloud1" :style="getRandomSize(1)"></div>
        <div class="cloud cloud2" :style="getRandomSize(2)"></div>
        <div class="cloud cloud3" :style="getRandomSize(3)"></div>
        <div class="cloud cloud4" :style="getRandomSize(4)"></div>
      </div>
      <div class="lottie-bg">
        <lottie-player 
          src="https://assets2.lottiefiles.com/packages/lf20_touohxv0.json"
          background="transparent"
          speed="0.8"
          style="width: 100%; height: 100%; position: absolute; opacity: 0.5;"
          loop
          autoplay
        />
      </div>
      <div class="hero-content">
        <div class="bunny-icon">🐰</div>
        <h1 class="hero-title">{{ data.evento.titulo }}</h1>
        <p class="hero-subtitle">{{ data.evento.subtitulo }}</p>
        <div class="hero-name">{{ data.cumpleañero.nombre }}</div>
        <div class="hero-age">{{ data.cumpleañero.edad }}.er Birthday! 🎂</div>
        <div class="scroll-hint">⬇ Desliza para más ⬇</div>
      </div>
    </section>

    <!-- Section 2: Fecha -->
    <section class="section fecha" id="fecha">
      <div class="clouds">
        <div class="cloud cloud1" :style="getRandomSize(1)"></div>
        <div class="cloud cloud2" :style="getRandomSize(2)"></div>
        <div class="cloud cloud3" :style="getRandomSize(3)"></div>
        <div class="cloud cloud4" :style="getRandomSize(4)"></div>
      </div>
      <div class="section-content">
        <div class="icon">🎉</div>
        <h2>Fecha y Hora</h2>
        <div class="date-box">
          <div class="date">{{ data.evento.fecha }}</div>
          <div class="time">{{ data.evento.hora }}</div>
        </div>
      </div>
    </section>

    <!-- Section 3: Ubicación -->
    <section class="section ubicacion" id="ubicacion">
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
      <div class="bg-image" :style="{ backgroundImage: 'url(' + data.fotos.dressCode + ')' }"></div>
      <div class="overlay"></div>
      <div class="lottie-overlay">
        <lottie-player 
          src="https://assets9.lottiefiles.com/packages/lf20_u4yrau.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: 100%; position: absolute;"
          loop
          autoplay
        />
      </div>
      <div class="dc-content">
        <div class="icon">👗</div>
        <h2>Dress Code</h2>
        <div class="dc-box">{{ data.evento.dressCode }}</div>
      </div>
    </section>

    <!-- Section 5: RSVP -->
    <section class="section rsvp" id="rsvp">
      <div class="clouds">
        <div class="cloud cloud1" :style="getRandomSize(1)"></div>
        <div class="cloud cloud2" :style="getRandomSize(2)"></div>
        <div class="cloud cloud3" :style="getRandomSize(3)"></div>
        <div class="cloud cloud4" :style="getRandomSize(4)"></div>
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
      <div class="photo-rain">
        <div 
          v-for="(foto, index) in photoRain" 
          :key="index"
          class="rain-photo"
          :style="{
            left: foto.x + '%',
            animationDelay: foto.delay + 's',
            animationDuration: foto.duration + 's',
            width: foto.width + 'px',
            height: foto.height + 'px',
            zIndex: index
          }"
        >
          <img :src="foto.src" :alt="'Photo ' + index">
        </div>
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

// Random cloud sizes
const getRandomSize = (seed) => {
  const sizes = [
    { width: '120px', height: '80px' },
    { width: '150px', height: '100px' },
    { width: '100px', height: '70px' },
    { width: '180px', height: '120px' },
    { width: '130px', height: '90px' },
    { width: '160px', height: '110px' }
  ]
  const index = (seed * 7 + Math.floor(Math.random() * 6)) % sizes.length
  return sizes[index]
}

// Photo rain effect
const photoRain = ref([])

onMounted(() => {
  // Create 20 photos for rain effect
  const photos = []
  const allPhotos = [...data.fotos.galeria, ...data.fotos.galeria, ...data.fotos.galeria, ...data.fotos.galeria]
  
  for (let i = 0; i < 20; i++) {
    photos.push({
      src: allPhotos[i % allPhotos.length],
      x: Math.random() * 85 + 5,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4,
      width: 80 + Math.random() * 100,
      height: 100 + Math.random() * 80
    })
  }
  photoRain.value = photos
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

/* Clouds - visible immediately */
.clouds {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.cloud {
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  animation: float 20s infinite linear;
  opacity: 0.9;
}

/* Start clouds visible immediately */
.cloud1 {
  left: 10%;
  top: 8%;
  background-image: url('/images/cloud1.png');
  animation-delay: 0s;
  animation-duration: 18s;
  animation-play-state: running;
}

.cloud2 {
  left: 30%;
  top: 20%;
  background-image: url('/images/cloud2.png');
  animation-delay: -5s;
  animation-duration: 22s;
}

.cloud3 {
  left: 60%;
  top: 12%;
  background-image: url('/images/cloud3.png');
  animation-delay: -10s;
  animation-duration: 20s;
}

.cloud4 {
  left: 80%;
  top: 25%;
  background-image: url('/images/cloud4.png');
  animation-delay: -3s;
  animation-duration: 25s;
}

@keyframes float {
  from { transform: translateX(-200px); }
  to { transform: translateX(calc(100vw + 200px)); }
}

/* Background image */
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 182, 193, 0.7);
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

.lottie-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 50%, #ff69b4 100%);
}

.hero-content {
  text-align: center;
  z-index: 2;
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
  text-shadow: 
    2px 2px 4px rgba(0,0,0,0.5),
    -1px -1px 2px rgba(0,0,0,0.3),
    0 0 10px rgba(255,255,255,0.3);
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
  text-shadow: 
    3px 3px 0 #ff69b4,
    2px 2px 6px rgba(0,0,0,0.5);
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
  text-shadow: 
    2px 2px 4px rgba(0,0,0,0.5),
    0 0 10px rgba(255,255,255,0.3);
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 0 0 3px rgba(255,255,255,0.3);
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 0 0 3px rgba(255,255,255,0.3);
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
  text-shadow: 0 1px 1px rgba(255,255,255,0.8);
}

.map-container {
  margin: 15px 0;
}

.directions-btn {
  display: inline-block;
  padding: 12px 25px;
  background: linear-gradient(135deg, #ff69b4, #ff85a2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  transition: transform 0.3s;
  box-shadow: 0 4px 15px rgba(255,105,180,0.4);
}

.directions-btn:hover {
  transform: scale(1.05);
}

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
  box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 0 0 3px rgba(255,255,255,0.3);
}

/* RSVP */
.rsvp {
  background: linear-gradient(135deg, #ff85a2, #ffb6c1);
}

.rsvp-box {
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 0 0 3px rgba(255,255,255,0.3);
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
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  transition: transform 0.3s;
  box-shadow: 0 4px 15px rgba(255,105,180,0.4);
}

.rsvp-btn:hover {
  transform: scale(1.05);
}

.contact {
  margin-top: 15px;
  font-family: 'Baloo 2', cursive;
  font-size: 0.9rem;
  color: #555;
}

/* Fotos - Photo Rain */
.fotos {
  background: linear-gradient(135deg, #ffb6c1, #ffc0cb);
}

.photo-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.rain-photo {
  position: absolute;
  bottom: -200px;
  border-radius: 10px;
  border: 3px solid #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  animation: rainFloat linear infinite;
}

.rain-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
}

@keyframes rainFloat {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-120vh) rotate(10deg);
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
}
</style>
