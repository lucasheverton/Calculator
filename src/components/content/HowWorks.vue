<template>
  <section class="container">
    <h1>{{ $t('how.works.title') }}</h1>
    <p class="paragraph">
      {{ $t('how.works.paragraph') }}
    </p>

    <MyCalculator></MyCalculator>
  </section>
</template>

<script>
import MyCalculator from '../calculator/MyCalculator.vue'

export default {
  name: 'HowWorks',

  components: {
    MyCalculator
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background: $background;
    padding-bottom: 3em;

    h1 {
      margin: 0;
      text-align: center;
      padding: 24px 0;
    }

    .paragraph {
      margin: 0 auto;
      width: 90%;
      text-align: justify;
    }
  }
</style>
