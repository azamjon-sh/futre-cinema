<template>
  <button :class="btnClass">
    <template v-if="icon === 'play'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <polygon fill="none" points="13 10.343 13 21.657 23 16 13 10.343"/>
        <path fill="#000"
              d="M16,0A16,16,0,1,0,32,16,16.019,16.019,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14.015,14.015,0,0,1,16,30Z"/>
        <path fill="#000"
              d="M23.492,15.129l-10-5.656a1,1,0,0,0-1.492.87V21.657a1,1,0,0,0,1,1,.992.992,0,0,0,.492-.13l10-5.656a1,1,0,0,0,0-1.742ZM14,19.942V12.058L20.969,16Z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'later'">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" fill="none">
        <path fill="#000"
              d="M3.702 12.83a12.572 12.572 0 1 1 5.212 10.8l1.45-1.45a10.552 10.552 0 1 0-4.624-9.583l-2.038.233Z"/>
        <path fill="#000"
              d="M6.14 18.844a1.26 1.26 0 0 1-2.129.107L.96 14.62a1.26 1.26 0 0 1 .966-1.985l5.655-.285a1.26 1.26 0 0 1 1.161 1.877L6.14 18.844zM13.66 6.3h1.445v9.202H13.66V6.3z"/>
        <path fill="#000" d="m13.66 15.502.794-1.207 7.69 5.053-.794 1.207-7.69-5.053Z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'info'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <g fill="#fff" data-name="Layer 2">
          <path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/>
          <path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"/>
        </g>
      </svg>
    </template>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      required: true,
    },
    btnClass:{
      type: String,
      required: true,
    },
  },
  name: "btn"
}
</script>

<style scoped>

</style>