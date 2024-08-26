<template>
  <CustomButton
    :text="text"
    :color="color"
    :image="image"
    @click="pressButton()"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { maxPermittedNumbers } from '@/constants/max-numbers-allowed'

export default {
  name: 'CalculatorButton',

  props: {
    text: {
      type: String,
      required: false
    },

    typeDigit: {
      type: String,
      required: true
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
    ...mapGetters({
      getExpression: 'calculate/getExpression',
      getExpressionLegth: 'calculate/getExpressionLegth',
      getResultPreviewLength: 'calculate/getResultPreviewLength',
      getCount: 'calculate/getCount'
    }),

    invalidFirstKey() {
      return !this.getExpressionLegth && (this.typeDigit !== 'number')
    },

    maxNumberDigits() {
      return this.getExpressionLegth === maxPermittedNumbers.MAX_NUMBERS_ALLOWED
    },

    alreadyPoint() {
      return this.getExpression.includes('.') && this.text === '.'
    },

    alreadyZero() {
      return this.getExpression.includes('0') && this.text === '0'
    },

    calculateResult() {
      const completeExpression = this.getCount.parameterOne + this.getCount.signal + this.getCount.parameterTwo
      const executeFunction = new Function('return ' + completeExpression)

      return executeFunction()
    },

    handleWhenThereIsAlreadyResult() {
      return this.getCount.result !== null && this.typeDigit === 'equal'
    }
  },

  methods: {
    ...mapActions({
      setAddExpression: 'calculate/setAddExpression',
      setExpression: 'calculate/setExpression',
      setDeleteLastKey: 'calculate/setDeleteLastKey',
      resetAllExpresion: 'calculate/resetAllExpresion',
      setAddResultPreview: 'calculate/setAddResultPreview',
      setResultPreview: 'calculate/setResultPreview',
      clearExpression: 'calculate/clearExpression',
      setCount: 'calculate/setCount',
      clearCount: 'calculate/clearCount'
    }),

    pressButton() {
      this.deleteAllExpressions()

      if (this.invalidFirstKey) return

      if (this.maxNumberDigits) return

      if (this.alreadyPoint) return

      if (this.alreadyZero) return

      if (this.handleWhenThereIsAlreadyResult) return

      this.text &&  this.setAddExpression(this.text)

      this.deleteLastKey()

      this.handlePreview()

      this.setPartTwoExpression()
    },

    deleteAllExpressions() {
      if (this.typeDigit === 'deleteAll') {
        this.resetAllExpresion()
        this.clearCount()
      }
    },

   deleteLastKey() {
    if (this.getExpressionLegth && this.typeDigit === 'deleteLast') {
      this.setDeleteLastKey()
    }
   },

    handlePreview() {
      if (this.typeDigit === 'mathematicalOperation') {
        this.checkIfThereIsAlreadyAnExpressionInProgress()
        this.setPartOneExpression()
        this.setAddResultPreview(this.getExpression)
        this.clearExpression()
      }
    },

    setPartOneExpression() {
      const partOne = this.getExpression.slice(0, -1)
      const signal = this.getExpression.slice(-1)

      this.setCount({
        parameterOne: Number(partOne),
        signal: this.handleSignal(signal)
      })
    },

    handleSignal(signal) {
      const signalMap = {
        'x': '*',
         '*':  'x',
         '÷': '/',
         '/': '÷'
      }

      return signalMap[signal] || signal
    },

    setPartTwoExpression() {
      if (this.typeDigit === 'equal') {
        const partTwo = this.getExpression.slice(0, -1)

        this.setCount({
          parameterTwo: Number(partTwo)
        })

        this.setResult()
      }
    },

    setResult() {
      this.setCount({
        result: this.calculateResult
      })

      this.setResultPreview(`${this.getCount.parameterOne}${this.handleSignal(this.getCount.signal)}${this.getCount.parameterTwo}=`)
      this.setExpression(String(this.getCount.result))
    },

    checkIfThereIsAlreadyAnExpressionInProgress() {
      if (this.getCount.result !== null) {
        this.setResultPreview('')
        this.setExpression(String(this.getCount.result) + this.text)

        this.setCount({
          parameterOne: null,
          signal: null,
          parameterTwo: null,
          result: null
        })
      }
    }
  }
}
</script>
