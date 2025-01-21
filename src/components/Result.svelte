<script>
    import { result, choice, TFcal } from '../store';

    // Helper function to round to two decimal places
    function roundToTwoDecimal(value) {
        return Math.round(value * 100) / 100;
    }

    let detailedResult = 0;
    let roundedResult = 0;
    let displayResult = '';
    let detailedPercent
    let roundedPercent
    $: if ($TFcal) {
        detailedResult = $result;
        roundedResult = roundToTwoDecimal($result);
        detailedPercent = detailedResult * 100;
    roundedPercent = roundToTwoDecimal(detailedPercent);
       
    }
</script>

<style>
	#containerRes{
        padding: 5vw;
    display: flex
;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #C2E3E8;
    border-radius: 1em;
    margin-block: 1em;
	}
    h2{
        font-size: 3em;
    color: #22578D;
    }
    h3{
        font-size: 1.5em;
    margin-block: 0.3em;
    }
</style>

<div id="containerRes">
    {#if $TFcal}
        {#if $choice === 'total'}
            <h2 class="total">Tiền tương lai (A)</h2>
            <h3>Đáp án: {detailedResult}</h3>
            <h3>Rút gọn: {roundedResult}</h3>
        {:else if $choice === 'principal'}
            <h2 class="principal">Tiền vốn (P)</h2>
            <h3>Đáp án: {detailedResult}</h3>
            <h3>Rút gọn: {roundedResult}</h3>
        {:else if $choice === 'rate'}
            <h2 class="rate">Lãi suất (r)</h2>
            <h3>Thập phân: {detailedResult}</h3>
            <h3>Phần trăm: {roundedPercent}%</h3>
        {:else if $choice === 'times'}
            <h2 class="times">Số kì mỗi năm (n)</h2>
            <h3>Đáp án: {detailedResult}</h3>
            <h3>Rút gọn: {roundedResult}</h3>
        {:else if $choice === 'years'}
            <h2 class="years">Số năm (t)</h2>
            <h3>Đáp án: {detailedResult}</h3>
            <h3>Rút gọn: {roundedResult}</h3>
        {:else}
            <h2 class="invalid">Lựa chọn không hợp lệ</h2>
        {/if}
    {:else}
        <h2>Vui lòng nhập các giá trị và tính toán mong muốn.</h2>
    {/if}
</div>