<template>
  <!--  <TestApi/>-->
  <Header/>
  <IntroSection/>
  <PopularSection/>
</template>

<script>
// @ is an alias to /src
import TestApi from "@/components/TestApi";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import PopularSection from "@/components/PopularSection";

export default {
  name: 'HomeView',
  components: {
    PopularSection,
    IntroSection,
    Header,
    TestApi,
  }
}
</script>
