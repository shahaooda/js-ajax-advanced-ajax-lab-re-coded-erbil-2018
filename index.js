function getRepos() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/A7madXatab/repos')
  req.send()
}
function showRepositories(event,data)
{
  let repos = JSON.parse(this.responseText);
  let reposList = document.createElement("ul");
  for(let i=0;i<repos.length;i++)
   {
     let li = document.createElement("li");
    let a = document.createElement("a");
  a.setAttribute("href",repos[i]["html_url"]);
  a.innerHTML = "Go to ";
  let h2 = document.createElement("h4");
  h2.appendChild(a);
  h2.innerHTML = h2.innerHTML+ repos[i]["name"];
  li.appendChild(h2);
  
  let watchersP = document.createElement("p");
  watchersP.innerHTML = "WatchersCount "+repos[i]["watchers_count"];
  let forksP = document.createElement("p");
  forksP.innerHTML = "Forks count "+repos[i]["forks_count"];
  let isuuesP = document.createElement("p");
  isuuesP.innerHTML ="isuues Count "+repos[i]["open_issues_count"];
  li.appendChild(watchersP);
  li.appendChild(forksP);
  li.appendChild(isuuesP);
  
  reposList.appendChild(li);
   }
   console.log(reposList)
   document.getElementById("repositories").appendChild(reposList);
}