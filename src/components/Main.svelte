<script>
    import A from "../components/A.svelte";
    import P from "../components/P.svelte";
    import R from "../components/r.svelte";
    import N from "../components/n.svelte";
    import Y from "../components/Y.svelte";
    import {choice} from '../store'
    import Cal from "./Cal.svelte";
</script>
<style>
	#containerMain{
        padding: 5vw;
    display: flex
;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #C2E3E8;
    border-radius: 1em;
    margin-block: 1em;
	}
</style>


  
{#if $choice === "total"}
<div id ="containerMain">
<P/>
<R/>
<N/>
<Y/>
<Cal/>
</div>
{:else if $choice === "principal"}
<div id ="containerMain">
<A/>
<R/>
<N/>
<Y/>
<Cal/>
</div>
{:else if $choice === "rate"}
<div id ="containerMain">
<A/>
<P/>
<N/>
<Y/>
<Cal/>
</div>
{:else if $choice === "times"}
<div id ="containerMain">
<A/>
<P/>
<R/>
<Y/>
<Cal/>
</div>
{:else if $choice === "years"}
<div id ="containerMain">
<A/>
<P/>
<R/>
<N/>
<Cal/>
</div>
{/if}