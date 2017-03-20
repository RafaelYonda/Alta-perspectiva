using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Domain.ReadModel
{
    public class Report
    {
        public Int64 Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Link { get; set; }

        public String Comment { get; set; }
        public DateTime ReportDate { get; set; }

        public  Report()
        {
            ReportDate=DateTime.Now;
        }
        /*
         
        Harassment: Disparaging or adversarial towards a person or group
        Spam: Undisclosed promotion for a link or productDoesn't Answer the Question: Does not address question that was asked
        Plagiarism: Reusing content without attribution (link and blockquotes)
        Joke Answer: Not a sincere answer
        Poorly Written: Not in English or has very bad formatting, grammar, and spelling
        Unhelpful Credential: Author's credential is not credible, clear, and relevant
        Bad Image: Content contains image that violates policyFactually 
        Incorrect: Substantially incorrect and/or incorrect primary conclusions     
             
        */

        public List<Report> GetQuestionReports()
        {
            /*
             Harassment: Disparaging or adversarial towards a person or group
             Spam: Undisclosed promotion for a link or product
             Insincere: Not seeking genuine answers
             Poorly Written: Not in English or has very bad formatting, grammar, and spelling
             Incorrect Topics: Topics are irrelevant to the question or overly broad
             
             */
            List<Report> reports = new List<Report>();
            reports.Add(new Report
            {
                //Title = "Harassment",
                Title = "Información no apta",
                Description = "Disparaging or adversarial towards a person or group",
                Link = "#",
            });
            reports.Add(new Report
            {
               // Title = "Spam",
                Title = "Información no deseada",
                Description = "Undisclosed promotion for a link or product",
                Link = "#",
            });
            reports.Add(new Report
            {
               // Title = "Insincere",
                Title = "Falso",
                Description = " Not seeking genuine answers",
                Link = "#",
            });
            reports.Add(new Report
            {
                //Title = "Poorly Written",
                Title = "Mal escrito",
                Description = " Not in English or has very bad formatting, grammar, and spelling",
                Link = "#",
            });

            reports.Add(new Report
            {
               // Title = "Incorrect Topics",
                Title = "Temática incorrecta",
                Description = " Not in English or has very bad formatting, grammar, and spelling",
                Link = "#",
            });

            return reports;
        }
        public List<Report> GetAnswerReports()
        {
            List<Report> reports=new List<Report>();

            reports.Add(new Report
            {
                //  Title = "Harassment",
                Title = "Información no apta",
                Description = "Disparaging or adversarial towards a person or group",
                Link = "#",
            });

            reports.Add(new Report
            {
                //   Title = "Spam",
                Title = "Información no deseada",
                Description = "Undisclosed promotion for a link or product",
                Link = "#",
            });
            reports.Add(new Report
            {
               // Title = "Joke Answer",
                Title = "Broma",
                Description = "Not a sincere answer",
                Link = "#",
            });
            reports.Add(new Report
            {
               // Title = "Plagiarism",
                Title = "Plagio",
                Description = "Reusing content without attribution (link and blockquotes)",
                Link = "#",
            });

            reports.Add(new Report
            {
                //Title = "Poorly Written",
                Title = "Mal escrito",
                Description = "Not in English or has very bad formatting, grammar, and spelling",
                Link = "#",
            });

            reports.Add(new Report
            {
                //Title = "Unhelpful Credential",
                Title = "Inútil",
                Description = " Author's credential is not credible, clear, and relevant",
                Link = "#",
            });

            reports.Add(new Report
            {
               // Title = "Bad Image",
                Title = "Mala imagen",
                Description = "Content contains image that violates policyFactually ",
                Link = "#",
            }); reports.Add(new Report
            {
               // Title = "Incorrect",
                Title = "Incorrecto",
                Description = " Substantially incorrect and/or incorrect primary conclusions   ",
                Link = "#",
            });
            return reports;
        }


    }
}
