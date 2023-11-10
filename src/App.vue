<template>
  <div>
    <Navbar />
    <Banner />
    <Skills />
    <Work />
    <Footer />
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Skills from './components/Skills.vue';
import Work from './components/Work.vue';



export default {
  components: { Navbar, Banner, Skills, Work, Footer }
}
</script>
