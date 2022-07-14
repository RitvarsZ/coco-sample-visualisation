<template>
  <div v-if="loading">Loading</div>
  <div v-else>
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div v-else>
      Details
    </div>
  </div>
</template>
<script>
import { getImageById } from '@/data/dataHelper';

export default {
  data() {
    return {
      loading: true,
      details: null,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.details = null;
      this.error = null;
      const image = getImageById(this.$route.params.id);

      if (image) {
        this.details = image;
      } else {
        this.error = 'Not found.';
      }

      this.loading = false;
    },
  },
};
</script>
