<script>
    import { A } from '../store.js';
</script>

<style>

</style>

<div class ='layer'>
    <label for="totalAmount">Tiền tương lai (A):</label>
    <input type="number" bind:value={$A} id="totalAmount" name="totalAmount" step="0.01" placeholder="Nhập số tiền" required>
</div>
