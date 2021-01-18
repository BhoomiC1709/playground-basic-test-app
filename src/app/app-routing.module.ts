import { NgModule } from '@angular/core';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'questionnaire', component: QuestionnaireComponent },
   
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
