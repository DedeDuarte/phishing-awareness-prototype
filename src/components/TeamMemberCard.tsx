import { useState } from "react";
import { UserRound } from "lucide-react";
import type { TeamMember } from "../data/team";
export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [failedPhoto, setFailedPhoto] = useState<string>();
  return (
    <article className="team-card">
      <div className="team-avatar">
        {member.photo && failedPhoto !== member.photo ? (
          <img
            src={member.photo}
            alt={`Foto de ${member.name}`}
            onError={() => setFailedPhoto(member.photo)}
            loading="lazy"
          />
        ) : (
          <span role="img" aria-label={`Foto não cadastrada de ${member.name}`}>
            <UserRound size={43} strokeWidth={1.3} />
          </span>
        )}
      </div>
      <span className="team-label">EQUIPE DO PROJETO</span>
      <h2>{member.name}</h2>
      <p className="team-ra">RA: {member.ra}</p>
      {member.role && <p className="team-role">{member.role}</p>}
    </article>
  );
}
