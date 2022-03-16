import { Animal } from "./Animal";

export interface Flying  extends Animal{
  fly(): void;
}
