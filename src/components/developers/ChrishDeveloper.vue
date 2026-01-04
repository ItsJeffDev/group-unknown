<template>
  <div class="profile-page">
    <!-- Profile Header -->
    <div class="profile-header">
      <img class="avatar" :src="avatar" alt="Chrish Imperial" />
      <h1>{{ name }}</h1>
      <p class="pronouns">{{ pronouns }}</p>
      <p class="title">{{ title }}</p>
    </div>

    <!-- Social Buttons -->
    <div class="social-buttons">
      <a :href="facebook" target="_blank" class="btn facebook">Facebook</a>
      <a :href="`mailto:${email}`" class="btn email">Email</a>
    </div>

    <hr />

    <!-- Skills Section -->
    <div class="skills-section">
      <h2>Languages & Tools</h2>
      <div class="icons">
        <img v-for="skill in skills" :key="skill.name" :src="skill.src" :alt="skill.name" />
      </div>
    </div>

    <hr />

    <!-- Portfolio / Gallery Section -->
    <div class="gallery-section">
      <h2>My Works / Images</h2>
      <div class="gallery">
        <div 
          v-for="image in gallery" 
          :key="image.alt" 
          class="gallery-item"
        >
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>

    <!-- Animated floating circles -->
    <div class="floating-circle" v-for="n in 8" :key="n" :style="randomCircleStyle()"></div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      name: "Chrish Imperial",
      pronouns: "he/him",
      title: "Frontend Developer & Designer",
      avatar: require("@/assets/kulot.jpg"), // replace with your image
      facebook: "https://facebook.com/vhr",
      email: "angelochrishimperial@icloud.com",
      skills: [
        { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "HTML5", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
        { name: "CSS3", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" }
      ],
      gallery: [
        { src: require("@/assets/work_imgs/work_1.jpg"), alt: "Project 1" },
        { src: require("@/assets/work_imgs/work_2.jpg"), alt: "Project 2" },
        { src: require("@/assets/work_imgs/work_3.jpg"), alt: "Project 3" }
      ]
    };
  },
  methods: {
    randomCircleStyle() {
      const size = Math.floor(Math.random() * 60) + 20;
      const top = Math.random() * 90;
      const left = Math.random() * 90;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      };
    }
  }
};
</script>

<style scoped>
/* Base Page */
.profile-page {
  position: relative;
  max-width: 900px;
  margin: 3rem auto;
  padding: 3rem;
  background: linear-gradient(145deg, #2a0f0f, #3b1e1e); /* Dark red gradient */
  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  font-family: "Inter", sans-serif;
  text-align: center;
  overflow: hidden;
  color: #fff;
}

/* Profile Header */
.profile-header {
  margin-bottom: 2rem;
}

.avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f87171; /* Red border */
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 25px #f87171;
}

h1 {
  font-size: 2.8rem;
  color: #f87171; /* Red text */
  margin-bottom: 0.25rem;
  text-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

.pronouns {
  font-style: italic;
  color: #fca5a5; /* lighter red */
  margin-bottom: 0.5rem;
}

.title {
  font-weight: 500;
  color: #fecaca; /* light red */
  font-size: 1.2rem;
}

/* Social Buttons */
.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.6rem 1.8rem;
  border-radius: 12px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  background: linear-gradient(135deg, #f87171, #b91c1c); /* Red gradient */
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.facebook { background: linear-gradient(135deg, #f87171, #b91c1c); }
.email { background: linear-gradient(135deg, #ef4444, #b91c1c); }

/* Skills Section */
hr {
  border: none;
  border-top: 1px solid #7f1d1d;
  margin: 2rem 0;
}

.skills-section h2,
.gallery-section h2 {
  font-size: 1.5rem;
  color: #f87171;
  margin-bottom: 1rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

.icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.icons img {
  width: 50px;
  height: 50px;
  filter: grayscale(0.4);
  transition: filter 0.3s, transform 0.3s;
}

.icons img:hover {
  filter: grayscale(0);
  transform: scale(1.3) rotate(-5deg);
}

/* Gallery Section */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.gallery-item {
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid #f87171;
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.gallery-item img:hover {
  transform: scale(1.1) rotate(2deg);
}

/* Floating circles animation */
.floating-circle {
  position: absolute;
  background: rgba(248, 113, 113, 0.2); /* red floating circles */
  border-radius: 50%;
  animation: float 20s linear infinite;
}

@keyframes float {
  0% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-30px) translateX(20px); }
  100% { transform: translateY(0) translateX(0); }
}
</style>
