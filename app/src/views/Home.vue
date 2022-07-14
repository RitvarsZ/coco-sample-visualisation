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
  created() {
    this.images = getAllImages();
  },
};
</script>
