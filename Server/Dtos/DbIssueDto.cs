using Database.Entities;

namespace Server.Dtos;

public class DbIssueDto
{
    public int IssueId { get; set; }
    public string Title { get; set; } = null!;
    public DateTime Date { get; set; }
    public bool IsSolved { get; set; }
    public string Text { get; set; } = null!;
    public List<TagNameDto>? Tags { get; set; }
    public string? Username { get; set; }
}