using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Admin.Models;
using UserProfile.Command.Commands;
using UserProfile.Domain;

namespace AltaPerspectiva.Web.Areas.Admin.Services
{
    public class VirtualStoreService
    {
        public List<AddVirtualStoreViewModel> GetAddVirtualStoreViewModel(List<VirtualStore> virtualStores )
        {
            List<AddVirtualStoreViewModel> addVirtualStoreViewModels=new List<AddVirtualStoreViewModel>();
            foreach (var virtualStore in virtualStores)
            {
                AddVirtualStoreViewModel addVirtualStoreViewModel = new AddVirtualStoreViewModel
                {
                    Id = virtualStore.Id,
                    Description = virtualStore.Description,
                    Title = virtualStore.Title,
                    FileName = virtualStore.FileName,
                    Prize = virtualStore.Prize,
                    ScreenShotImage = virtualStore.ScreenShotImage,

                };
                addVirtualStoreViewModels.Add(addVirtualStoreViewModel);
            }
            return addVirtualStoreViewModels;
        }
    }
}
