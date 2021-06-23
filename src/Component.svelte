<script lang="ts">
  export let id = 'num-input';
  export let label = 'Note the red caret:';
  export let type = 'number';
  export let value = 0;
</script>

"
<div>
  <label for={id}>{label}</label>
  <input {id} class="red-input" {type} {value} size="1" />
</div>

<style>
  :global(body) {
    background: black;
  }

  div {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    font: 24px 'Helvetica', 'Arial', 'sans-serif';
  }

  label {
    color: red;
  }

  .red-input {
    caret-color: red;
    width: 48px;
  }
</style>
