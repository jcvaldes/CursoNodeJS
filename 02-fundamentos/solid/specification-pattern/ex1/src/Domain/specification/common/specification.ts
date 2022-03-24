export abstract class Specification<T> implements Specification<T> {
  abstract isSatisfiedBy(target: T): boolean;
  and(other: Specification<T>): Specification<T> {
    return new AndSpecification<T>(this, other);
  }
  or(other: Specification<T>): Specification<T> {
    return new OrSpecification<T>(this, other);
  }
}

export class AndSpecification<T> extends Specification<T> {
  constructor(
    private readonly first: Specification<T>,
    private readonly other: Specification<T>
  ) {
    super();
  }

  isSatisfiedBy(target: T): boolean {
    return this.first.isSatisfiedBy(target) && this.other.isSatisfiedBy(target);
  }
}

export class OrSpecification<T> extends Specification<T> {
  constructor(
    private readonly first: Specification<T>,
    private readonly other: Specification<T>
  ) {
    super();
  }

  isSatisfiedBy(target: T): boolean {
    return this.first.isSatisfiedBy(target) || this.other.isSatisfiedBy(target);
  }
}
