import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createFromIncompeteList(inputText);
};

const createFromIncompeteList = (text) => {
  // divを作成
  const div = document.createElement("div");
  div.className = "list-row";

  // pを作成
  const p = document.createElement("p");
  p.innerText = text;

  const li = document.createElement("li");

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode.closest("li"));
    const addTarget = complateButton.parentNode.closest("li");
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    // divの初期化
    addTarget.textContent = null;
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.innerText = text;
    const li = document.createElement("li");

    // 戻るボタン実装
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = deleteTarget.firstElementChild.firstElementChild.innerText;
      createFromIncompeteList(text);
    });

    div.appendChild(p);
    div.appendChild(backButton);
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode.closest("li"));
  });

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了に追加する関数
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
