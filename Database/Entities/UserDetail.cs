namespace Database.Entities;

public class UserDetail
{
    public int Id { get; set; }
    public string Username { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Role { get; set; } = null!;
    public Tag[] Tags { get; set; } = null!;
    public int Icon { get; set; }
}