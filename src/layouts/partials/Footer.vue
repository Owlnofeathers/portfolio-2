<template>
  <div class="footer-wrapper">
    <footer id="footer" class="footer bg-background-secondary" role="contentinfo">
      <div class="footer-inner container m-auto md:flex justify-between items-center px-6 pt-10 pb-20 md:pb-10">
        <p class="pb-8 md:pb-0">
          ©{{ new Date().getFullYear() }}
          <a href="https://github.com/Owlnofeathers" target="_blank">Adam Bailey</a>
        </p>

        <ul class="flex justify-center">
          <li class="mr-4" v-for="element in $static.metadata.social" :key="element.link">
            <a
              :href="element.link"
              class="block text-copy-primary hover:text-copy-hover"
              :aria-label="element.icon"
              target="_blank"
            >
              <svg
                class="block"
                fill="currentColor"
                role="img"
                aria-hidden="true"
                width="18"
                height="18"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  :xlink:href="socialIcon(element)"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`
    }
  }
}
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>
