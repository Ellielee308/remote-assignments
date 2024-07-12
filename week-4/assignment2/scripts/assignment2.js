function ajax(url) {
  return fetch(url).then((response) => {
    //return a promise
    return response.json();
  });
}

function render(data) {
  let content = document.querySelector(".content");
  for (let i = 0; i < data.length; i++) {
    let product = data[i];
    content.innerHTML += `
    <h1>${product.name}</h1>
    <p>售價 NT$ ${product.price}</p>
    <p>介紹： ${product.description}</p>
    `;
  }
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
