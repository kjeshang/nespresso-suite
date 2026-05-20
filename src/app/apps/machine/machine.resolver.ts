import { inject } from "@angular/core"
import { MachineStore } from "./machine.store"
import { of } from "rxjs";

export const MachineResolver = async() => {
    const machineStore = inject(MachineStore);
    await machineStore.loadMachineData();
    return of(undefined);
}