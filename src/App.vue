<template>
  <main-container>
    <template v-slot:header>
      <HeaderContainer></HeaderContainer>
    </template>
    
    <main >
      <router-view></router-view>
    </main>

    <template v-slot:footer>
      <FooterContainer></FooterContainer>
    </template>



  </main-container>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue';
import FooterContainer from './components/FooterContainer.vue';
import MainContainer from './components/MainContainer.vue';


export default {
  components: {
    MainContainer,
    HeaderContainer,
    FooterContainer
  },
};
</script>
