<script>
    import { t } from '../store';
</script>



<div class ='layer'>
    <label for="years">Thời gian (t):</label>
    <input type="number" bind:value={$t} id="years" name="years" step="1" placeholder="Nhập năm" required>
    <select id="years" name="years" required>
        <option value="year" selected>Năm</option>
        <option value="month">Tháng</option>
    </select>
</div>
