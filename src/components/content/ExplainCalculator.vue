<template>
  <section class="container">
    <div class="explain-calculator">
      <img
        src="../../assets/calculator.png"
        alt="Calculadora"
        title="Calculadora"
      />
      <p class="paragraph">
        Uma calculadora de computador opera por meio de software que processa os
        números e operações inseridos, realizando cálculos e
        mostrando os resultados na tela.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExplainCalculator"
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 248px;
  display: flex;
  background: $primary-blue;

  .explain-calculator {
    width: 90%;
    height: 168px;
    background: $background;
    margin: auto;
    border-radius: $radius;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;

    @include tablet {
      width: 85%;
      flex-direction: column;
      gap: 0;
      padding: 24px;
    }

    @include mobile {
      width: 85%;
      flex-direction: column;
      gap: 0;
    }

    img {
      width: 64px;
      height: auto;
    }

    .paragraph {
      max-width: 600px;
      text-align: justify;
    }
  }
}
</style>
