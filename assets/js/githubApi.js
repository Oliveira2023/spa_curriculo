import { Octokit } from "octokit";

const octokit = new Octokit({ 
    auth: process.env.GITHUB_TOKEN,
  });

  async function listRepositories() {
    try {
        const response = await octokit.request("GET /{owner}/repos", {
            owner: "Oliveira2023",
            visibility: "all",

          });
        const repositories = response.data;
        repositories.forEach(repo => {
            console.log(`Nome: ${repo.name}, URL: ${repo.html_url}`);
          });
    }catch (error) {
        console.error("Erro ao obter os repositórios:", error);
      }
  }

    listRepositories();

    export default octokit;