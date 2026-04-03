<template>
  <main class="app">
    <!-- Section 1: Hero -->
    <section class="section hero" id="hero">
      <div class="hero-bg">
        <lottie-player 
          src="https://lottie.host/e18c7c7e-c7b0-4a24-8c9a-4c56f1d82c4f/7rX8PqHGyh.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: 100%; position: absolute;"
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
        <div class="scroll-hint">↓ Desliza ↓</div>
      </div>
    </section>

    <!-- Section 2: Fecha -->
    <section class="section fecha" id="fecha">
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
      <div class="section-content">
        <div class="icon">📍</div>
        <h2>Ubicación</h2>
        <div class="location-box">
          <div class="place">{{ data.evento.ubicacion.lugar }}</div>
          <div class="address">{{ data.evento.ubicacion.dirección }}</div>
          <div class="city">{{ data.evento.ubicacion.ciudad }}</div>
        </div>
      </div>
    </section>

    <!-- Section 4: Dress Code -->
    <section class="section dresscode" id="dresscode">
      <div class="dc-bg">
        <lottie-player 
          src="https://lottie.host/b4d93b47-20e2-4a61-a3f3-4c56f1d82c4f/GH8PqHGyh.json"
          background="transparent"
          speed="0.8"
          style="width: 100%; height: 100%; position: absolute; opacity: 0.3;"
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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');

.app {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
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

/* Hero */
.hero {
  background: linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 50%, #ff69b4 100%);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 1;
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
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  margin-bottom: 10px;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 20px;
}

.hero-name {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 3px 3px 0 #ff69b4;
}

.hero-age {
  font-size: 1.8rem;
  margin: 10px 0 40px;
  color: #fff;
}

.scroll-hint {
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
}

/* Sections */
.section-content {
  text-align: center;
  max-width: 500px;
}

.section h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
}

/* Fecha */
.fecha {
  background: linear-gradient(135deg, #ff69b4, #ffb6c1);
}

.date-box {
  background: rgba(255,255,255,0.9);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.date, .time {
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
  background: rgba(255,255,255,0.9);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.place {
  font-size: 1.4rem;
  font-weight: bold;
  color: #ff69b4;
  margin-bottom: 10px;
}

.address, .city {
  font-size: 1.1rem;
  color: #666;
  margin: 5px 0;
}

/* Dress Code */
.dresscode {
  background: linear-gradient(135deg, #ffa0b4, #ff85a2);
}

.dc-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.dc-content {
  z-index: 1;
  text-align: center;
}

.dc-box {
  background: rgba(255,255,255,0.9);
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
  background: rgba(255,255,255,0.9);
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.rsvp-btn {
  display: inline-block;
  margin: 20px 0;
  padding: 15px 40px;
  background: linear-gradient(135deg, #ff69b4, #ff85a2);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: transform 0.3s;
}

.rsvp-btn:hover {
  transform: scale(1.05);
}

.contact {
  margin-top: 15px;
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
}
</style>
