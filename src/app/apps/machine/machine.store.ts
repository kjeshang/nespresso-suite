import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Machine } from "./machine.models";
import { MachineDbService } from "./machine.db.service";
import { inject } from "@angular/core";

type MachineState = {
    machineData: Machine[];
    isLoading: boolean;
    query: string;
    selectedTypes: string[];
}

const initialMachineState: MachineState = {
    machineData: [],
    isLoading: false,
    query: '',
    selectedTypes: ['Vertuo', 'Original', 'Accessory']
}

export const MachineStore = signalStore(
    { providedIn: 'root' },
    withState(initialMachineState),
    withMethods((store, db: MachineDbService = inject(MachineDbService)) => ({
        async loadMachineData(): Promise<void> {
            patchState(store, (state: MachineState) => ({
                isLoading: true,
            }));
            const machineData: Machine[] = await db.getMachineData();
            patchState(store, (state: MachineState) => ({
                machineData: machineData,
                isLoading: false,
            }));
        }
    }))
)