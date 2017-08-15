using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Web.Areas.Questions.Models;
using Questions.Domain;

namespace AltaPerspectiva.Web.Areas.Questions.Services
{
    public class TopicService
    {
        public List<TopicViewModel> GetTopicViewModels(IEnumerable<Topic> topics)
        {
            List<TopicViewModel> topicViewModels=new List<TopicViewModel>();

            foreach (var topic in topics)
            {
                var topicViewModel = new TopicViewModel
                {
                    Id = topic.Id,
                    CategoryId = topic.CategoryId,
                    TopicName = topic.TopicName,
                    CategoryName = topic.Category.Name
                };

                var topicExists = topics.Any(x => x.TopicName == topicViewModel.TopicName && x.Id != topicViewModel.Id);

                if (topicExists)
                {
                    topicViewModel.TopicName = topic.TopicName + " (" + topic.Category.Name+")";
                }
                topicViewModels.Add(topicViewModel);
            }

            return topicViewModels;

        }
    }
}
