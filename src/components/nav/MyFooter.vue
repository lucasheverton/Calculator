<template>
  <footer>
    <span> R </span>
    <p>TODOS OS DIREITOS REVERVADOS</p>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style lang="scss" scoped>
  footer {
    background: $primary-blue;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    span {
      background: $primary-white;
      border-radius: 50%;
      padding: 8px;
      font-weight: bold;
      display: flex;
      align-items: center;
      height: 12px;
    }

    p {
      color: $primary-white;
    }
  }
</style>
