<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { computed, ref } from 'vue'
import { handleClick } from './clickHandler'

const count = ref(0)

const event = () => {
  handleClick(count)
}
// non-primitive refs get converted to reactive under-the-hood
const book = ref({ title: 'Vue 3 Guide' })

const goats = ref([{ name: 'Evan You' }, { name: 'Rich Harris' }])

const goatCount = computed(() => goats.value.length)

const id = 'dklfl'
const className = 'lol'
const buttonDisabled = false
const date = new Date().toTimeString()

const magicEvent = 'onMagic'
const idAttr = 'id'
const htmlValue = '<h1>hii</h1>'

const objOfAttrs = {
  id: 'wrapper',
  class: 'wrapper',
  style: 'background-color:green',
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div>
        <button :[idAttr]="`hiiii`" :disabled="buttonDisabled" @click="event">
          {{ count }}
        </button>
        <p>{{ count % 2 === 0 ? 'even' : 'odd' }}</p>
        <br />
        <!-- magicEvent will obvs never fire hehe -->
        <div @[magicEvent]="handleClick" :class="className" :id>hi</div>
        <div v-html="htmlValue"></div>
        <div v-bind="objOfAttrs">i have attrs in an obj</div>
        <time :datetime="date">
          {{ date }}
        </time>
        <p>my book: {{ book.title }}</p>
        <input type="text" v-model="book.title" />
        <p>goat count: {{ goatCount }}</p>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
