<script lang="ts">
  export let id:string = 'num-input';
  export let label:string = 'Note the red caret:';
  export let type:string = 'number';
  export let value:any = 0;
</script>

<style>
  :global(body){
    background: black;
  }

  div {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    font: 24px "Helvetica", "Arial", "sans-serif";
  }

 label {
   color: red;
 }
 
  .red-input {
    caret-color: red;
    width: 48px;
  }
</style>

<div>
  <label for={id}>{label}</label>
  <input {id} class="red-input" {type} {value} size=1>
</div>