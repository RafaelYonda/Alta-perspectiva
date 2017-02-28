using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.IO;
using AltaPerspectiva.Web.Areas.Admin.Helpers;

namespace AltaPerspectiva.Web.Areas.Admin.helpers
{
    public class AzureFileUploadHelper
    {
        private string _storageConnection = "DefaultEndpointsProtocol=https;AccountName=altablob;AccountKey=ThRey0TjbkkV6vleW+k9tH/0vd9U5lGv9tlbICuTIkFAIXQjVD0zqcr2MToF2GLM4Q5m8h99zk+J4xlT+lPVhw==";
        private string _storageLink = "https://altablob.blob.core.windows.net/";
        private async Task<string> GetAzureFileFullLink(String containerName,IFormFile file)
        {
            CloudStorageAccount cloudStorageAccount = CloudStorageAccount.Parse(_storageConnection);
            //create a block blob    
            CloudBlobClient cloudBlobClient = cloudStorageAccount.CreateCloudBlobClient();
            //create a container    
            CloudBlobContainer cloudBlobContainer = cloudBlobClient.GetContainerReference(containerName);
            //For virtualstoredocument not public access
            

            //create a container if it is not already exists    
            if (await cloudBlobContainer.CreateIfNotExistsAsync() )
            {
                if (containerName != "virtualstoreproduct")
                {
                    await cloudBlobContainer.SetPermissionsAsync(new BlobContainerPermissions
                    {
                        PublicAccess = BlobContainerPublicAccessType.Blob
                    });
                }
                
            }
            string _imageName = file.FileName;

            CloudBlockBlob cloudBlockBlob = cloudBlobContainer.GetBlockBlobReference(_imageName);
            cloudBlockBlob.Properties.ContentType = file.ContentType;
            Stream stream = file.OpenReadStream();
            Task.WaitAll(cloudBlockBlob.UploadFromStreamAsync(stream));

            return cloudBlockBlob.Uri.ToString(); ;
        }
        public async Task<string> SaveProfileImage(IFormFile file)
        {
            String url = await GetAzureFileFullLink(ConfigClass.Profile, file);
            return url;
        }

        public string GetProfileImage(String imageName)
        {
            if (string.IsNullOrEmpty(imageName))
            {
                imageName = "avatar.png";
            }

            String url = _storageLink + ConfigClass.Profile+"/"+imageName;
            return url;
        }
        /*Other upload*/
        public async Task<string> SaveCategoryImage(IFormFile file)
        {
            String url = await GetAzureFileFullLink(ConfigClass.Category, file);
            return url;
        }

        public string GetCategoryImage(String imageName)
        {
            String url = _storageLink + ConfigClass.Category + "/" + imageName;
            return url;
        }
        public async Task<string> SaveVirtualStoreDocument(IFormFile file)
        {
            String url = await GetAzureFileFullLink(ConfigClass.VirtualStoreDocument, file);
            return url;
        }

        public string GetVirtualStoreDocument(String imageName)
        {
            String url = _storageLink + ConfigClass.VirtualStoreDocument + "/" + imageName;
            return url;
        }
        public async Task<string> SaveVirtualStoreProduct(IFormFile file)
        {
            String url = await GetAzureFileFullLink(ConfigClass.VirtualStoreProduct, file);
            return url;
        }

        public string GetVirtualStoreProduct(String imageName)
        {
            String url = _storageLink + ConfigClass.VirtualStoreProduct + "/" + imageName;
            return url;
        }

    }
}
