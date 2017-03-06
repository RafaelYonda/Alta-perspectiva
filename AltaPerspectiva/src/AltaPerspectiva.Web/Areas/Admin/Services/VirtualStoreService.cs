using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.Admin.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using Microsoft.Extensions.Configuration;
using UserProfile.Command.Commands;
using UserProfile.Domain;

namespace AltaPerspectiva.Web.Areas.Admin.Services
{
    public class VirtualStoreService
    {
        public List<AddVirtualStoreViewModel> GetAddVirtualStoreViewModel(IQueryFactory queryFactory,List<VirtualStore> virtualStores,IConfigurationRoot configuration)
        {
            AzureFileUploadHelper azureFileUploadHelper=new AzureFileUploadHelper();
            List<AddVirtualStoreViewModel> addVirtualStoreViewModels=new List<AddVirtualStoreViewModel>();
            foreach (var virtualStore in virtualStores)
            {
                AddVirtualStoreViewModel addVirtualStoreViewModel = new AddVirtualStoreViewModel
                {
                    Id = virtualStore.Id,
                    Description = virtualStore.Description,
                    Title = virtualStore.Title,
                    ProductFileName = virtualStore.ProductFileName,
                    Price = virtualStore.Price,
                    ScreenShotFileName = azureFileUploadHelper.GetVirtualStoreDocument(virtualStore.ScreenShotFileName),
                    ProductComments=virtualStore.ProductComments.Select(x=>new ProductCommentViewModel
                    {
                        UserId = x.UserId,
                        CommentText = x.CommentText,
                        VirtualStoreId = x.VirtualStoreId,
                        UserViewModel = new UserService().GetUserViewModel(queryFactory,x.UserId, configuration)
                    })
                };
                addVirtualStoreViewModels.Add(addVirtualStoreViewModel);
            }
            return addVirtualStoreViewModels;
        }
    }
}
