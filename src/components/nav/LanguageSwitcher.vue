<template>
  <select v-model="selectedLanguage">
    <option
      v-for="data in dataOptions"
      :key="data.value"
      :value="data.value"
    >
      {{ data.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LanguageSwitcher',

  data() {
    return {
      selectedLanguage: 'en_us'
    }
  },

  computed: {
    dataOptions() {
      return [
        { value: 'en_us', text: this.$t('header.languages.english') },
        { value: 'es_es', text: this.$t('header.languages.spanish') },
        { value: 'pt_br', text: this.$t('header.languages.portuguese') }
      ]
    }
  },

  watch: {
    selectedLanguage(newValue) {
      this.$i18n.locale = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  outline: none;
  position: absolute;
  top: 16px;
  right: 8px;
  border: 2px solid #020627;
  border-radius: 8px;
}
</style>
