function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the pizza arrived");
    }, 3000);
  });
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function eatPizza() {
  const result = await orderPizza();
  console.log(result);
  await wait(2000);
  console.log("the client is eating the pizza");
}
//eatPizza();

function downloadFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the file is being downloaded");
    }, 2000);
  });
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function useFile() {
  const result = await downloadFile();
  console.log(result);
  await wait(2000);
  console.log("file downloaded successfully");
}
//useFile()

function playMovie() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the movie started playing");
    }, 4000);
  });
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function loadingMovie() {
  const result = await playMovie();
  console.log(result);
  console.log();
}
//loadingMovie();

function countdownTimer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("five seconds have passed");
    }, 5000);
  });
}
//countdownTimer().then((msg)=>console.log(msg))
