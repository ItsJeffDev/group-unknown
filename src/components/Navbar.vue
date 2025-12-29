<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <span class="system-name">Unknown</span>
    </div>

    <button
      class="hamburger"
      @click="isMenuOpen = !isMenuOpen"
      :aria-expanded="isMenuOpen.toString()"
      aria-label="Toggle menu"
      >
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </button>

    <div class="navbar-menu" :class="{ open: isMenuOpen }">
      <router-link to="/" class="nav-item" @click="closeMenu">Program</router-link>
      <router-link to="/about" class="nav-item" @click="closeMenu">About</router-link>
      
      <div class="dropdown" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
        <button class="nav-item dropdown-toggle" @click.stop="toggleDropdown" :aria-expanded="isDropdownOpen.toString()">
          Developers
          <span class="arrow" :class="{ 'rotated': isDropdownOpen }">▼</span>
        </button>
        <transition name="fade">
          <ul v-if="isDropdownOpen" class="dropdown-menu">
            <li><router-link to="/developers/frontend" class="dropdown-item" @click="closeMenu">Frontend Team</router-link></li>
            <li><router-link to="/developers/backend" class="dropdown-item" @click="closeMenu">Backend Team</router-link></li>
            <li><router-link to="/developers/devops" class="dropdown-item" @click="closeMenu">DevOps</router-link></li>
          </ul>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isDropdownOpen: false,
      isMenuOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.isDropdownOpen = false;
    }
  }
}
</script>

<style scoped>
/* Core Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar-brand .system-name {
  font-family: 'Inter', sans-serif; /* Modern font */
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6177a8, #36bd85); /* Vibrant gradient text */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  margin: auto;
}

.nav-item:hover, .nav-item:focus {
  color: #2563eb;
}

/* Underline animation for links */
.nav-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #2563eb;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

/* Dropdown Styles */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: linear-gradient(to top, rgb(206, 245, 245), white);
  min-width: 180px;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin-top: 0.5rem;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  color: #374151;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  text-align: center;
}


.dropdown-item:hover {
  background-color: #eff6ff;
  color: #2563eb;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.hamburger {
  display: none; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #374151;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.hamburger span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Mobile menu styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-menu {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: rgba(255,255,255,0.98);
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 1.25rem 1.25rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 900;
  }

  .navbar-menu.open {
    display: flex;
  }

  .navbar-menu .nav-item {
    padding: 0.75rem 0;
    font-size: 1.05rem;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    border-radius: 8px;
    padding: 0.25rem 0;
    margin-top: 0.4rem;
  }

  .dropdown {
    width: 100%;
  }
}
</style>
