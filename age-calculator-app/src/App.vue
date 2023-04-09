<script>
import { ErrorMessage } from 'vee-validate'
export default {
  name: 'App',
  data() {
    return {
      years: '--',
      months: '--',
      days: '--',
      todays: new Date().getFullYear(),
      schema: {
        year: `required|min_value:1|max_value:2023`,
        month: 'required|min_value:1|max_value:12',
        day: 'required|min_value:1|max_value:31'
      }
    }
  },
  components: { ErrorMessage },
  methods: {
    formSubmition(values) {
      const today = new Date()
      let cur_day = today.getDate()
      let cur_mo = today.getMonth()
      let cur_yr = today.getFullYear()
      let user_day = values.day
      let user_mo = values.month
      let user_yr = values.year

      //calculate difference in days
      if (cur_day < user_day) {
        cur_day += 30
        cur_mo--
      }
      this.days = cur_day - user_day

      //calculate difference in months
      if (cur_mo < user_mo) {
        cur_mo += 12
        cur_yr--
      }
      this.months = cur_mo - user_mo
      this.years = cur_yr - user_yr
    }
  }
}
</script>

<template>
  <main class="container">
    <vee-form :validation-schema="schema" @submit="formSubmition" class="form">
      <div class="form-container">
        <label for="day" class="form-txt">Day</label>
        <vee-field type="number" name="day" placeholder="DD" class="input" />
        <ErrorMessage name="day" class="error" />
      </div>
      <div class="form-container">
        <label for="month" class="form-txt">Month</label>
        <vee-field name="month" type="number" placeholder="MM" class="input" />
        <ErrorMessage name="month" class="error" />
      </div>
      <div class="form-container">
        <label for="year" class="form-txt">Year</label>
        <vee-field name="year" type="number" placeholder="YYYY" class="input" />
        <ErrorMessage name="year" class="error" />
      </div>
      <button id="submit"><img src="/assets/icon-arrow.svg" alt="button" /></button>
    </vee-form>
    <hr />
    <div class="display">
      <ul class="items">
        <li>
          <p class="counter">{{ this.years }}</p>
          <p>years</p>
        </li>
        <li>
          <p class="counter">{{ this.months }}</p>
          <p>months</p>
        </li>
        <li>
          <p class="counter">{{ this.days }}</p>
          <p>days</p>
        </li>
      </ul>
    </div>
  </main>
</template>
