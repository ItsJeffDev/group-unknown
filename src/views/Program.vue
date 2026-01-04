<template>
  <div class="program-page">
    <div class="hero">
      <h1>Our Program</h1>
      <p>Building the future of web applications with Vue.js</p>
      <div class="hero-animation"></div>
    </div>

    <div class="features">
      <div class="feature-card" v-for="(member, index) in members" :key="index" @click="goToDeveloper(member.routeName)">
        <div class="profile">
          <img :src="member.img" :alt="member.name" />
        </div>
        <h3>{{ member.name }}</h3>
        <p>{{ member.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import jazh from "@/assets/jazh.jpg";
import jeff from "@/assets/jeff.jpg";
import rey from "@/assets/rey.jpg";
import lisa from "@/assets/lisa.jpg";
import chrish from "@/assets/kulot.jpg";

export default {
  name: "ProgramView",
  data() {
    return {
      members: [
        { name: "Jazh", img: jazh, desc: '"FAILURE IS A PART OF SUCCESS"', routeName: 'jazhmine-developer' },
        { name: "Jeff Kolin Miranda", img: jeff, desc: "I am a 17-year-old developer from Legazpi City who breathes code. I started with a simple 'Hello World' and it turned into an unstoppable passion for Full-Stack Development.", routeName: 'jeff-developer' },
        { name: "Reyjan Gabriel Dajab", img: rey, desc: "Hi, I’m Janrey Abunda. I am a student who likes to learn new things and improve my skills. I am responsible, helpful, and doing my best to achieve my goals.", routeName: 'rey-developer' },
        { name: "Lisa Tolentino", img: lisa, desc: "Always lonely but not alone", routeName: 'lisa-developer' },
        { name: "Angelo Chrish Imperial", img: chrish, desc: "Hello I'm Angelo, 17 years old efas lang!", routeName: 'chrish-developer' }
      ]
    };
  },
  methods: {
    goToDeveloper(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

<style scoped>
/* Midnight theme background */
.program-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #0d0d1a;
  color: #f0f0f0;
  font-family: 'Inter', sans-serif;
}

/* Hero section */
.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 2rem;
  background: radial-gradient(circle at top, #1a1a2e, #0d0d1a);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 3rem;
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  animation: glowText 2s infinite alternate;
}

.hero p {
  font-size: 1.25rem;
  color: #c0c0ff;
}

/* Hero animation */
.hero-animation {
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(120deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2), rgba(0,255,255,0.2));
  animation: moveGradient 6s linear infinite;
  z-index: 0;
}

/* Profiles */
.profile {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  margin: auto;
  border: 4px solid #36bd85;
  overflow: hidden;
  transition: transform 0.5s, box-shadow 0.5s;
}

.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #36bd85;
}

/* Features grid */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Feature cards */
.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: #1a1a2e;
  box-shadow: 0 0 20px rgba(54, 189, 133, 0.4);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 0 30px rgba(54, 189, 133, 0.6);
}

.feature-card h3 {
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-shadow: 0 0 8px #00ffff;
  transition: text-shadow 0.3s;
}

.feature-card:hover h3 {
  text-shadow: 0 0 16px #ff00ff, 0 0 20px #00ffff;
}

.feature-card p {
  color: #c0c0ff;
  line-height: 1.6;
}

/* Animations */
@keyframes glowText {
  0% { text-shadow: 0 0 5px #00ffff; }
  50% { text-shadow: 0 0 20px #ff00ff, 0 0 30px #00ffff; }
  100% { text-shadow: 0 0 5px #00ffff; }
}

@keyframes moveGradient {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(50%); }
}
</style>
