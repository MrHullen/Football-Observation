<script>
  export let player
  export let currentCategory
</script>

<div class="tabs">
  <ul>
    {#each player.achievements as achievement}
      <li class:is-active={ currentCategory == achievement.category }>
        <a on:click={() => { currentCategory = achievement.category }}>{achievement.category}</a>
      </li>
    {/each}
  </ul>
</div>