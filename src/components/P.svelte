<script>
    import { P } from '../store';
</script>

<style>

</style>

<div class ='layer'>
    <label for="Principal">Tiền vốn (P):</label>
    <input type="number" bind:value={$P} id="Principal" name="Principal" step="0.01" placeholder="Nhập số tiền" required>
</div>
