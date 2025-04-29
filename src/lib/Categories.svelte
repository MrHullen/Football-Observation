<script>
  import { updatePlayer } from '$lib/db.js'

  export let player
  export let currentCategory
</script>

{#each player.achievements as achievement}
  <!-- Only display the achievements from the currently selected tab. -->
  {#if achievement.category === currentCategory}
    <!-- Each achievement criteria gets its own box -->
    {#each achievement.criteria as criterion}
      <article class="box">

        <!-- The first line of each box has the thing to achieve, and at the end is the date. -->
        <div class="level">
          <div class="level-left">
            <p>{criterion.name}</p>
          </div>
          <div class="level-right">
            <p contenteditable="true">{criterion.observationDate}</p>
          </div>
        </div>

        <!-- The second line of each box has a decrement button on the left, the progress bar in the middle, and the increment button on the right. -->
        <div class="level progress-bar">
          <button
            class="button is-small level-left"
            on:click={() => {
              criterion.value--, updatePlayer(player)
            }}>-</button>
          <div class="level-item">
            <progress class="progress is-success" value={criterion.value} max="10">{criterion.value}%</progress>
          </div>
          <button
            class="button is-small level-right"
            on:click={() => {
              criterion.value++, updatePlayer(player)
            }}>+</button>
        </div>

      </article>
    {/each}
  {/if}
{/each}

<style>
  @media screen and (max-width: 768px) {
    div.level-item {
      width: 50%;
    }

    .progress-bar {
      display: flex;
      flex-direction: row;
    }
  }
</style>