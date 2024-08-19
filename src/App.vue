<template>
  <MyHeader></MyHeader>
  <ExplainCalculator></ExplainCalculator>
  <HowWorks></HowWorks>
  <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './components/nav/MyHeader.vue'
import ExplainCalculator from './components/content/ExplainCalculator.vue'
import HowWorks from './components/content/HowWorks.vue'
import MyFooter from './components/nav/MyFooter.vue'

export default {
  name: 'App',

  components: {
    MyHeader,
    ExplainCalculator,
    HowWorks,
    MyFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
