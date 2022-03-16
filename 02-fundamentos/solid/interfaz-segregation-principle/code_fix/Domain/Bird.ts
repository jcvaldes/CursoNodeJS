import { Flying } from "./interfaces/Flying";

export class Bird implements Flying {
  public fly(): void {
      console.log("Bird is flying");
  }

  public run(): void {
      console.log("Bird is running");
  }
}