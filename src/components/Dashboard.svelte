<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Main from "./Main.svelte";
  import { fade } from "svelte/transition";
</script>

<main in:fade={{ delay: 400, duration: 400 }}>
  <Sidebar />
  <Main />
</main>

<style>
  main {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(248.66deg, #A8C8ED 0%, #7673DC 100%);
    display: flex;
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;
    }
  }
</style>
