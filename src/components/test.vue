<template>
	<div class="app">
		<div v-html="html"></div>
		{{user}}
		<br>
		{{user.firstname}}
		<br>
		{{user.lastname}}
		<div v-if="showName">
			<p>{{user.firstname}}</p>
		</div>
		<div v-else>
			<p>no puedo mostrar el nombre</p>
		</div>
		<hr>
		<li v-for="task in tasks" v-bind:key="task">
			{{task.title}}
		</li>
		<hr>
		<input type="text" v-model="user.firstname">
		<button type="button" v-on:click="saludar(user.firstname)">
			hola mundo
		</button>
		<hr>
		<input type="text" v-on:keyup="typing" v-on:keyup.enter="typingEnter">
	</div>
</template>

<script>
	export default{
		data() {
			return {
				title: 'hello world on vue',
				user: {
					firstname: 'khristopher',
					lastname: 'pineda'
				},
				html: "<h3> hello word </h3>",
				showName: false,
				tasks: [
					{title:'money'},
					{title:'womans'},
					{title:'eats'},
					{title:'knowledge'},
					{title:'intelligence'}
				]
			}
		},
		methods: {
			saludar (name) {
				alert(`hello world ${name}`);
			},
			typing (e) {
				console.log(e.target.value)
			},
			typingEnter () {
				alert("enter")
			}
		}
	}
</script>

<style media="screen">
	button {
		color: #000;
	}
</style>