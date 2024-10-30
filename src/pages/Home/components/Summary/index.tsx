import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import avatar from "../../../../assets/avatar.png";
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <img src={avatar} />
      <section>
        <SummaryHeader>
          <h1>Camerom Williamson</h1>
          <a href="http://github.com/GustavoeDev" target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>cameronwll</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>Rocketseat</span>
          </div>

          <div>
            <Users size={18} />
            <span>32 seguidores</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
