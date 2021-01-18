import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import questionnaire from 'src/assets/questionnaire.json';

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
    template: '<sf-form [schema]="mySchema"></sf-form>'
})
export class QuestionnaireComponent implements OnInit {
    filterForm: FormGroup;
    filterFields: any[];
    questionnaireData: any;
    constructor(private fb: FormBuilder,
        private route: ActivatedRoute,) { }


    ngOnInit() {

        this.questionnaireData = questionnaire;
        this.filterForm = this.fb.group({
            reason: ['', Validators.required],
            description: ['', Validators.nullValidator]
        });

       
    }

    generateFilterForm(): FormGroup {
        const baseForm = this.fb.group({});
        this.filterFields.forEach(field => {
            baseForm.addControl(field.linkId, this.generateFormGroup(baseForm, field));
        });
        console.log(baseForm);
        return baseForm;
    }

    generateFormGroup(baseForm: FormGroup, field): FormGroup {
        if (field.group) {
            const formGroup = this.fb.group({});
            field.group.forEach(item => {
                formGroup.addControl(item.linkId, this.generateFormGroup(formGroup, item));
            });
            return formGroup;
        } else {
            baseForm.addControl(field.linkId, new FormControl(""));
        }
        return baseForm;
    }
}
