<template>
  <div>
    <div class="filters">
      <button @click="filters.date.enabled = !filters.date.enabled">
        {{ filters.date.enabled ? 'Show' : 'Hide' }}
        images before
        {{ filters.date.before.toDateString() }}
      </button>
    </div>
    <div class="card-grid">
      <Card v-for="image in filteredImages" :key="image.id" :imgSrc="image.coco_url"
        :title="image.file_name" :description="getObjectString(image.objects)" :id="image.id" />
    </div>
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
      filters: {
        date: {
          before: new Date('2013-11-18'),
          enabled: true,
        },
      },
    };
  },
  computed: {
    filteredImages() {
      if (this.filters.date.enabled) {
        return this.images.filter((image) => new Date(image.date) < this.filters.date.before);
      }
      return this.images;
    },
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
.filters {
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
}

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
