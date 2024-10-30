import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import {
  PostAnchors,
  PostContainer,
  PostContent,
  PostHeader,
  PostTitle,
} from "./styles";

import { NavLink } from "react-router-dom";

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>
          <div>
            <p>
              <NavLink to="/">
                <a href="#">
                  <CaretLeft size={16} />
                  VOLTAR
                </a>
              </NavLink>
            </p>
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

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PostContent>
    </PostContainer>
  );
}
