export default function places(origin) {
  return window.$.getJSON(`/places?origin=${origin}`)
}
