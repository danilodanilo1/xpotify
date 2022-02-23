import React, { useState } from "react";
import Aside from "../../Components/Aside";
import Content from "../../Components/Content";
import Results from "../../Components/Results";
import TrackSearch from "../../Components/TrackSearch";
import Wrapper from "../../Components/Wrapper";
import Album from "../Album";

function Home() {
  const [mirror, setMirror] = useState(1);

  const HomeContent = ({screen}) => (
    <>
      <TrackSearch />
      <Results setScreen={screen} />
    </>
  );

  const AlbumContent = ({screen}) => (
    <>
      <Album setScreen={screen}/>
    </>
  );

  return (
    <Wrapper>
      <Aside />
      <Content >{mirror === 1 ? <HomeContent screen={setMirror} /> : <AlbumContent screen={setMirror} />}</Content>
    </Wrapper>
  );
}

export default Home;
