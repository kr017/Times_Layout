async function getTopNews() {
  //   await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=3351b432ae1d4ca5babfa5cd5504a3ca`
  //   )
  //     .then(res => {

  let data = [
    {
      title: "Saudi King Salman Hospitalized for Medical Tests",
      link: "https://time.com/5868873/saudi-kind-salman-hospitalized/",
    },
    {
      title: "Iran Executes Man Convicted of Spying on Soleimani",
      link: "https://time.com/5868856/iran-executed-spy-soleimani/",
    },
    {
      title: "Kim Jong Un Berates Officials Over Hospital Project",
      link: "https://time.com/5868844/kim-jong-un-berate-hospital-officials/",
    },
    {
      title: "Boy, 12, Driving Stolen Truck Leads Police on Chase",
      link: "https://time.com/5868839/delaware-boy-stolen-truck-police/",
    },
    {
      title: "N.J. Federal Judge’s Son Killed, Husband Wounded",
      link: "https://time.com/5868834/new-jersey-federal-judge-shooting/",
    },
  ];

  showData(data);
  // })
  // .catch(err => {});
}

getTopNews();

function showData(data) {
  let tab = "";
  let index = 1;

  for (let r of data) {
    tab += `<div class="news_tile"> 
    <div class="news_index">${index} </div>
           <div class="news_title">${r.title}</div>
</div>`;
    index++;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}
