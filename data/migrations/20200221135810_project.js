
exports.up = function(knex) {
  return (
      knex.schema
        .createTable("projects", tbl => {
            tbl.increments();

            tbl
                .text("name", 256)
                .notNullable()

            tbl.text("description", 256)

            tbl
                .boolean("completed")
                .notNullable()
        })

        .createTable("resources", tbl => {
            tbl.increments();

            tbl
                .text("name", 256)
                .notNullable()

            tbl.text("description", 256)
        })

        .createTable("tasks", tbl => {
            tbl.increments();

            tbl
                .text("description")
                .notNullable()

            tbl.text("notes")

            tbl
                .boolean("completed")
                .notNullable()
        })
  )
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
};