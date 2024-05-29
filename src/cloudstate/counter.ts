import { cloudstate } from "freestyle-sh";
import type { createIncrementalCompilerHost } from "typescript";

@cloudstate
export class TheCounter {
  static id = "counter" as const;

  count: number = 0;

  getCount() {
    return this.count;
  }

  incrCount() {
    this.count++;
    return this.getCount();
  }

  decrCount() {
    this.count--;
    return this.getCount();
  }
}
