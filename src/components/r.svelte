<script>
    import { r } from '../store';
    import { onMount } from 'svelte';

    let rateUnit = 'percent'; // Đơn vị mặc định (percent/decimal)
    let timeUnit = 'year'; // Đơn vị thời gian mặc định (year/month)
    let displayedRate = 0; // Giá trị hiển thị trong ô nhập

    // Khi giá trị thay đổi trong ô nhập
    function handleRateChange(event) {
        displayedRate = parseFloat(event.target.value); // Cập nhật giá trị hiển thị
        let tempRate = rateUnit === 'percent' ? displayedRate / 100 : displayedRate; // Chuyển đổi nếu cần

        if (timeUnit === 'month') {
            $r = tempRate * 12; // Quy đổi lãi suất tháng sang năm
        } else {
            $r = tempRate; // Lưu lãi suất theo năm
        }
    }

    // Khi đơn vị phần trăm hoặc thập phân thay đổi
    function handleUnitChange(event) {
        rateUnit = event.target.value; // Cập nhật đơn vị
        if (rateUnit === 'percent') {
            displayedRate = $r * 100 / (timeUnit === 'month' ? 12 : 1); // Hiển thị dưới dạng phần trăm
        } else {
            displayedRate = $r / (timeUnit === 'month' ? 12 : 1); // Hiển thị dưới dạng thập phân
        }
    }

    // Khi đơn vị thời gian (tháng/năm) thay đổi
    function handleTimeUnitChange(event) {
        timeUnit = event.target.value; // Cập nhật đơn vị thời gian
        if (timeUnit === 'month') {
            $r = (rateUnit === 'percent' ? displayedRate / 100 : displayedRate) * 12; // Quy đổi sang năm
        } else {
            $r = rateUnit === 'percent' ? displayedRate / 100 : displayedRate; // Giữ nguyên theo năm
        }
    }
</script>

<style>

</style>

<div class="layer">
    <label for="rate">Lãi suất kép (r):</label>
    <input 
        type="number" 
        on:input={handleRateChange} 
        value={displayedRate} 
        id="rate" 
        name="rate" 
        step="1" 
        placeholder="Nhập lãi" 
        required>
    <select 
        id="selectRate" 
        name="rate" 
        on:change={handleUnitChange} 
        required>
        <option value="decimal">Thập phân</option>
        <option value="percent" selected>Phần trăm</option>
    </select>
    <select 
        id="timeUnit" 
        name="timeUnit" 
        on:change={handleTimeUnitChange} 
        required>
        <option value="year" selected>Theo năm</option>
        <option value="month">Theo tháng</option>
    </select>
</div>
