import { useEffect, useState } from 'react';
import Homepages from '../../components/layouts/Homepages';
import Label from '../../components/molecules/Label';
import { detailPokemon } from '../../services';

interface GetServerSideProps{
  params: {
    id: string;
  },
}

export async function getServerSideProps({ params }: GetServerSideProps) {
  const { id } = params
  const res = await detailPokemon(id)
  const PokemonDetail = await res.data

  console.log(id)

  return { props: { PokemonDetail } }
}

export default function DetailPokemon({ PokemonDetail }: any) {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    if (PokemonDetail) setData(PokemonDetail.data)
  }, [PokemonDetail])

  return (
    <Homepages classMain="detail">
      <div className="detail-informasi">
        <div className="images-detail">
          <img src={data.avatar} alt="Pokemon" />
        </div>
        <div className="data-detail">
          <h3 className="title-data-detail">Informasi Umum</h3>
          <Label title="Nomor" label={data.number} />
          <Label title="Nama" label={data.name} />
          <Label title="Types" types={data.types} />
          <Label title="Classification" label={data.classification} />
          <Label title="Resistant" types={data.types} />
        </div>
      </div>
    </Homepages>
  )
}
