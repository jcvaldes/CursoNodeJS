export interface Specification<T> {
  isSatisfiedBy: (target: T) => boolean;
  // para hacer encadenamientos de especificaciones
  and: (other: Specification<T>) => Specification<T>;
  or: (other: Specification<T>) => Specification<T>;
}
