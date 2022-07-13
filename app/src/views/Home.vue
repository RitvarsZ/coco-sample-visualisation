<template>
  <div>
    List of images
  </div>
</template>

<script>
import { getAllImages } from '../data/dataHelper';

export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.images = getAllImages();
  },
};
</script>
