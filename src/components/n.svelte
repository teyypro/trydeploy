<script>
    import { n } from '../store';
</script>

<style>
select{    margin: 0;}
</style>

<div class ='layer'>
    <label for="interestFrequency">Số kì một năm (n):</label>
    <select bind:value={$n} id="interestFrequency" name="interestFrequency" required>
        <option value="1" selected>(1) Năm</option>
        <option value="4">(4) Quý</option>
        <option value="12">(12) Tháng</option>
        <option value="365">(365) Ngày</option>
    </select>
</div>
