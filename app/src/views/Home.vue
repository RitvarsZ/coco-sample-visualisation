<template>
  <div class="card-grid">
    <Card v-for="image in images" :key="image.id"
      :imgSrc="image.coco_url"
      :title="image.file_name"
      :description="getObjectString(image.objects)"
      :id="image.id"/>
  </div>
</template>

<script>
import { getAllImages } from '@/data/dataHelper';
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.images = getAllImages();
  },
  methods: {
    getObjectString(objects) {
      let string = '';
      objects.forEach((object) => { string += `${object.name}, `; });
      string = string.charAt(0).toUpperCase() + string.slice(1);
      string = string.slice(0, -2); // remove last comma

      return string;
    },
  },
};
</script>

<style scoped>
.card-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  gap: 1rem;
  padding: 1rem;
}
</style>
