import { Link } from "aleph/react"
import { apiFactory } from "../api/apiFactory.ts"
import { useLog } from "../hooks/useLog.tsx"
import { useDelayCallback } from "../hooks/useDelayCallback.ts"

const linkIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z"
      fill="currentColor"
    />
  </svg>
);

const Index: React.FC = () => {
  const { setLog, renderLog } = useLog()
  const { start, stop } = useDelayCallback(10000, () => alert("test"))
  return (
    <div className="flex flex-row">
      <p className="logo">
        <img src="/assets/logo.svg" height="75" title="Aleph.js" />
      </p>
      <h1 className="ml-3">
        The Fullstack Framework in Deno.
      </h1>
      <p>
        <strong>Aleph.js</strong> gives you the best developer experience for building web applications<br />{" "}
        with modern toolings.
      </p>
      <div className="links">
        <a href="https://alephjs.org/docs/get-started" target="_blank">
          Get Started
          {linkIcon}
        </a>
        <a href="https://alephjs.org/docs" target="_blank">
          Docs
          {linkIcon}
        </a>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">
          Github
          {linkIcon}
        </a>
      </div>
      <nav>
        <button onClick={async () => setLog(await apiFactory.get("music").getMusicList())}>get music</button>
        <button onClick={async () => setLog(await apiFactory.get("person").login(1, "hoge"))}>person login</button>
        <button onClick={async () => setLog(await apiFactory.get("person").registPerson("hoge", "hoge0123", "huga"))}>regist person</button>
        <button onClick={async () => setLog(await apiFactory.get("person").modifyPersonStatus(1, "piyo", "hoge3210"))}>modify person</button>
        <button onClick={async () => setLog(await apiFactory.get("record").getMyRecord(1))}>get record</button>
        <button onClick={async () => setLog(await apiFactory.get("record").registRecord(1, 1, [0]))}>regist record</button>
        <button onClick={() => start()}>delay test start</button>
        <button onClick={() => stop()}>delay test stop</button>
        <Link to="/records">
          <button onClick={() => console.log("no entry")}>Your Records</button>
        </Link>
      </nav>
      { renderLog() }
    </div>
  )
}

export default Index