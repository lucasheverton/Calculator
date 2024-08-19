<template>
  <div class="box-buttons">
  <CalculatorButton
      v-for="chars, index in dataButtons"
      :key="chars.typeDigit + index"
      :color="chars.color"
      :text="chars.text"
      :typeDigit="chars.typeDigit"
      :image="chars.image"
      :class="handleSizeButton(chars.bigger)"
    />
  </div>
</template>

<script>
import CalculatorButton from './CalculatorButton.vue'

export default {
  name: 'CalculatorDataButtons',

  components: {
   CalculatorButton
  },

  computed: {
    dataButtons() {
      return [
        { text: 'C', color: this.$calcSecondaryColor, bigger: true, typeDigit: 'deleteAll' },
        { image: 'delete.png', color: this.$calcPrimaryColor, typeDigit: 'deleteLast' },
        { text: '÷', color: this.$calcTertiaryColor, typeDigit: 'mathematicalOperation' },
        { text: '7', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '8', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '9', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: 'x', color: this.$calcTertiaryColor, typeDigit: 'mathematicalOperation' },
        { text: '4', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '5', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '6', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '-', color: this.$calcTertiaryColor, typeDigit: 'mathematicalOperation' },
        { text: '1', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '2', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '3', color: this.$calcPrimaryColor, typeDigit: 'number' },
        { text: '+', color: this.$calcTertiaryColor, typeDigit: 'mathematicalOperation' },
        { text: '.', color: this.$calcPrimaryColor, typeDigit: 'symbol' },
        { text: '0', color: this.$calcPrimaryColor, bigger: true, typeDigit: 'number' },
        { text: '=', color: this.$calcTertiaryColor, typeDigit: 'equal' }
      ]
    }
  },

  methods: {
    handleSizeButton(bigger) {
      return bigger ? 'bigger-button' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.box-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 16px 0;

  .bigger-button {
    grid-column: span 2;
    width: 180px;
  }
}
</style>
