import _ from 'lodash'

export default _.template( `
<li>
  <div class="collapsible-header">
    <i class="material-icons">navigation</i>
    <%= title %>
  </div>
  <div style="background: white;" class="collapsible-body">
    <p>Categories: <%= categories.join(',') %></p>
    <p>Price: <%= fromPrice %></p>
    <p>Recommendation Score: <%= recommendationScore %></p>
  </div>
</li>
`)
