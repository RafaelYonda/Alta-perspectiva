﻿using AltaPerspectiva.Core.Infrastructure;
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
using UserProfile.Domain;

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
            String query = String.Format(@"[SpCategoryWiseAnswer] '{0}'", userId);
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
            string query = String.Format(@"TopHundredUserSummary");
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
            String query = String.Format(@"SpGetUserEmailParameter '{0}'", userId);

            UserEmailParameter userEmailParameter = DataReaderToListHelper.DataReaderToObject<UserEmailParameter>(connectionString,query);
            return userEmailParameter;

        }

        public List<UserReadModel> GetUserReadModels(String connectionString, List<Guid> userIds)
        {
            String userIdStrings= "'";
            
            foreach (Guid userId in userIds)
            {

                userIdStrings = userIdStrings +userId.ToString()+",";
            }
            userIdStrings=userIdStrings.TrimEnd(',')+"'";
            String query=String.Format("[SpGetUsers] {0}",userIdStrings);


            List<UserReadModel> userReadModels = DataReaderToListHelper.DataReaderToList<UserReadModel>(connectionString, query);
            return userReadModels;

        }

        public UserReadModel GetUserReadModel(string connectionString, Guid userId)
        {
            String query = String.Format("[SpGetUsers] '{0}'", userId);
            UserReadModel userReadModel = DataReaderToListHelper.DataReaderToObject<UserReadModel>(connectionString,query);
            return userReadModel;
        }
    }
}
