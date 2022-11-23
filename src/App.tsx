import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";

import { PlusCircle } from "phosphor-react";

import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <Task />
        </main>
      </div>
    </div>
  );
}

export default App;
