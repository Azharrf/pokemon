import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Homepages from '../components/layouts/Homepages'
import Card from '../components/molecules/Card'
import { getPokemon } from '../services'

export async function getServerSideProps() {
  const res = await getPokemon()
  const Pokemon = await res

  return { props: { Pokemon } }
}

const Home: NextPage = ({ Pokemon }: any) => {
  const titleButton = ['Grass', 'Poison']
  const [data, setData] = useState<any>([])

  useEffect(() => {
    if (Pokemon) setData(Pokemon.data)
  }, [Pokemon])

  return (
    <Homepages classMain="home">
      <div className="list-item">
        {data.length > 0 && data.map((d: any, i: number) => (
          <Card key={i} id={d.uuid} title={d.number} images={d.avatar} name={d.name} titleButton={d.types} />
        ))}
      </div>
    </Homepages>
  )
}

export default Home
