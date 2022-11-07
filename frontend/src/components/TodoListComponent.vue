<script setup lang="ts">
import { ref } from 'vue';

defineProps(["todoList"]);
const description = ref("");
</script>

<template>
	<div v-if="todoList.items.length === 0">
		No Item
	</div>
	<span class="completed">{{ todoList.getCompleted() }}%</span>
	<div v-for="item in todoList.items">
		{{ item.id }}
		<span :style="{ 'text-decoration': (item.done) ? 'line-through' : ''}">{{ item.description }}</span>
		<button @click="todoList.toggleDone(item)">Done/Undone</button>
		<button @click="todoList.removeItem(item)">Remove</button>
	</div>
	<hr/>
	<input type="text" v-model="description" @keyup.enter="todoList.addItem(description)"/>
</template>

<style scoped>
</style>
