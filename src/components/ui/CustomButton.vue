<template>
  <button
    :style="{ backgroundColor: color }"
    :class="transformActiveButton"
  >
    <template v-if="text">
      {{ text }}
    </template>

    <img v-else :src="imagePathFormat" />
  </button>
</template>

<script>
export default {
  name: 'CustomButton',

  props: {
    text: {
      type: String,
      required: false
    },

    color: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: false
    }
  },

  computed: {
    imagePathFormat() {
      return require(`../../assets/${this.image}`)
    },

    transformActiveButton() {
      const activeColors = {
        [this.$calcPrimaryColor]: 'hover-or-active-bg-primary',
        [this.$calcSecondaryColor]: 'hover-or-active-bg-secondary',
        [this.$calcTertiaryColor]: 'hover-or-active-bg-tertiary'
      }

      return activeColors[this.color]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  $calcColors: (
    primary: rgb(46, 47, 56),
    secondary: rgb(78, 80, 95),
    tertiary: rgb(75, 94, 252)
  );

  button {
    width: 82px;
    height: 74px;
    border-radius: 10px;
    border: none;
    font-size: 32px;
    font-weight: 400;
    color: $primary-white;
    font-family: 'Work Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
  }

  @each $color, $value in $calcColors {
    .hover-or-active-bg-#{$color}:hover,
    .hover-or-active-bg-#{$color}:active {
      background-color: rgba($value, 0.7)!important;
    }
  }
</style>
