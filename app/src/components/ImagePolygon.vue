<template>
  <g :visibility="hidden ? 'hidden' : ''">
    <text :x="points[0][0]" :y="points[0][1]" class="label" :fill="color"
      stroke="#000" stroke-width="1" >
      {{ name }}
    </text>
    <polygon :points="pointsString" :fill="color" opacity="0.5" stroke="#000" stroke-width="1" />
  </g>
</template>

<script>
export default {
  name: 'ImagePolygon',
  props: {
    points: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    hidden: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    pointsString() {
      return this.points.map((point) => `${point[0]},${point[1]}`).join(' ');
    },
    color() {
      // Random color.
      const hexColor = Math.floor(Math.random() * 16777215).toString(16);
      return `#${hexColor}`;
    },
  },
};
</script>

<style scoped>
.label {
  font-size: 12px;
  font-weight: bold;
}
</style>
