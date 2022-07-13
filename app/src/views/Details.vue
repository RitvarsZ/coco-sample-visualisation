<template>
  <div v-if="error">
    <h1>{{ error }}</h1>
  </div>
  <div v-else>
    Details
  </div>
</template>
<script>
import { getImageById } from '@/data/dataHelper';

export default {
  data() {
    return {
      details: null,
      error: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    getImageById(to.params.id, (err, details) => {
      next((vm) => vm.setData(err, details));
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.details = null;
    getImageById(to.params.id, (err, details) => {
      this.setData(err, details);
      next();
    });
  },
  methods: {
    setData(err, details) {
      if (err) {
        this.error = err;
      } else {
        this.details = details;
      }
    },
  },
};
</script>
