import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countryURL: []
    },
    mounted(){
      this.fetchCountry()
    },
    computed: {
            totalPopulation: function(){
              return this.countryURL.reduce((runningTotal, country) =>
              { return runningTotal + country.population
              }, 0)
          }
        },
    methods: {
      fetchCountry: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        // console.log("got it");
        .then(data => this.countryURL = data)
      }
    }
  })
})
