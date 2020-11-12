import React from "react";

import Title from "../../design-components/title";
import Text from "../../design-components/text";

const Page = () => {
  return (
    <section>
      <header>
        <Title level={2}>Introduction</Title>
      </header>
      <Text className={"pv2 lh3"}>
        This repo provides a breakdown of steps required to make a half-passable Minesweeper knockoff.
        <br />
        While the rendering will be done in React, all of the meaningful game logic will be held separately, in TypeScript, and could be used as a backing for any other form of rendering.
        <br />
        Some important decisions about the domain models and API of the game logic have already been made; the majority of the logic behind the interface is yet to be solved, however.
        <br />
        Practically all work will be done in the <code>/src/game</code> folder.
      </Text>
    </section>
  );
};

export default Page;
