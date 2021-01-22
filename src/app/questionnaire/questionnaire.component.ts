import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import questionnaire from 'src/assets/questionnaire.json';
import { GeneralService } from '../general.service';

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
    template: '<sf-form [schema]="mySchema"></sf-form>'
})
export class QuestionnaireComponent implements OnInit {
    contentGeneral: any;
    generalService: any;

    ngOnInit() {
        this.getContentJSON();
    }
    getContentJSON() {
        this.generalService.getContentJSON().subscribe(data => {
            this.contentGeneral = data;
        }, // Bind to view
            err => {
                // Log errors if any
                console.log('error: ', err);
            });
    }

   
}
