import { useState } from "react";
import "./App.css";

function App() {
  // データを管理
  const [posts, setPosts] = useState([]);

  const fetchButton = async () => {
    // データを取得
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // データが取得できているか確認
    console.log(data);

    // データをセット
    setPosts(data);
  };

  return (
    <div>
      <h1>データを表示してみよう</h1>
      <button onClick={fetchButton}>データ取得ボタン</button>

      {/* データ表示部分 */}
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
