<template>
  <main>
    <div class="container" >
      <CalculatorResult />
      <CalculatorDataButtons />
    </div>
  </main>
</template>

<script>
import CalculatorDataButtons from './CalculatorDataButtons.vue'
import CalculatorResult from './CalculatorResult.vue'

export default {
  name: 'MyCalculator',

  components: {
    CalculatorDataButtons,
    CalculatorResult
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  main {
    padding-top: 3em;
    font-family: 'Work Sans', sans-serif;

    .container {
      width: 404px;
      height: 731px;
      background: #17171C;
      margin: 0 auto;
      padding: 0 20px;
      border-radius: 10px;

      @include mobile {
        width: 85%;
      }
    }
  }
</style>

