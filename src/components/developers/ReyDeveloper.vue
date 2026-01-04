<template>
  <div class="rey-page">
    <div class="profile-section">
      <img class="avatar" :src="rey" alt="Reyjan Dajab" />
      <h1>Reyjan Dajab</h1>
      <p class="pronouns">he/him</p>
      <p class="title"> 
       Hi, I’m Janrey Abunda. I am a student who likes to learn new things and improve my skills. I am responsible, helpful, and doing my best to achieve my goals.
      </p>
    </div>
  </div>
</template>

<script>
import rey from "@/assets/rey.jpg";

export default {
  name: "ReyDeveloper",
  data() {
    return {
      rey,
    };
  },
};
</script>

<style scoped>
.rey-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  background: #2b2929;
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
  border: 4px solid #ffffff;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  color: #ffffff;
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
