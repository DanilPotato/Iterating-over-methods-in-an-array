const people = [
	{
		name: 'Иван',
		age: 30,
		balance: 1000.5,
		friends: ['Мария', 'Алексей'],
		skills: ['JavaScript', 'HTML', 'CSS'],
	},
	{
		name: 'Мария',
		age: 25,
		balance: 1500.75,
		friends: ['Иван', 'Ольга', 'Сергей'],
		skills: ['JavaScript', 'React', 'Node.js'],
	},
	{
		name: 'Алексей',
		age: 35,
		balance: 2000.0,
		friends: ['Иван'],
		skills: ['Python', 'Django'],
	},
	{
		name: 'Ольга',
		age: 28,
		balance: 1200.2,
		friends: ['Мария', 'Павел'],
		skills: ['JavaScript', 'Angular'],
	},
	{
		name: 'Павел',
		age: 40,
		balance: 1800.6,
		friends: ['Алексей', 'Ольга', 'Наталья'],
		skills: ['Java', 'Spring'],
	},
	{
		name: 'Наталья',
		age: 22,
		balance: 950.3,
		friends: ['Сергей', 'Иван', 'Ольга'],
		skills: ['JavaScript', 'Ruby', 'Rails'],
	},
	{
		name: 'Сергей',
		age: 33,
		balance: 2100.9,
		friends: ['Наталья', 'Мария'],
		skills: ['PHP', 'Laravel'],
	},
]
// 1

const sumBalance = people.reduce((total, people) => total + people.balance, 0)

console.log(sumBalance)

// 2

const findFriend = (arr, friendName) => {
	return arr
		.filter(person => person.friends.includes(friendName))
		.map(person => person.name)
}

console.log(findFriend(people, 'Наталья'))

// 3

people.sort((a, b) => a.friends.length - b.friends.length)
const sortedNames = people.map(person => person.name)

console.log(sortedNames)

// 4

const allSkills = people.flatMap(person => person.skills)
const uniqueSkills = [...new Set(allSkills)]
const sortedSkills = uniqueSkills.sort()

console.log(sortedSkills)
