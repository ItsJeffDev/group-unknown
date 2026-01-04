<template>
  <div class="profile-page">
    <!-- Profile Header -->
    <div class="profile-header">
      <img class="avatar" :src="avatar" alt="Jazhmine Mirasol" />
      <h1>{{ name }}</h1>
      <p class="age-birthday">{{ age }} yrs old | Birthday: {{ birthday }}</p>
      <p class="title">{{ title }}</p>
    </div>

    <!-- Social Buttons -->
    <div class="social-buttons">
      <a :href="`mailto:${email}`" class="btn email">Email Me</a>
    </div>

    <!-- Bio / Quote -->
    <div class="bio-section">
      <p class="bio">{{ quote }}</p>
      <p class="commission">Open for commissions</p>
    </div>

    <!-- work_imgs List -->
    <div class="work_imgs-section">
      <h2>work_imgs</h2>
      <ul>
        <li v-for="achievement in work_imgs" :key="achievement">{{ achievement }}</li>
      </ul>
    </div>

    <!-- Positions -->
    <div class="positions-section">
      <h2>Positions</h2>
      <ul>
        <li v-for="position in positions" :key="position">{{ position }}</li>
      </ul>
    </div>

    <div class="skills-section">
      <h2>Languages & Tools</h2>
      <div class="icons">
        <img v-for="skill in skills" :key="skill.name" :src="skill.src" :alt="skill.name" />
      </div>
    </div>
    <hr />

    <!-- Photography Works Gallery -->
    <div class="gallery-section">
      <h2>Photography Works</h2>
      <div class="gallery">
        <div v-for="(image, index) in gallery" :key="image.alt" class="gallery-item"
          :style="randomGalleryHeight(index)">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>

    <!-- work_imgs Gallery -->
    <div class="work_imgs-gallery-section">
      <h2> Achievement Gallery</h2>
      <div class="gallery">
        <div v-for="(image, index) in work_imgsGallery" :key="image.alt" class="gallery-item"
          :style="randomGalleryHeight(index)">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>

    <!-- Floating circles -->
    <div class="floating-circle" v-for="n in 15" :key="n" :style="randomCircleStyle()"></div>
  </div>
</template>

<script>
export default {
  name: "PhotographyProfile",
  data() {
    return {
      name: "Jazh",
      age: 17,
      birthday: "June 9, 2008",
      title: "Photographer | Editor-in-chief | Campus Journalist",
      avatar: require("@/assets/jazh.jpg"),
      email: "mirasoljazhmine@gmail.com",
      quote: "I believe that every successful story has failures in it. Just trust God and yourself.",
      work_imgs: [
        "DSPC 2nd Placer 2024",
        "RSPC Qualifier 2024",
        "DSPC 2nd Placer 2025",
        "RSPC Qualifier 2025",
        "Consistent Honors Student since Highschool"
      ],
      positions: [
        "Editor-in-chief of The Messenger",
        "President of 12-Code",
        "Campus Journalist Student"
      ],
      gallery: [
        { src: require("@/assets/work_imgs/work_4.jpg"), alt: "Shoot 1" },
        { src: require("@/assets/work_imgs/work_5.jpg"), alt: "Shoot 2" },
        { src: require("@/assets/work_imgs/work_6.jpg"), alt: "Shoot 3" },
        { src: require("@/assets/work_imgs/work_7.jpg"), alt: "Shoot 4" }
      ],
      work_imgsGallery: [
        { src: require("@/assets/work_imgs/a.jpg"), alt: "Award 1" },
        { src: require("@/assets/work_imgs/b.jpg"), alt: "Award 2" },
        { src: require("@/assets/work_imgs/c.jpg"), alt: "Award 3" },
        { src: require("@/assets/work_imgs/d.jpg"), alt: "Award 4" },
        { src: require("@/assets/work_imgs/e.jpg"), alt: "Award 5" }
      ],
      skills: [
        { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "HTML5", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
        { name: "CSS3", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" }
      ],
    };
  },
  methods: {
    randomCircleStyle() {
      const size = Math.random() * 60 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 15;
      const opacity = Math.random() * 0.4 + 0.1;
      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        opacity,
        animation: `drift ${duration}s infinite alternate ease-in-out`
      };
    },
    randomGalleryHeight(index) {
      const heights = [180, 220, 250, 200, 240]; // unique heights for masonry effect
      return {
        height: `${heights[index % heights.length]}px`
      };
    }
  }
};
</script>

<style scoped>
/* Base */
.profile-page {
  position: relative;
  max-width: 1000px;
  margin: 3rem auto;
  padding: 3rem;
  background: #353535;
  border-radius: 25px;
  color: #fff8c4;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(255, 215, 0, 0.25);
}

.icons img {
  width: 40px;   /* smaller size */
  height: 40px;  /* smaller size */
  filter: grayscale(0.4);
  transition: filter 0.3s, transform 0.3s;
}

.icons img:hover {
  filter: grayscale(0);
  transform: scale(1.2) rotate(-5deg); /* slightly smaller hover scale */
}

/* Header */
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 4px solid #fcd34d;
  object-fit: cover;
  transition: transform 0.6s, box-shadow 0.6s;
}

.avatar:hover {
  transform: scale(1.2) translateY(-5px);
  box-shadow: 0 0 30px #fcd34d;
}

h1 {
  font-size: 2.8rem;
  color: #fcd34d;
  margin-bottom: 0.25rem;
}

.age-birthday {
  font-size: 1rem;
  color: #fef3c7;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.2rem;
  color: #fde68a;
  font-weight: 500;
}

/* Buttons */
.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.6rem 1.8rem;
  border-radius: 12px;
  font-weight: 600;
  color: #1a1a1f;
  background: linear-gradient(135deg, #fde68a, #fcd34d);
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(255, 215, 0, 0.5);
}

/* Bio */
.bio-section {
  margin-bottom: 2rem;
}

.bio {
  font-style: italic;
  color: #fef3c7;
  margin-bottom: 0.5rem;
}

.commission {
  font-weight: 600;
  color: #fcd34d;
  letter-spacing: 0.5px;
}

/* work_imgs & Positions */
hr {
  border: none;
  border-top: 1px solid #fcd34d;
  margin: 2rem 0;
}

h2 {
  font-size: 1.5rem;
  color: #fcd34d;
  margin-bottom: 1rem;
}

ul {
  list-style: inside circle;
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
  color: #fef3c7;
}

li {
  margin-bottom: 0.5rem;
}

/* Gallery */
.gallery-section,
.work_imgs-gallery-section {
  margin-top: 2rem;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.gallery-item {
  width: 200px;
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid #fcd34d;
  transition: transform 0.6s, box-shadow 0.6s, filter 0.6s;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s, filter 0.6s;
}

.gallery-item:hover img {
  transform: scale(1.15) rotate(2deg);
  filter: brightness(1.2);
}

.gallery-item:hover {
  box-shadow: 0 15px 25px rgba(255, 215, 0, 0.5);
}

/* Floating Circles */
.floating-circle {
  position: absolute;
  background: rgba(252, 211, 77, 0.15);
  border-radius: 50%;
}

/* Floating animation */
@keyframes drift {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }

  25% {
    transform: translateY(-15px) translateX(10px) scale(1.1);
  }

  50% {
    transform: translateY(-10px) translateX(-10px) scale(1.05);
  }

  75% {
    transform: translateY(10px) translateX(5px) scale(1.1);
  }

  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
}
</style>
