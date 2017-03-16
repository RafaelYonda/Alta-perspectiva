using AltaPerspectiva.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserProfile.Query.Interfaces;
using UserProfile.Domain.ReadModel;
using System.Data.SqlClient;
using System.Data;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using AltaPerspectiva.Core.Helpers;

namespace UserProfile.Query.Queries
{
    public class ProfileParameters : EFQueryBase<UserProfileQueryDbContext>, IProfileParameters
    {
        public ProfileParameters(UserProfileQueryDbContext context)
            : base(context)
        {
        }

        public List<CategoryWiseAnswer> CategoryWiseAnswerCount(Guid userId, string connectionString)
        {
            List<CategoryWiseAnswer> categoryWiseAnswers = new List<CategoryWiseAnswer>();
            String query = String.Format("SpCategoryWiseAnswer '{0}'", userId);
            categoryWiseAnswers = DataReaderToListHelper.DataReaderToList<CategoryWiseAnswer>(connectionString, query);
            return categoryWiseAnswers;
        }

        public ProfileParameter GetProfileParameter(Guid userId, string connectionString)
        {
            ProfileParameter profileParameter = new ProfileParameter();
            string query = String.Format("SpProfileParameterCount '" + userId + "'");
            profileParameter =
                DataReaderToListHelper.DataReaderToObject<ProfileParameter>(connectionString, query);

            return profileParameter;
        }

        public UserInfoDetails GetUserInfoDetails(Guid userId, string connectionString)
        {
            UserInfoDetails userInfoDetails = new UserInfoDetails();
            String query = String.Format("SpUserInfoDetails '{0}'", userId);
            userInfoDetails = DataReaderToListHelper.DataReaderToObject<UserInfoDetails>(connectionString, query);
            if (String.IsNullOrEmpty(userInfoDetails.FullName))
            {
                String fullNameQuery = String.Format(@"select UserName
       from[Identity].[AspNetUsers] a

        where a.Id = '{0}'", userId);
                String fullName = DataReaderToListHelper.DataReaderToSingleColumn(connectionString, fullNameQuery,
                    "UserName");

                userInfoDetails.FullName = fullName;
            }
            return userInfoDetails;
        }

        public async Task<List<UserSummary>> GetTopFiveUserSummary( string connectionString)
        {
            List<UserSummary> userSummery = new List<UserSummary>();
            string query = String.Format("SpTopUserCalculation");
            return  await Task.Run(() => userSummery = DataReaderToListHelper.DataReaderToList<UserSummary>(connectionString, query));
           
            
        }
        public async Task<List<UserSummary>> GetTopHundredUserSummary(string connectionString)
        {
            List<UserSummary> userSummery = new List<UserSummary>();
            string query = String.Format(@";with CTE
	as(
	SELECT  [Id],CONVERT(uniqueidentifier,Id) UserId,
	ISNULL((select top 1 FirstName+' '+LastName as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc),[UserName]) Name,
	(select top 1 ImageUrl as FullName from UserProfile.Credentials where UserId=u.Id order by Id desc) ImageUrl,
	(select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id) TotalLike,
	(select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) TotalComment,
	(select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) TotalQuestion,
	(select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) TotalAnswer,
	(
	 (select ISNULL(count(*),0) TotalLike from Questions.Likes where UserId=u.Id)*1+
	 (select ISNULL(count(*),0) TotalComment from Questions.Comments  where UserId=u.Id) *2+
	 (select ISNULL(count(*),0) TotalQuestion from Questions.Questions where UserId=u.Id) *3+
	 (select ISNULL(count(*),0) TotalAnswer from Questions.Answers where UserId=u.Id) *4
	) TotalCommulativePoint,
	(
	select top 1 e.Position from UserProfile.Employments e 
where CredentialId=(select top 1 Id from UserProfile.Credentials c where c.UserId=u.Id)
order by CreatedOn desc
	) Occupation,
	ISNULL((select top 1 ProfileViewCount from UserProfile.Credentials where UserId=u.Id),0) ProfileViewCount
	
	FROM [Identity].AspNetUsers u

	)
	select  * from CTE order by TotalCommulativePoint desc");
            return await Task.Run(() => userSummery = DataReaderToListHelper.DataReaderToList<UserSummary>(connectionString, query));


        }

        public async Task<UserSummary> GetUserSummary(Guid userId, string connectionString)
        {
            UserSummary summary = new UserSummary();
            string query = String.Format("SpTopUserCalculation '" + userId + "'");
            summary = await Task.Run(() => DataReaderToListHelper.DataReaderToObject<UserSummary>(connectionString, query));
           
            return summary;
        }

        public async Task<List<UserSummary>> GetUserSummnaryByCategoryId(Guid categoryId, string connectionString)
        {
            List<UserSummary> userSummery = new List<UserSummary>();
            string query = String.Format("SpTopUserCalculation null,'{0}'", categoryId);
            userSummery = await Task.Run(() => DataReaderToListHelper.DataReaderToList<UserSummary>(connectionString, query));
           
            return userSummery;
        }

        public UserEmailParameter GetUserEmailParameter(String connectionString,Guid userId)
        {
            String query = String.Format(@"select Id,Email,
(select top 1 ImageUrl from UserProfile.Credentials where UserId = a.Id) ImageUrl,
ISNULL((select top 1 FirstName + '' + LastName from UserProfile.Credentials where UserId = a.Id), UserName) UserName
       from[Identity].[AspNetUsers] a
        where a.Id = '{0}'", userId);

            UserEmailParameter userEmailParameter = DataReaderToListHelper.DataReaderToObject<UserEmailParameter>(connectionString,query);
            return userEmailParameter;

        }
    }
}
