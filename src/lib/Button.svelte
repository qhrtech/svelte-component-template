<script lang="ts">
	export let disabled = false;
</script>

<button on:click {disabled}>
	<slot />
</button>

<style>
	button {
		background-color: var(--button-bg, lightgray);
		color: var(--button-fg, black);
		padding: 8px 16px;
		border: 0;
		border-radius: 4px;
		margin: 0 0;

		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 140%;
		text-align: center;
	}

	button:hover {
		background-color: var(--button-hover-bg, gray);
		color: var(--button-hover-fg, white);
	}

	button:disabled {
		background-color: var(--button-disabled-bg, grey);
		color: var(--button-disabled-fg, white);
	}
</style>
