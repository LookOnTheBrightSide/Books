print "What's your first name?"
first_name.gets.chomp
print "lastname?"
last_name.gets.chomp
print "city"
city.gets.chomp
print "state"
state.gets.chomp

print "Integer please: "
user_num = Integer(gets.chomp)

if user_num < 0
  puts "You picked a negative integer!"
elsif user_num > 0
  puts "You picked a positive integer!"
else
  puts "You picked zero!"
end