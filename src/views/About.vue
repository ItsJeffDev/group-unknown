<template>
  <div class="about-page">
    <h1>About Us</h1>
    <div class="content">
      <p>We are a group of passionate young developers living in Legazpi City, Albay. We attend CSI (Computer System institute), where we discovered our love for coding and teamwork.</p>
      <p>From small experiments to real-world projects, we believe in turning ideas into code that actually works and looks amazing.</p>
      <p>We value learning, collaboration, and having fun while coding — because building the future of the web should be exciting!</p>
      <div class="stats">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView"
};
</script>

<style scoped>
.about-page {
  padding: 0.5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #266bff, #36bd85); /* Vibrant gradient text */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
  margin-bottom: 2rem;
  margin: 0px ;
}

.content {
  font-size: 1.1rem;
  line-height: 1.7;
  padding-top: 0px ;
  color: white;
}

.content p {
  margin-bottom: 1rem;
}

.stats {
  display: flex;
  justify-content: center;
  gap: rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #2b71ff;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
