import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import { PostAnchors, PostContainer, PostHeader, PostTitle } from "./styles";

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>
          <div>
            <a href="#">
              <CaretLeft size={16} />
              VOLTAR
            </a>
          </div>
          <div>
            <a href="#">
              VER NO GITHUB
              <ArrowUpRight size={16} />
            </a>
          </div>
        </PostTitle>
        <h1>JavaScript data types and data structures</h1>
        <PostAnchors>
          <div>
            <GithubLogo size={18} />
            <span>cameronwll</span>
          </div>

          <div>
            <Calendar size={18} />
            <span>Rocketseat</span>
          </div>

          <div>
            <ChatCircle size={18} />
            <span>32 seguidores</span>
          </div>
        </PostAnchors>
      </PostHeader>
    </PostContainer>
  );
}
