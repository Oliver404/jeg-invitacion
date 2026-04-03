<template>
  <main class="app">
    <!-- Section 1: Hero -->
    <section class="section hero" id="hero">
      <img :src="data.fotos.hero" alt="Fiesta" class="hero-bg">
      <div class="hero-content">
        <h1 class="hero-title">{{ data.evento.titulo }}</h1>
        <p class="hero-subtitle">{{ data.evento.subtitulo }}</p>
        <div class="hero-name">{{ data.cumpleañero.nombre }}</div>
        <div class="hero-age">{{ data.cumpleañero.edad }} años</div>
        <div class="scroll-hint">↓ Desliza para más</div>
      </div>
    </section>

    <!-- Section 2: Fecha -->
    <section class="section fecha" id="fecha">
      <div class="section-content">
        <h2>📅 Fecha y Hora</h2>
        <div class="date-box">
          <div class="date">{{ data.evento.fecha }}</div>
          <div class="time">{{ data.evento.hora }}</div>
        </div>
      </div>
    </section>

    <!-- Section 3: Ubicación -->
    <section class="section ubicacion" id="ubicacion">
      <div class="section-content">
        <h2>📍 Ubicación</h2>
        <div class="location-box">
          <div class="place">{{ data.evento.ubicacion.lugar }}</div>
          <div class="address">{{ data.evento.ubicacion.dirección }}</div>
          <div class="city">{{ data.evento.ubicacion.ciudad }}</div>
        </div>
      </div>
    </section>

    <!-- Section 4: Dress Code -->
    <section class="section dresscode" id="dresscode">
      <img :src="data.fotos.dressCode" alt="Dress Code" class="dc-bg">
      <div class="dc-content">
        <h2>👗 Dress Code</h2>
        <div class="dc-box">{{ data.evento.dressCode }}</div>
      </div>
    </section>

    <!-- Section 5: RSVP -->
    <section class="section rsvp" id="rsvp">
      <div class="section-content">
        <h2>✅ Confirmar Asistencia</h2>
        <div class="rsvp-box">
          <p>Por favor confirma tu asistencia</p>
          <a :href="data.rsvp.whatsapp" target="_blank" class="rsvp-btn">
            Confirmar por WhatsApp
          </a>
          <p class="contact">{{ data.rsvp.contacto }}</p>
        </div>
      </div>
    </section>

    <!-- Section 6: Fotos Recuerdos -->
    <section class="section fotos" id="fotos">
      <div class="section-content">
        <h2>📸 Recuerdos</h2>
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

/* Hero */
.hero {
  background: #1a1a2e;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.hero-content {
  text-align: center;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 30px;
}

.hero-name {
  font-size: 4rem;
  font-weight: bold;
  color: #ff6b9d;
}

.hero-age {
  font-size: 1.5rem;
  margin: 10px 0 40px;
}

.scroll-hint {
  color: #666;
  font-size: 0.9rem;
}

/* Sections */
.section-content {
  text-align: center;
  max-width: 500px;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

/* Fecha */
.fecha {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
}

.date-box {
  background: rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 15px;
}

.date, .time {
  font-size: 1.8rem;
  margin: 10px 0;
}

/* Ubicación */
.ubicacion {
  background: linear-gradient(135deg, #16213e, #0f3460);
}

.location-box {
  background: rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 15px;
}

.place {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.address, .city {
  font-size: 1.1rem;
  color: #ccc;
  margin: 5px 0;
}

/* Dress Code */
.dresscode {
  background: #0f3460;
}

.dc-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}

.dc-content {
  z-index: 1;
  text-align: center;
}

.dc-box {
  background: rgba(255,255,255,0.1);
  padding: 30px 50px;
  border-radius: 15px;
  font-size: 1.5rem;
}

/* RSVP */
.rsvp {
  background: linear-gradient(135deg, #0f3460, #e94560);
}

.rsvp-box {
  background: rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 15px;
}

.rsvp-btn {
  display: inline-block;
  margin: 20px 0;
  padding: 15px 30px;
  background: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
}

.contact {
  margin-top: 15px;
  font-size: 0.9rem;
  color: #aaa;
}

/* Fotos */
.fotos {
  background: #1a1a2e;
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
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 600px) {
  .hero-title { font-size: 2rem; }
  .hero-name { font-size: 2.5rem; }
  .section h2 { font-size: 1.5rem; }
  .gallery { grid-template-columns: 1fr; }
}
</style>
