<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <HeaderContainer></HeaderContainer>
    <main class="flex-fill">
      <router-view></router-view>
    </main>
    <FooterContainer></FooterContainer>
  </div>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue';
import FooterContainer from './components/FooterContainer.vue';


export default {
  components: {
    HeaderContainer,
    FooterContainer
  },
};
</script>
