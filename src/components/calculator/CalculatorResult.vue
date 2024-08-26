<template>
  <div class="box-result">
    <span class="preview">{{ getResultPreview }}</span>

    <div :style="{ 'font-size': handleQuantityDisplayedNumbers}" class="number-calc">
      {{ showValue }}
    </div>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'

export default {
  name: 'CalculatorResult',

  computed: {
    ...mapGetters({
      getExpression: 'calculate/getExpression',
      getResultPreview: 'calculate/getResultPreview',
      getExpressionLegth: 'calculate/getExpressionLegth'
    }),

    handleQuantityDisplayedNumbers() {
      const length = this.getExpressionLegth

      const sizeMap = {
        small: '64px',
        medium: '80px',
        large: '96px'
      }

      const size = {
        [length > 7 && length < 11]: sizeMap.small,
        [length > 5  && length < 9]: sizeMap.medium,
        [length < 6]: sizeMap.large
      }

      return size[true]
    },

    showValue() {
      return this.getExpression
    }
  }
}
</script>

<style lang="scss" scoped>
.box-result {
  display: flex;
  flex-direction: column;
  padding: calc(1em + 50px) 1em 1em;
  text-align: end;
  gap: 16px 0;

  .preview {
    color: #9C9C9C;
    height: 47px;
    font-size: 40px;
    font-weight: 300;
  }

  .number-calc {
    display: flex;
    place-items: center;
    align-self: flex-end;
    color: $primary-white;
    height: 96px;
    font-weight: 300;
  }
}
</style>
