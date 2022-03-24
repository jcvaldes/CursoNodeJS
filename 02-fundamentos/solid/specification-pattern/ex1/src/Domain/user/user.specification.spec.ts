import { User } from "./user.entity";
import {
  UserHasAllCommonSymptomsSpecification as CommonSymptom,
  UserHasLessCommonSymptomsSpecification as LessCommonSymptom,
  UserHasSomeSeriousSymptomsSpecification as SomeSeriousSymptom,
  UserNeedMedical,
  UserNeedUTI,
} from "./user.specification";

describe("user.specification", () => {
  it("user should has fever", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["FIEBRE", "CANSANCIO", "TOS_SECA"],
    });

    const result = new CommonSymptom().isSatisfiedBy(peter);
    console.log(result);
    expect(result).toBeTruthy();
  });
  it("user should has not fever", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["DOLOR_DE_GARGANTA", "CANSANCIO", "TOS_SECA"],
    });

    const result = new CommonSymptom().isSatisfiedBy(peter);

    expect(result).toBeFalsy();
  });
  it("user should has some less common symptom", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["DIARREA"],
    });

    const result = new LessCommonSymptom().isSatisfiedBy(peter);

    expect(result).toBeTruthy();
  });
  it("user should has not some less common symptom", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["FIEBRE"],
    });

    const result = new LessCommonSymptom().isSatisfiedBy(peter);

    expect(result).toBeFalsy();
  });
  it("user should has some serious symptom", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["DIFICULTAD_PARA_RESPIRAR"],
    });

    const result = new SomeSeriousSymptom().isSatisfiedBy(peter);

    expect(result).toBeTruthy();
  });
  it("user should has not some serious symptom", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["FIEBRE"],
    });

    const result = new SomeSeriousSymptom().isSatisfiedBy(peter);

    expect(result).toBeFalsy();
  });
  it("user should needs uti", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["FIEBRE", "TOS_SECA", "CANSANCIO", "DIFICULTAD_PARA_RESPIRAR"],
    });

    const result = new UserNeedUTI().isSatisfiedBy(peter);

    expect(result).toBeTruthy();
  });
  it("user should not needs uti", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["FIEBRE", "TOS_SECA", "CANSANCIO"],
    });

    const result = new SomeSeriousSymptom().isSatisfiedBy(peter);

    expect(result).toBeFalsy();
  });
  it("user should need medical", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: ["FIEBRE", "TOS_SECA", "CANSANCIO", "DIFICULTAD_PARA_RESPIRAR"],
    });

    const result = new UserNeedMedical().isSatisfiedBy(peter);

    expect(result).toBeTruthy();
  });
  it("user should not needs medical", () => {
    const peter = User.create({
      name: "Peter",
      symptoms: [],
    });

    const result = new UserNeedMedical().isSatisfiedBy(peter);

    expect(result).toBeFalsy();
  });
});
