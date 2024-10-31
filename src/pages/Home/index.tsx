import { useEffect, useState } from "react";
import { Issues } from "./components/Issues";
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside, SearchBar } from "./styles";
import { searchIssues } from "../../lib/axios";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {
  const [issue, setIssue] = useState<Issue[]>([]);
  const [searchInput, setSearchInput] = useState("");

  async function fetchIssues(query?: string) {
    const response = await searchIssues.get("/issues", {
      params: {
        q: query
          ? `${query} in:title repo:GustavoeDev/projeto05-github-blog`
          : `repo:GustavoeDev/projeto05-github-blog`,
      },
    });
    setIssue(response.data.items);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput) {
        fetchIssues(searchInput);
      } else {
        fetchIssues();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <HomeContainer>
      <Summary />

      <SearchBar>
        <div>
          <h3>Publicações</h3>
          <span>{issue.length} publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </SearchBar>

      <IssuesAside>
        {issue.length === 0 && searchInput ? (
          <p>Nenhuma issue encontrada para "{searchInput}".</p>
        ) : (
          issue.map((issueData) => (
            <Issues
              key={issueData.id}
              title={issueData.title}
              body={issueData.body}
              created_at={issueData.created_at}
            />
          ))
        )}
      </IssuesAside>
    </HomeContainer>
  );
}
