import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CashDesk } from "./cash-reconciliation.models";

@Injectable({ providedIn: 'root' })
export class CashReconciliationDbService {
    http: HttpClient = inject(HttpClient);
    private fb: FormBuilder = inject(FormBuilder);

}