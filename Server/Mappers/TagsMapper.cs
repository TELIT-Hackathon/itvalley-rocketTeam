using Database.Context;
using Database.Entities;
using Database.Repositories;
using Server.Dtos;

namespace Server.Mappers;

public static class TagsMapper
{
    public static async Task<List<TagDto>> MapTagsDto()
    {
        var repository = new TagsRepository(DatabaseContext.Instance);
        var tags = await repository.GetTags();
        
        return tags.Select(tag => new TagDto() { Count = tag.Count, Name = tag.Name }).ToList();
    }
    
    
   /* public static async Task<List<Tag>> MapTags(List<TagNameDto> tagsDto)
    {
        var tags = new List<Tag>();

        foreach (var tagNameDto in tagsDto)
        {
            tags.Add(new Tag
            {
                Id = 0,
                Name = null,
                Count = 0
            });   
        }
        
        

        return 
    }
    */
}