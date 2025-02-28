import type { Ref } from 'vue'

export const handleClick = (count: Ref<number>) => {
  count.value++
}
