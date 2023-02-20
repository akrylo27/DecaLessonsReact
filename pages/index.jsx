import Head from "next/head"
import Player from "@/components/player"
import ModalForm from "@/components/form/ModalForm"

export default function Home() {
  const track = {
    id: 1,
    author: "Pham feat. Filip",
    name: "Squaad",
    src: "/audio/pham.mp3",
  }

  return (
    <>
      <Head>
        <title>
          {track.author} - {track.name}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Player track={track} />
      <ModalForm />

      {/* Тестовая форма */}
    </>
  )
}
