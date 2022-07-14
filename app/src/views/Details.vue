<template>
  <div v-if="loading">Loading</div>
  <div v-else>
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div v-else>
      <router-link to="/">Back</router-link>
      <ImageDetails :coco_url="details.coco_url" :file_name="details.file_name" :date="details.date"
        :width="details.width" :height="details.height" :objects="details.objects" />
    </div>
  </div>
</template>
<script>
import { getImageById } from '@/data/api';
import ImageDetails from '@/components/ImageDetails.vue';

export default {
  components: {
    ImageDetails,
  },
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

      getImageById(this.$route.params.id).then((res) => {
        this.details = res;
      }).catch((err) => {
        this.error = err;
      }).finally(() => {
        this.loading = false;
      });
    },
  },
};
</script>
