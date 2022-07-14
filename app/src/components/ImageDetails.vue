<template>
  <div class="details">
    <svg :viewBox="`0 0 ${width} ${height}`">
      <image :href="coco_url" :width="width" :height="height" />
        <ImagePolygon v-for="object, index in objects" :key="index + '-' + object.name"
          :points="object.mask" :name="object.name" :hidden="shouldHidePoly(object)" />
    </svg>

    <div class="details-meta">
      <div>
        <h1>Image data</h1>
        <p>File name: {{ file_name }}</p>
        <p>Date: {{ date }}</p>
        <p>Dimensions: {{ width }}x{{ height }}</p>
      </div>

      <div>
        <h2>Objects</h2>
        <ul>
          <li v-for="object, index in objects" :key="index + '-' + object.name"
            @mouseover="highlightedObject = object"
            @mouseleave="highlightedObject = null">
            <p>Name: {{ object.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePolygon from './ImagePolygon.vue';

export default {
  name: 'ImageDetails',
  props: {
    coco_url: {
      type: String,
      required: true,
    },
    file_name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    objects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      highlightedObject: null,
    };
  },
  components: { ImagePolygon },
  methods: {
    shouldHidePoly(object) {
      return this.highlightedObject && this.highlightedObject !== object;
    },
  },
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.details-meta {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: .8rem;
}

ul li:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>
