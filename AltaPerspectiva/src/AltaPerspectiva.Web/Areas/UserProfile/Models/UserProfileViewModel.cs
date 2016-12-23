using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Domain;

namespace AltaPerspectiva.Web.Areas.UserProfile.Models
{
    public class UserProfileViewModel
    {
        public Biography biography { get; set; }
        public ContractInformation contractInformation { get; set; }
        public Education education { get; set; }
        public Experience experience { get; set; }
        public Insight insight { get; set; }
        public List<PracticeArea> practiceArea { get; set; }
        public List<Skill> skill { get; set; }
        public UserImage userImage { get; set; }
    }
}
