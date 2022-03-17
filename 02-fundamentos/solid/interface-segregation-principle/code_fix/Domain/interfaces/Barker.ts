import { Animal } from "./Animal";

export interface Barker extends Animal {
  bark(): void;
}
