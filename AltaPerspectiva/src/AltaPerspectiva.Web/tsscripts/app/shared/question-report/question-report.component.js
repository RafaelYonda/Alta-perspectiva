var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, ViewContainerRef } from '@angular/core';
import { QuestionReport } from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var QuestionReportComponent = (function () {
    function QuestionReportComponent(questionService, toastr, vcr) {
        this.questionService = questionService;
        this.toastr = toastr;
        this.close = new EventEmitter();
    }
    QuestionReportComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    QuestionReportComponent.prototype.ngOnInit = function () {
    };
    QuestionReportComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    QuestionReportComponent.prototype.save = function () {
        var _this = this;
        if (this.selectedQuestionReport == undefined) {
            this.toastr.warning('Please select a cause!!', 'Oops');
        }
        else {
            this.questionReport = new QuestionReport();
            this.questionReport.title = this.selectedQuestionReport;
            this.questionReport.comment = this.comment;
            this.questionReport.questionId = this.questionId;
            this.questionReport.answerId = this.answerId;
            this.questionService.SaveReport(this.questionReport).subscribe(function (res) {
                _this.close.emit('event');
                _this.toastr.success('Gracias, analizaremos tu reporte.', 'Aprobado');
            });
        }
    };
    ;
    return QuestionReportComponent;
}());
QuestionReportComponent = __decorate([
    Component({
        selector: 'question-report',
        templateUrl: 'question-report.component.html',
        styleUrls: ['question-report.component.css'],
        providers: [QuestionAnswerService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService, ToastsManager, ViewContainerRef])
], QuestionReportComponent);
export { QuestionReportComponent };
