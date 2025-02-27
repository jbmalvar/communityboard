import './App.css';
import marvelRivalsImage from './assets/MarvelRivalsImage.jpg'
import jeff from './assets/jefftheshark.webp'
import Card from './components/card.jsx'
import diveChar from './assets/diveChar.avif'
import BeatComp from './assets/BeatComp.jpg'
import top500 from './assets/OneAboveAll.webp'
import tierlist from './assets/tierlist.png'
import psylocke from './assets/psylocke.webp'
import metaComp from './assets/MarvelRivalsComp.webp'
import ranks from './assets/ranks.png'
import tips from  './assets/tips.avif'
import counters from './assets/counters.jpg'

const App = () => {

  return (
    <div className="App">
      <header className = "header">
        <img src={marvelRivalsImage} alt="Marvel Rivals" />
      </header>
      <h1>Marvel Rivals Recommender</h1>
      <h2>Marvel Rivals stuff to look at</h2>
      <div className = "card-container">
        <Card
          image={tierlist}
          title="Tier List"
          description="Tier List for all heroes"
          link="https://tiermaker.com/create/marvel-rivals-characters-17135468"
        />
        <Card
          image={counters}
          title="Counters"
          description="A description of the card"
          link="https://www.dexerto.com/gaming/best-counters-for-all-marvel-rivals-characters-3004813/"
        />
        <Card
          image={psylocke}
          title="Recommended Heroes"
          description= "For first time players"
          link="https://www.cnet.com/tech/gaming/marvel-rivals-how-to-choose-which-heroes-and-roles-to-play/"
        />
        <Card
          image={top500}
          title="Top 500"
          description="Current top 500 players"
          link="https://rivalsmeta.com/leaderboard"
        />
        <Card
          image={ranks}
          title="Rank Guide"
          description="How to climb in certain ranks"
          link="https://marvelrivals.gg/competitive-guide/#:~:text=Climbing%20ranks%20isn't%20just,match%20won't%20always%20work."
        />
        <Card
          image={tips}
          title="Tips & Tricks"
          description="Tips and tricks for the game"
          link="https://www.youtube.com/watch?v=gAXj12pRPEw"
        />
        <Card
          image={metaComp}
          title="Meta Comps"
          description="Current Meta Comps"
          link="https://www.youtube.com/watch?v=PflDK8zGpIQ"
        />
        <Card
          image={jeff}
          title="Jeff Images"
          description="Images of Jeff"
          link="https://www.reddit.com/r/Marvel/comments/1hf5fgz/jeff_the_land_shark_images/"
        />
        <Card
          image={BeatComp}
          title="How to beat comp"
          description="Quick guide to beat comps"
          link="https://www.sportskeeda.com/esports/best-counters-marvel-rivals-characters"

        />
        <Card
          image={diveChar}
          title="Counter Dives"
          description="Quick guide to counter dives"
          link="https://www.sportskeeda.com/esports/best-counters-marvel-rivals-characters"
        />
      </div>
    </div>
  )
}

export default App
