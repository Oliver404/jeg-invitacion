<template>
  <main class="app">
    <!-- Section 1: Hero -->
    <section class="section hero" id="hero">
      <div class="clouds">
        <div class="cloud cloud1"></div>
        <div class="cloud cloud2"></div>
        <div class="cloud cloud3"></div>
        <div class="cloud cloud4"></div>
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
        <div class="cloud cloud1"></div>
        <div class="cloud cloud2"></div>
        <div class="cloud cloud3"></div>
        <div class="cloud cloud4"></div>
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
        <div class="cloud cloud1"></div>
        <div class="cloud cloud2"></div>
        <div class="cloud cloud3"></div>
        <div class="cloud cloud4"></div>
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
      <div class="bg-image" :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1530103862676-de3c9fb59b6f?w=800)' }"></div>
      <div class="overlay"></div>
      <div class="lottie-overlay">
        <lottie-player 
          src="https://assets1.lottiefiles.com/packages/lf20_jbrw3hcz.json"
          background="transparent"
          speed="0.8"
          style="width: 100%; height: 100%; position: absolute;"
          loop
          autoplay
        />
      </div>
      <div class="section-content">
        <div class="icon">📸</div>
        <h2>Recuerdos</h2>
        <div class="gallery">
          <img 
            v-for="(foto, index) in data.fotos.galeria" 
            :key="index"
            :src="foto" 
            :alt="'Recuerdo ' + (index + 1)"
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import data from './data/invitacion.json'

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.evento.ubicacion.lugar + ' ' + data.evento.ubicacion.dirección + ' ' + data.evento.ubicacion.ciudad)}`
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

/* Clouds with images */
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
}

.cloud1 {
  width: 150px;
  height: 100px;
  top: 5%;
  left: -150px;
  background-image: url('/images/cloud1.png');
  animation-delay: 0s;
  animation-duration: 18s;
}

.cloud2 {
  width: 120px;
  height: 80px;
  top: 25%;
  left: -120px;
  background-image: url('/images/cloud2.png');
  animation-delay: -6s;
  animation-duration: 22s;
}

.cloud3 {
  width: 140px;
  height: 90px;
  top: 45%;
  left: -140px;
  background-image: url('/images/cloud3.png');
  animation-delay: -12s;
  animation-duration: 25s;
}

.cloud4 {
  width: 130px;
  height: 85px;
  top: 65%;
  left: -130px;
  background-image: url('/images/cloud4.png');
  animation-delay: -3s;
  animation-duration: 20s;
}

@keyframes float {
  from { transform: translateX(-150%); }
  to { transform: translateX(calc(100vw + 150%)); }
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  margin-bottom: 10px;
}

.hero-subtitle {
  font-family: 'Baloo 2', cursive;
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 20px;
}

.hero-name {
  font-family: 'Fredoka', cursive;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 3px 3px 0 #ff69b4;
}

.hero-age {
  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;
  margin: 10px 0 40px;
  color: #fff;
}

.scroll-hint {
  font-family: 'Baloo 2', cursive;
  color: rgba(255,255,255,0.9);
  font-size: 1.3rem;
  font-weight: 600;
  animation: pulse 2s infinite;
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
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

/* Fecha */
.fecha {
  background: linear-gradient(135deg, #ff69b4, #ffb6c1);
}

.date-box {
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
  color: #666;
  margin: 5px 0;
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
  transition: transform 0.3s;
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
}

/* RSVP */
.rsvp {
  background: linear-gradient(135deg, #ff85a2, #ffb6c1);
}

.rsvp-box {
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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

.rsvp-btn:hover {
  transform: scale(1.05);
}

.contact {
  margin-top: 15px;
  font-family: 'Baloo 2', cursive;
  font-size: 0.9rem;
  color: #666;
}

/* Fotos */
.fotos {
  background: linear-gradient(135deg, #ffb6c1, #ffc0cb);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.gallery img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
  border: 4px solid #fff;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 600px) {
  .hero-title { font-size: 2rem; }
  .hero-name { font-size: 2.5rem; }
  .section h2 { font-size: 1.5rem; }
  .gallery { grid-template-columns: 1fr; }
  .bunny-icon { font-size: 3rem; }
  .scroll-hint { font-size: 1.1rem; }
  .cloud { transform: scale(0.7); }
}
</style>
