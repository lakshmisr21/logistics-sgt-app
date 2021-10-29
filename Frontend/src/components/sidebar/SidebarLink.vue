<template>
  <router-link :to="to" class="link" :class="{active: isActive}">
      <i class="icon" :class="icon"></i>
      <transition name="fade">
      <span v-if="!collapsed">
          <slot />
      </span>
      </transition>
  </router-link>
</template>

<script>
import { computed} from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
props: {
    to: { type: String, required: true},
    icon: { type: String, required: true}
},
setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed}
}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}


.link{
    display: flex;
    align-items: left;

    cursor: pointer;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: white;
    text-decoration: none;
}

.link:hover{
    background-color: var(--sidebar-item-hover);
}

.link.active{
    background-color: var(--sidebar-item-active);
}

.link .icon{
    flex-shrink: 0;
    width: 22px;
    margin-right: 10px;
}

</style>