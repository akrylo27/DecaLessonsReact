import Head from "next/head"
import Player from "@/components/player"
import Form from "@/components/form/Form"
import Label from "@/components/form/Label"
import Input from "@/components/form/Input"
import Button from "@/components/form/Button"

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

      {/* Тестовая форма */}
      <Form method={"GET"} name={"myForm"}>
        <Label htmlFor={"firstName"} value={"лейбл1"} />
        <Input type={"text"} name={"firstName"} placeholder={"инпут1"} />
        <Label htmlFor={"secondName"} value={"лейбл2"} />
        <Input type={"text"} name={"secondName"} placeholder={"инпут2"} />
        <Label htmlFor={"thirdName"} value={"лейбл3"} />
        <Input type={"text"} name={"secondName"} placeholder={"инпут3"} />
        <Button isClick={true} />
      </Form>
    </>
  )
}
