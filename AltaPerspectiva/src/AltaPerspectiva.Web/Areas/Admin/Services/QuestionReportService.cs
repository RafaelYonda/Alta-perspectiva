﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.Models;
using Questions.Domain;
using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.UserProfile.Services;

namespace AltaPerspectiva.Web.Areas.Admin.Services
{
    public class QuestionReportService
    {
        public List<ReportViewModel> GetQuestionReportViewModels(IQueryFactory queryFactory,List<QuestionReport> questionReports)
        {
            List<ReportViewModel> questionReportViewModels=new List<ReportViewModel>();


            foreach (var questionReport in questionReports)
            {
                ReportViewModel model = new ReportViewModel
                {
                    UserId = questionReport.UserId,
                    QuestionId = questionReport.QuestionId,
                    Title = questionReport.Title,
                    AnswerId = questionReport.AnswerId,
                    Comment = questionReport.Comment,
                    CreatedOn = questionReport.CreatedOn,
                    AnswerText = questionReport?.Answer?.Text,
                    Id = questionReport.Id,
                    QuestionTitle = questionReport?.Question.Title,
                    QuestionBody = questionReport?.Question.Body
                };
                model.UserFullName = new UserService().GetUserFullName(queryFactory,model.UserId);

                questionReportViewModels.Add(model);
            }
            return questionReportViewModels;
        }
    }
}