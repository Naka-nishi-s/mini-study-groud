document.getElementById("fetchButton").addEventListener("click", async () => {
  try {
    // データを取得
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //      ↑ json形式のデータ

    const data = await response.json();
    //     ↑ JSオブジェクト

    // データが取得できているか確認
    console.log(data);

    // データをブラウザに表示
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = "";

    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      dataContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("データの取得に失敗しました", error);
  }
});
