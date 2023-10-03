<template>
  <main-container>
    <template v-slot:header>
      <HeaderContainer></HeaderContainer>
    </template>

    <main>
      <router-view>
        <template v-slot:form>
          <FormContainer />
        </template>
        <template v-slot:preview>
          <PreviewContainer />
        </template>

      </router-view>
    </main>

    <template v-slot:footer>
      <FooterContainer></FooterContainer>
    </template>



  </main-container>
</template>

<script>
import FormContainer from './views/FormContainer.vue';
import PreviewContainer from './views/PreviewContainer.vue';
import HeaderContainer from './components/HeaderContainer.vue';
import FooterContainer from './components/FooterContainer.vue';
import MainContainer from './components/MainContainer.vue';


export default {
  components: {
    MainContainer,
    HeaderContainer,
    FooterContainer,
    FormContainer,
    PreviewContainer
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
