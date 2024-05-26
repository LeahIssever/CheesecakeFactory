using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CheesecakeFactory.Data.Migrations
{
    /// <inheritdoc />
    public partial class Version3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CheesecakeOrders_Customers_CustomerId",
                table: "CheesecakeOrders");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_CheesecakeOrders_CustomerId",
                table: "CheesecakeOrders");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "CheesecakeOrders");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "CheesecakeOrders",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "CheesecakeOrders",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "CheesecakeOrders");

            migrationBuilder.DropColumn(
                name: "email",
                table: "CheesecakeOrders");

            migrationBuilder.AddColumn<int>(
                name: "CustomerId",
                table: "CheesecakeOrders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CheesecakeOrders_CustomerId",
                table: "CheesecakeOrders",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_CheesecakeOrders_Customers_CustomerId",
                table: "CheesecakeOrders",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
