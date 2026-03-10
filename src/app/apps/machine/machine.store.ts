import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Machine } from "./machine.models";
import { MachineDbService } from "./machine.db.service";
import { computed, inject } from "@angular/core";
import { chain } from "lodash";

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
        },
        async updateQuery(query: string): Promise<void> {
            patchState(store, (state: MachineState) => ({
                query: query,
            }))
        },
        async updateSelectedTypes(selectedTypes: string[]): Promise<void> {
            patchState(store, (state: MachineState) => ({
                selectedTypes: selectedTypes,
            }));
        }
    })),
    withComputed(
        (
            {
                machineData,
                query,
                selectedTypes,
            }

        ) => ({
        filteredMachineData: computed(() => {
            let data: Machine[] = chain(machineData())
            .filter((el: Machine) => el.name.toLowerCase().includes(query().toLowerCase()))
            .filter((el: Machine) => selectedTypes().includes(el.type))
            .value();
            return data;
        }),
        uniqueTypes: computed(() => {
            const uniqueTypes: string[] = chain(machineData())
            .map((item: Machine) => item.type)
            .uniq()
            .sort()
            .value();
            return uniqueTypes;
        })
    }))
);