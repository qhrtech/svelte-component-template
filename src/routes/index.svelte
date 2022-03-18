<script lang="ts">
	import Button from '$lib/Button.svelte';
</script>

<main>
	<Button on:click={() => alert('clicked')}>Click Me!</Button>
	<Button --button-bg="red" --button-fg="white">Red Button</Button>
	<Button disabled>Disabled</Button>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100vw;
		height: 100vh;
	}

	:global(body) {
		background: #333;
	}
</style>
