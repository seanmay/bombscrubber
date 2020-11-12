import React from "react";

import Title from "../../design-components/title";
import Text from "../../design-components/text";

const Page = () => {
  return (
    <section>
      <header>
        <Title level={2}>Getting Started</Title>
      </header>
      <section>
        <Text className="lh4">
          Clone the repo.
          <br />
          <code>&gt; npm install</code>
          <br />
          <code>&gt; npm start</code>
        </Text>
      </section>
    </section>
  );
};

export default Page;
