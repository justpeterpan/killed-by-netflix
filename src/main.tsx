import { component$, Host } from '@builder.io/qwik'
import './global.css'
import shows from '../data.json'

export const Main = component$(() => {
  const killedShows = shows.map((show) => (
    <li className=" list-none font-extralight bg-cardBackground text-lightBlue rounded-lg px-5 py-5 my-5">
      <div className="flex">
        <img
          src="https://picsum.photos/200/300.jpg"
          className="max-h-40 m-0 p-0 rounded-md mr-5"
          alt="movie poster"
        />
        <div>
          <strong className="text-lightBlue block">{show.title}</strong>Seasons: {show.seasons}
        </div>
      </div>
      <span className="bg-netflix text-white py-1 px-3 mt-5 rounded-md text-center block">{show.date}</span>
    </li>
  ))

  return (
    <Host className="prose dark:text-white m-10 dark:bg-darky">
      <div className="dark:bg-darky">
        <h1 className="dark:text-white">
          Killed by <span className="text-netflix">Netflix</span>
        </h1>
        {killedShows}
      </div>
    </Host>
  )
})