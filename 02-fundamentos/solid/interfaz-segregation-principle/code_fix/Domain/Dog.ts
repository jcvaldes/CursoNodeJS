import { Barker } from "./interfaces/Barker";

export class Dog implements Barker {
  public run(): void {
      console.log("Dog is running");
  }

  public bark(): void {
      console.log("Dog is barking");
  }
}