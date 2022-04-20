import { component$, Host } from '@builder.io/qwik'
import './global.css'
import shows from '../data.json'

export const Main = component$(() => {
  const killedShows = shows.map((show) => (
    <li class="list-none font-extralight">
      <strong class="dark:text-white">{show.title}</strong> | Seasons: {show.seasons} |
      <span class="bg-netflix text-white p-1 my-2 mx-1">{show.date}</span>
    </li>
  ))

  return (
    <Host class="prose dark:text-white m-10 dark:bg-darky">
      <div class="dark:bg-darky">
        <h1 class="dark:text-white">
          Killed by <span class="text-netflix">Netflix</span>
        </h1>
        {killedShows}
      </div>
    </Host>
  )
})
