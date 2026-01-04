<template>
  <div class="profile-page">
    <!-- Hero / Avatar -->
    <div class="hero-section">
      <img :src="avatar" alt="Rey" class="avatar" />
      <h1>{{ name }}</h1>
      <p class="pronouns">{{ pronouns }}</p>
      <p class="bio">{{ bio }}</p>
    </div>

    <!-- Gallery / Life Images -->
    <div class="gallery-section">
      <h2>Life in Action</h2>
      <div class="gallery">
        <div v-for="img in photos" :key="img.alt" class="gallery-item">
          <img :src="img.src" :alt="img.alt" />
        </div>
      </div>
    </div>

    <!-- Tech Stack -->
    <div class="skills-section">
      <h2>My Tech Stack</h2>
      <div class="icons">
        <img v-for="skill in skills" :key="skill.name" :src="skill.src" :alt="skill.name" />
      </div>
    </div>

    <!-- Floating animated circles -->
    <div class="floating-circle" v-for="n in 15" :key="n" :style="randomCircleStyle()"></div>
  </div>
</template>

<script>
export default {
  name: "JeffKolinMiranda",
  data() {
    return {
      name: "Jeff Kolin Miranda",
      pronouns: "he/him",
      bio: "Coding is my Life! I'm passionate about creating innovative solutions and bringing ideas to life through technology. When I'm not coding, you can find me exploring new tech trends or gaming with friends.",
      avatar: require("@/assets/jeff.jpg"), // Replace with your profile photo
      photos: [
        { src: require("@/assets/work_imgs/x.jpg"), alt: "Basketball Moment 1" },
        { src: require("@/assets/work_imgs/xx.jpg"), alt: "Basketball Moment 2" },
        { src: require("@/assets/work_imgs/xxx.jpg"), alt: "Basketball Moment 3" },
        { src: require("@/assets/work_imgs/z.jpg"), alt: "Basketball Moment 3" }
      ],
      skills: [
        { name: "HTML5", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
        { name: "CSS3", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
        { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "Vue.js", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
        { name: "Bootstrap 5", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" },
        { name: "Node.js", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
        { name: "MongoDB", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "C#.NET", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
        { name: "Python", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "Java", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" }
      ]
    };
  },
  methods: {
    randomCircleStyle() {
      const size = Math.random() * 50 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 25 + 15;
      const opacity = Math.random() * 0.3 + 0.05;
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
.profile-page {
  position: relative;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 3rem;
  background: linear-gradient(145deg, #000000, #111827);
  border-radius: 25px;
  font-family: "Inter", sans-serif;
  text-align: center;
  color: #f0f0f0;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

/* Hero / Avatar */
.hero-section {
  margin-bottom: 2rem;
}

.avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid lime;
  object-fit: cover;
  transition: transform 0.6s, box-shadow 0.6s;
}

.avatar:hover {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 0 30px lime;
}

.hero-section h1 {
  font-size: 2.5rem;
  color: lime;
  margin: 0.5rem 0;
}

.pronouns {
  font-style: italic;
  color: lime;
  margin-bottom: 0.5rem;
}

.bio {
  font-size: 1rem;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #bfdbfe;
}

/* Gallery Section */
.gallery-section {
  margin-bottom: 2rem;
}

.gallery-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: lime;
}

.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.gallery-item {
  width: 220px;
  height: 150px;
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid lime;
  transition: transform 0.5s, box-shadow 0.5s;
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
  box-shadow: 0 15px 25px rgba(59,130,246,0.5);
}

/* Skills Section */
.skills-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: lime;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
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

@keyframes drift {
  0% { transform: translateY(0) translateX(0) scale(1); }
  25% { transform: translateY(-15px) translateX(10px) scale(1.1); }
  50% { transform: translateY(-10px) translateX(-10px) scale(1.05); }
  75% { transform: translateY(10px) translateX(5px) scale(1.1); }
  100% { transform: translateY(0) translateX(0) scale(1); }
}
</style>
