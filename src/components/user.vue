<template>
	<div class="users">
		<h1> user component </h1>
		<ul>
			<li v-for="user in users" v-bind:key="user">
				{{ user }} <button v-on:click="deletUser(user)">X</button>
			</li>
		</ul>
		<hr>
		<form v-on:submit.prevent="addUser">
			<input type="text" v-model="newUsers.name" placeholder="name">
			<input type="email" v-model="newUsers.email" placeholder="emal">
			<button type="submit">
				add
			</button>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				users: [],
				newUsers: {}
			}
		},
		methods:{
			addUser(/*e*/){
				// e.preventDefault();
				// alert('user agregado');
				this.users.push(this.newUsers);
				this.newUsers = {}
			},
			deletUser(user) {
				this.users.splice(this.users.indexOf(user),1);
			}
		},
		created(){
			this.$http.get('https://jsonplaceholder.typicode.com/users').then(res => this.users = res.body)
			alert('listo');
		}
	}
</script>
<style lang="css">
	.user{
		background: #eee;
		color: #000;
	}
</style>