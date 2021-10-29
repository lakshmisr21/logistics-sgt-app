import { ref, computed } from 'vue'
export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 130
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebardWidth = computed(
    ()=> `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED: SIDEBAR_WIDTH}px`
)