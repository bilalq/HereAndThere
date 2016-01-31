import _ from 'lodash'
import placeTmpl from './place_tmpl'
import places from './api/places'

require('../styles/app.scss')
const $ = window.$
const $places = $('#places ul')
$places.fadeOut(0)

$('#city-form').submit(function(e) {
  e.preventDefault()
  const city = $(this).find('input').val()
  places(city)
  .then(x => x.activities)
  .then(x => _.sampleSize(x, 5))
  .then(x => {
    $places.empty();
    x.forEach(function(place) {
      $places.append($(placeTmpl(place)));
    })
    $places.fadeIn()
    $('.collapsible').collapsible({ accordion : false });
  })
})
