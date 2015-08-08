# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

boards = Board.create([{name: 'Kitten'}, {name: "Chick"}, {name: "Horseling"}])

lists = List.create([{name: "head", board_id: 1, ord: 1}, {name: "body", board_id: 1, ord: 2}, {name: "tails", board_id: 1, ord: 3}])
