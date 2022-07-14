<template>
  <div v-if="loading">Loading</div>
  <div v-else>
    <div class="filters">
      <button @click="filters.date.enabled = !filters.date.enabled">
        {{ filters.date.enabled ? 'Show' : 'Hide' }}
        images before
        {{ filters.date.before.toDateString() }}
      </button>
    </div>
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>

    <div v-if="images.length" class="card-grid">
      <Card v-for="image in filteredImages" :key="image.id" :imgSrc="image.coco_url"
        :title="image.file_name" :description="getObjectString(image.objects)" :id="image.id" />
    </div>
  </div>
</template>

<script>
import { getAllImages } from '@/data/api';
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  name: 'Home',
  data() {
    return {
      loading: false,
      error: null,
      images: [],
      filters: {
        date: {
          before: new Date('2013-11-18'),
          enabled: false,
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
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      this.loading = true;
      this.error = null;

      getAllImages().then((res) => {
        this.images = res.data;
      }).catch((err) => {
        this.error = err;
      }).finally(() => {
        this.loading = false;
      });
    },

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
