<script>
      import { onMount } from 'svelte';
      import { P, r, n, t, A, choice, result } from '../store';
    import { TFcal } from '../store';
  
      onMount(()=>{
          $TFcal = false;
          
      });
  
      function calculate(choice, P, r, n, t, A) {
          if (choice === "total") {
              return P * Math.pow((1 + r / n), (n * t));
          } else if (choice === "principal") {
              return A / Math.pow((1 + r / n), (n * t));
          } else if (choice === "rate") {
              return n * (Math.pow((A / P), (1 / (n * t))) - 1);
          } else if (choice === "times") {
              return Math.log(A / P) / (t * Math.log(1 + r));
          } else if (choice === "years") {
              return Math.log(A / P) / (n * Math.log(1 + r / n));
          } else {
              return "Invalid choice";
          }
      }
  
      function handleCalculate() {
          $result = calculate($choice, $P, $r, $n, $t, $A);
          $TFcal = true
      }
  </script>
  <style>
      button{
        padding: 1em;
    width: 100%;
    border-radius: 1em;
    font-size: 1.5em;
    font-weight: bold;
    color: #ffffff;
    border: 0;
    background-color: #22578D;
    transition: 0.3s;
      }
      button:hover{
            opacity: 0.9;
      }
  </style>
  <br>
  <button on:click={handleCalculate}>Calculate</button>
  