<script>
  import Header from '$lib/Header.svelte'
  import Tabs from '$lib/Tabs.svelte'
  import Categories from '$lib/Categories.svelte'
  import Footer from '$lib/Footer.svelte'
  import { getPlayer } from '$lib/db.js'

  let player = getPlayer()
  let currentCategory = 'Attacking'
</script>

<Header />

<main class="content section">

  <!-- Wait for the player to come from the database before loading all the stuff on the page. -->
  {#await player}
    <p>Loading...</p>
  {:then player}
    <h2>{player.firstName} {player.lastName}</h2>

    <!-- The tabs get sent the achievements so they know the categories to display. They also keep track of the currently selected category. -->
    <Tabs {player} bind:currentCategory />

    <!-- Categories show the individual achievements and their current level. It also keeps track of the currently selected category. -->
    <Categories {player} bind:currentCategory />
   
  {/await}
</main>

<Footer />