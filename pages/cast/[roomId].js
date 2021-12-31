import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Layout from "../../components/Layout";
import Head from "next/head";

const PlayerMain = dynamic(() => import("../../components/PlayerMain"), {
  ssr: false,
});

function RoomPage() {
  const router = useRouter();

  const { roomId, userName, roomName, roomTopic, roomLanguage, roomLocation } =
    router.query;

  return (
    <Layout>
      <Head>
        <title>Room collaboration | The New Tunisia</title>
        <meta
          name="description"
          content="Debate, connect, sharing, technologies and make ideas , the new tunisia developer community"
        />
      </Head>

      <PlayerMain
        roomId={roomId}
        userName={userName}
        roomName={roomName}
        roomTopic={roomTopic}
        roomLanguage={roomLanguage}
        roomLocation={roomLocation}
        isHost={true}
      />
    </Layout>
  );
}

export default RoomPage;
