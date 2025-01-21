<script>
    import Result from "../components/Result.svelte";
import Main from "../components/Main.svelte";
    import { choice, TFcal } from "../store.js";


    function handleSelection() {
        const selectedValue = document.getElementById('calculation').value;
        setSelectedCalculation(selectedValue);
        console.log(`Selected Calculation: ${selectedValue}`); // Example action
    }

    function setSelectedCalculation(value) {
        $choice = value
    }
</script>

<style>
    #container {
        position: absolute;
        top: 3vh;
        left: 2vw;
        right: 2vw;
        min-height: 94vh;
       background-color: transparent;
    }
    #container_nav{
        display: flex
;
    justify-content: center;
    }
    select{
        border: 0;
    border-radius: 0.5em;
    margin-top: 1em;
    padding-inline: 1em;
    padding-block: 0.5em;
    font-size: 1em;
    background-color: #22578D;
    color: white;
    font-weight: bold;
    }
    :global(label){
        font-size: 1.3em;
    font-weight: bold;
    color: black;
    margin-block: 1em;
    }
    :global(.layer){
        display: flex
;
    flex-wrap: wrap;
    gap: 1em;
    border-bottom: 0.1em solid #40a5ff;
    margin-bottom: 2em;
    align-items: center;
    }
    :global(input){
        border: 0;
    border-bottom: 0.1em solid black;
    border-radius: 0.2em;
    padding-block: 0.3em;
    padding-inline: 0.5em;
    font-size: 1.3em;
    
    }
    :global(select){
        background-color: transparent;
    border: 0;
    font-size: 1.2em;
    font-style: italic;
    font-weight: bold;
    }
</style>

<div id="container">
    <div id="container_nav">
        <select id="calculation" on:change={handleSelection}>
            <option value="" disabled selected>Chọn đại lượng cần tính</option>
            <option value="total">Tiền tương lai (A)</option>
            <option value="principal">Tiền vốn (P)</option>
            <option value="rate">Lãi (r)</option>
            <option value="times">Số kì trên năm (n)</option>
            <option value="years">Số năm (t)</option>
        </select>
     
    </div>
    <Main />
    {#if $TFcal}<Result/>{/if}
</div>
