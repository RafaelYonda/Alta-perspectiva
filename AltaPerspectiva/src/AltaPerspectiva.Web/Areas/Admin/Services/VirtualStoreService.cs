using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.helpers;
using AltaPerspectiva.Web.Areas.Admin.Models;
using UserProfile.Command.Commands;
using UserProfile.Domain;

namespace AltaPerspectiva.Web.Areas.Admin.Services
{
    public class VirtualStoreService
    {
        public List<AddVirtualStoreViewModel> GetAddVirtualStoreViewModel(List<VirtualStore> virtualStores )
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
                    ProductComments=virtualStore.ProductComments
                };
                addVirtualStoreViewModels.Add(addVirtualStoreViewModel);
            }
            return addVirtualStoreViewModels;
        }
    }
}
