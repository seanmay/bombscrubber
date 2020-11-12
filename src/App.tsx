import "./reset-styles.css";
import "./base-styles.css";
import React, { useState, lazy, Suspense } from 'react';

import Title from "./design-components/title";
import NavItem from "./design-components/nav-item";

import infoList from "./site/info/info-list";
import taskList from "./site/tasks/task-list";

type PageRoutes = {
  [url: string]: ReturnType<typeof lazy>;
};

const allLists = [...infoList, ...taskList];
const pages = allLists
  .map(task => [task.url, lazy(() => import(task.url))] as const)
  .reduce((map: PageRoutes, [url, component]) => {
    map[url] = component;
    return map;
  }, {});

const loading = <div>...loading</div>;

const App = () => {
  const [selectedUrl, setSelectedUrl] = useState(allLists[0].url);
  const Page = pages[selectedUrl];

  return (
    <main>
      <header className="pv2 ph2">
        <Title level={1}>Bombscrubber</Title>
      </header>
      <section className="pv2 ph2" style={{ display: "flex" }}>
        <aside style={{ minWidth: "15rem" }}>
          <section>
            <Title level={2}>Info</Title>
            <nav className="pv2" style={{ display: "flex", flexDirection: "column", justifyItems: "stretch" }}>
              {infoList.map((item) =>
                <NavItem
                  style={{ textAlign: "start" }}
                  key={item.url}
                  onSelect={() => setSelectedUrl(item.url)}
                  active={item.url === selectedUrl}
                >{item.title}</NavItem>)}
            </nav>
          </section>
          <section>
            <Title level={2}>Tasks</Title>
            <nav className="pv2" style={{ display: "flex", flexDirection: "column", justifyItems: "stretch" }}>
              {taskList.map((task) =>
                <NavItem
                  style={{ textAlign: "start" }}
                  key={task.url}
                  onSelect={() => setSelectedUrl(task.url)}
                  active={task.url === selectedUrl}
                >{task.title}</NavItem>)}
            </nav>
          </section>
        </aside>
        <section className="ph3" style={{ flex: 1 }}>
          <Suspense fallback={loading}>
            <Page />
          </Suspense>
        </section>
      </section>
    </main>);
};


export default App;
