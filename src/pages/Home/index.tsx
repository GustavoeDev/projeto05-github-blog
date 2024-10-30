import { Summary } from "./components/Summary";
import { HomeContainer, SearchBar } from "./styles";

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
    </HomeContainer>
  );
}
