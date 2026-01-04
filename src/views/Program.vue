<template>
  <div class="program-page">
    <div class="hero">
      <h1>Our Program</h1>
      <p>Building the future of web applications with Vue.js</p>
    </div>
    <div class="features">
      <div class="feature-card">
        <div class="profile">
          <img :src="jazh" alt="Jazhmine" />
        </div>
        <h3> Jazh </h3> <!-- Add your Name -->
        <p>"FAILURE IS A PART OF SUCCESS"</p> <!-- Your description here -->
        
      </div>
      <div class="feature-card">
        <div class="profile">
          <img :src="jeff" alt />
        </div>
        <h3>Jeff Kolin Miranda</h3>
        <p>I am a 17-year-old developer from Legazpi City who breathes code. I started with a simple "Hello World" and it turned into an unstoppable passion for Full-Stack Development.</p>
      </div>
      <div class="feature-card">
        <div class="profile">
          <img :src="rey" alt />
        </div>
        <h3> Reyjan Gabriel Dajab </h3> <!-- Add your Name -->
        <p> Hi, I’m Janrey Abunda. I am a student who likes to learn new things and improve my skills. I am responsible, helpful, and doing my best to achieve my goals. </p> <!-- Your description here -->
        
      </div>
      <div class="feature-card">
        <div class="profile">
          <img src alt />
        </div>
        <h3>Lisa</h3> <!-- Add your Name -->
        <p> ... </p> <!-- Your description here -->
        
      </div>
            <div class="feature-card">
        <div class="profile">
          <img src alt />
        </div>
        <h3> Kulot</h3> <!-- Add your Name -->
        <p> ... </p> <!-- Your description here -->
        
      </div>
    </div>
  </div>
</template>

<script>
import jazh from "@/assets/jazh.jpg";
import jeff from "@/assets/jeff.jpg";
import rey from "@/assets/rey.jpg";

export default {
  name: "ProgramView",
  data() {
    return {
      jazh,
      jeff,
      rey
    }
  }
};
</script>

<style scoped>
.program-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
  border-radius: 20px;
}

.hero h1 {
  font-size: 3rem;
  background: linear-gradient(
    135deg,
    #266bff,
    #36bd85
  ); /* Vibrant gradient text */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  color: #6b7280;
}

.profile {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: black;
  margin: auto;
}

.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #2563eb;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: #4b5563;
  line-height: 1.6;
}
</style>
