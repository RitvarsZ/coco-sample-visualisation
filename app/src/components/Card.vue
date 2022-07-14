<template>
  <div class="card">
    <img :src="imgSrc" :alt="description" class="card-image" />
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-desc">{{ description }}</p>
    <div>
      <router-link :to="{ name: 'Details', params: { id: id } }">
        <button class="button-link">Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.card:hover {
  position: relative;
  overflow: auto;
}

.card:hover .card-desc {
  opacity: 1;
  display: block;
}

.card-image {
  aspect-ratio: 16/9;
  object-fit: cover;
  width: fill-available;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.8rem;
  margin: 0 1rem 0.5rem 1rem;
  display: none;
}

.button-link {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  color: #000;
  font-size: 0.8rem;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.button-link:hover {
  cursor: pointer;
  background-color: rgb(12, 133, 255);
  color: #fff;
  transition: 150ms ease-in-out;
}
</style>
