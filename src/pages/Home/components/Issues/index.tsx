import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer } from "./styles";

interface IssuesProps {
  title: string;
  body: string;
  created_at: string;
}

export function Issues({ title, body, created_at }: IssuesProps) {
  return (
    <IssuesContainer href="#">
      <div>
        <h2>{title}</h2>
        <span>{dateFormatter.format(new Date(created_at))}</span>
      </div>
      <p>{body.length > 200 ? `${body.slice(0, 200)}...` : body}</p>
    </IssuesContainer>
  );
}
