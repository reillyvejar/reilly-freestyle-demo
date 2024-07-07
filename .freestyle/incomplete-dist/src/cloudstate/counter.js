import { cloudstate } from "freestyle-sh";
@cloudstate
export class TheCounter {
    static id = "counter";
    count = 0;
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
//# sourceMappingURL=counter.js.map