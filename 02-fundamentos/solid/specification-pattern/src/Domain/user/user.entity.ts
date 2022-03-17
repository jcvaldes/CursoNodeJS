import { Entity } from "../interfaces/entity.interface";

export enum typeSymptoms {
  "FIEBRE",
  "TOS_SECA",
  "CANSANCIO",
  "DOLORES",
  "DOLOR_DE_GARGANTA",
  "DIARREA",
  "CONJUNTIVITIS",
  "DOLOR_DE_CABEZA",
  "PERDIDA_DE_GUSTO",
  "PERDIDA_DE_OLFATO",
  "ERUPCION_PIEL",
  "DIFICULTAD_PARA_RESPIRAR",
  "DOLOR_DE_PECHO",
  "PERDIDA_DEL_HABLA",
}

export type symptom = keyof typeof typeSymptoms;

export interface UserProps {
  name: string;
  symptoms?: symptom[];
}
export class User extends Entity<UserProps> {
  private constructor(props: UserProps) {
    super(props);
  }
  get name(): string {
    return this.props.name;
  }

  get symptoms(): symptom[] {
    return this.props.symptoms;
  }

  public static create(props: UserProps): User {
    return new User(props);
  }
}
// const Peter = User.create({ name: "Peter" , symptoms: ['FIEBRE', 'TOS_SECA', "CONJUNTIVITIS"]});
