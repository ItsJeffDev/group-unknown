<template>
  <div class="jeff-page">
    <div class="profile-section">
      <img class="avatar" :src="jeff" alt="Jeff Kolin Miranda" />
      <h1>Jeff Kolin Miranda</h1>
      <p class="pronouns">he/him</p>
      <p class="title"> 
        I am a 17-year-old Grade 12 student from Legazpi City, Albay. My journey with technology began at the age of 13, and since then, I have developed a sincere passion for software, games and web development.
Over the past few years, I have dedicated my time to learning the foundations of programming—starting from basic logic to exploring a modern tech stack. Currently, I am focused on building my skills in Vue.js, Node.js, and Express, while also maintaining my interest in enterprise languages like C# and Java.
Even though I have spent a lot of time practicing and building projects, I believe that I am still a student of the craft. I am always looking for ways to improve my coding style, learn new frameworks, and grow as a future Software Engineer. I am a firm believer that hard work and discipline are the keys to success in this industry.
My goal is to continue learning every day, eventually work in the tech industry internationally, and use my skills to help others and give back to my community.
      </p>
    </div>
  </div>
</template>

<script>
import jeff from "@/assets/jeff.jpg";

export default {
  name: "JeffDeveloper",
  data() {
    return {
      jeff,
    };
  },
};
</script>

<style scoped>
.jeff-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgb(0 0 0 / 0.05);
  text-align: center;
}

.profile-section {
  margin-bottom: 2rem;
}

.avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #36bd85;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  color: #2563eb;
  margin-bottom: 0.25rem;
}

.pronouns {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.title {
  font-size: 1.1rem;
  color: #374151;
  margin-bottom: 1.5rem;
  font-weight: 500;
  line-height: 2;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-buttons .btn {
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  user-select: none;
  cursor: pointer;
}

.social-buttons .linkedin {
  background-color: #0a66c2;
}

.social-buttons .linkedin:hover {
  background-color: #004182;
}

.social-buttons .facebook {
  background-color: #1877f2;
}

.social-buttons .facebook:hover {
  background-color: #0f51a1;
}

.social-buttons .email {
  background-color: #ef4444;
}

.social-buttons .email:hover {
  background-color: #b91c1c;
}

hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 2rem 0;
}

.languages-tools h2 {
  font-size: 1.5rem;
  color: #374151;
  margin-bottom: 1rem;
}

.icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.icons img {
  width: 40px;
  height: 40px;
  filter: grayscale(0.3);
  transition: filter 0.3s ease;
}

.icons img:hover {
  filter: grayscale(0);
}
</style>
