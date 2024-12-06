import "./styles.css";
import axios from "axios";
import { useState } from "react";
const URL = "https://api.github.com/search/users";
export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          axios
            .get(URL, {
              params: {
                per_page: 5,
                q: text,
              },
            })
            .then(({ data }) => {
              setData(data.items);
            });
        }}
      >
        Search
      </button>
      {data.map((user) => (
        <div>
          {user.login}{" "}
          <div>
            <img width={200} height={200} src={user.avatar_url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
