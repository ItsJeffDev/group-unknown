<template>
  <div class="profile-page">
    <!-- Main Image / Avatar -->
    <div class="image-section">
      <img :src="avatar" alt="Lisa" class="main-avatar" />
    </div>

    <!-- Name & Pronouns & Info -->
    <div class="info-section">
      <h1>{{ name }}</h1>
      <p class="pronouns">{{ pronouns }}</p>
      <p class="title">{{ title }}</p>
      <p class="bio">{{ bio }}</p>
    </div>

    <!-- Photos Section -->
    <div class="photos-section">
      <h2>My Moments</h2>
      <div class="gallery">
        <div v-for="photo in photos" :key="photo.alt" class="gallery-item">
          <img :src="photo.src" :alt="photo.alt" />
        </div>
      </div>
    </div>

    <!-- Skills Logos -->
    <div class="skills-section">
      <h2>Languages & Tools</h2>
      <div class="icons">
        <img v-for="skill in skills" :key="skill.name" :src="skill.src" :alt="skill.name" />
      </div>
    </div>

    <!-- Floating Circles -->
    <div class="floating-circle" v-for="n in 12" :key="n" :style="randomCircleStyle()"></div>
  </div>
</template>

<script>
export default {
  name: "StudentProfile",
  data() {
    return {
      name: "Lisa",
      pronouns: "she/her",
      title: "Senior High School Student | Aspiring Developer",
      bio: "Life is like the sea—sometimes calm, sometimes stormy, but always moving forward. I enjoy learning, exploring new ideas, and coding my own waves in the vast ocean of knowledge.",
      avatar: require("@/assets/lisa.jpg"), // replace with Lisa's image
      photos: [
        { src: require("@/assets/work_imgs/1.jpg"), alt: "School Event 1" },
        { src: require("@/assets/work_imgs/2.jpg"), alt: "School Event 2" },
        { src: require("@/assets/work_imgs/3.jpg"), alt: "School Event 3" },
        { src: require("@/assets/work_imgs/4.jpg"), alt: "School Event 3" }
      ],
      skills: [
        { name: "HTML5", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
        { name: "CSS3", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
        { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" }
      ]
    };
  },
  methods: {
    randomCircleStyle() {
      const size = Math.random() * 50 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const opacity = Math.random() * 0.3 + 0.1;
      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        opacity,
        animation: `drift ${duration}s infinite alternate ease-in-out`
      };
    }
  }
};
</script>

<style scoped>
/* Base page */
.profile-page {
  position: relative;
  max-width: 900px;
  margin: 3rem auto;
  padding: 3rem;
  background: linear-gradient(145deg, #263150, #4d98f5);
  border-radius: 25px;
  font-family: "Inter", sans-serif;
  text-align: center;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

/* Main Image */
.image-section {
  margin-bottom: 1.5rem;
}

.main-avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid #3b82f6;
  object-fit: cover;
  transition: transform 0.5s, box-shadow 0.5s;
}

.main-avatar:hover {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 0 25px #3b82f6;
}

/* Name, Pronouns, Title, Bio */
.info-section h1 {
  font-size: 2.5rem;
  color: #bfdbfe;
  margin-bottom: 0.25rem;
}

.pronouns {
  font-style: italic;
  color: #e0f2fe;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.2rem;
  color: #93c5fd;
  margin-bottom: 0.5rem;
}

.bio {
  font-size: 1rem;
  color: #dbeafe;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

/* Photos / Gallery */
.photos-section {
  margin-bottom: 2rem;
}

.photos-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #e0f2fe;
}

.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.gallery-item {
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid #3b82f6;
  transition: transform 0.5s, box-shadow 0.5s, filter 0.5s;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s, filter 0.5s;
}

.gallery-item:hover img {
  transform: scale(1.1) rotate(2deg);
  filter: brightness(1.2);
}

.gallery-item:hover {
  box-shadow: 0 10px 20px rgba(59,130,246,0.5);
}

/* Skills Logos */
.skills-section {
  margin-top: 2rem;
}

.skills-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #e0f2fe;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.icons img {
  width: 60px;
  height: 60px;
  filter: grayscale(0.2);
  transition: transform 0.3s, filter 0.3s;
}

.icons img:hover {
  filter: grayscale(0);
  transform: scale(1.2) rotate(-5deg);
}

/* Floating Circles */
.floating-circle {
  position: absolute;
  background: rgba(59, 130, 246, 0.15);
  border-radius: 50%;
}

/* Animation */
@keyframes drift {
  0% { transform: translateY(0) translateX(0) scale(1); }
  25% { transform: translateY(-15px) translateX(10px) scale(1.1); }
  50% { transform: translateY(-10px) translateX(-10px) scale(1.05); }
  75% { transform: translateY(10px) translateX(5px) scale(1.1); }
  100% { transform: translateY(0) translateX(0) scale(1); }
}
</style>
