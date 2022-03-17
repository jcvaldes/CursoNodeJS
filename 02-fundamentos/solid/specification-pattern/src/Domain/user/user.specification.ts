import { Specification } from "../specification/common/specification";
import { symptom, User } from "./user.entity";

/**
 * All Common Symptoms Specification
 * FIEBRE
 * TOS_SECA
 * CANSANCIO
 */
export class UserHasAllCommonSymptomsSpecification extends Specification<User> {
  private readonly SYMPTOM_CRITERIAL_FEVER: symptom = "FIEBRE";
  private readonly SYMPTOM_CRITERIAL_TOS_SECA: symptom = "TOS_SECA";
  private readonly SYMPTOM_CRITERIAL_CANSANCIO: symptom = "CANSANCIO";

  isSatisfiedBy(user: User): boolean {
    const symptoms = user.symptoms;
    return (
      symptoms.includes(this.SYMPTOM_CRITERIAL_FEVER) &&
      symptoms.includes(this.SYMPTOM_CRITERIAL_TOS_SECA) &&
      symptoms.includes(this.SYMPTOM_CRITERIAL_CANSANCIO)
    );
  }
}
/**
 * Menos Comunes (Less Common)
 * DOLORES
 * DOLOR_DE_GARGANTA",
 * DIARREA
 * CONJUNTIVITIS
 * DOLOR_DE_CABEZA
 * PERDIDA_DE_GUSTO
 * PERDIDA_DE_OLFATO
 * ERUPCION_PIEL
 */
export class UserHasLessCommonSymptomsSpecification extends Specification<User> {
  private readonly SYMPTOM_CRITERIAL: symptom[] = [
    "DOLORES",
    "DOLOR_DE_GARGANTA",
    "DIARREA",
    "CONJUNTIVITIS",
    "DOLOR_DE_CABEZA",
    "PERDIDA_DE_GUSTO",
    "PERDIDA_DE_OLFATO",
    "ERUPCION_PIEL",
  ];

  isSatisfiedBy(user: User): boolean {
    const symptoms = user.symptoms;
    // return symptoms
    //   .map((symptom) => this.SYMPTOM_CRITERIAL.includes(symptom))
    //   .includes(true);
    return symptoms.some((symptom) => this.SYMPTOM_CRITERIAL.includes(symptom));
  }
}

/**
 * Some Serioys Symptoms
 * DIFICULTAD_PARA_RESPIRAR
 * DOLOR_DE_PECHO
 * PERDIDA_DEL_HABLA
 */
export class UserHasSomeSeriousSymptomsSpecification extends Specification<User> {
  private readonly SYMPTOM_CRITERIAL: symptom[] = [
    "DIFICULTAD_PARA_RESPIRAR",
    "DOLOR_DE_PECHO",
    "PERDIDA_DEL_HABLA",
  ];

  isSatisfiedBy(user: User): boolean {
    const symptoms = user.symptoms;
    return symptoms.some((symptom) => this.SYMPTOM_CRITERIAL.includes(symptom));
  }
}

export class UserNeedUTI extends Specification<User> {
  isSatisfiedBy(user: User): boolean {
    return new UserHasAllCommonSymptomsSpecification()
      .and(new UserHasSomeSeriousSymptomsSpecification())
      .isSatisfiedBy(user);
  }
}

export class UserNeedMedical extends Specification<User> {
  isSatisfiedBy(user: User): boolean {
    return new UserHasAllCommonSymptomsSpecification()
      .or(new UserHasLessCommonSymptomsSpecification())
      .or(new UserHasSomeSeriousSymptomsSpecification())
      .isSatisfiedBy(user);
  }
}
