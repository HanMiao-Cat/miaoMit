import { ref } from 'vue';

export const useToggle = (defaultValue: boolean = false) => {
  const state = ref<boolean>(defaultValue);

  const on = () => {
    state.value = true;
  };

  const off = () => {
    state.value = false;
  };

  const toggle = () => {
    state.value = !state.value;
  };

  return {
    on,
    off,
    toggle
  };
};