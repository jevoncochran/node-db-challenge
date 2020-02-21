
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
                .defaultTo(false)
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

            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references('id')
                .inTable("projects")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")

            tbl.text("notes")

            tbl
                .boolean("completed")
                .defaultTo(false)
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
