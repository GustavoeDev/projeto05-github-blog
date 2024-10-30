import { Issues } from "./components/Issues";
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside, SearchBar } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Summary />

      <SearchBar>
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchBar>

      <IssuesAside>
        <Issues />
        <Issues />
        <Issues />
      </IssuesAside>
    </HomeContainer>
  );
}
