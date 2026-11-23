const { groupBy, meanBy } = require('lodash')

let input = [
  { name: "Budi", role: "admin", age: 30 },
  { name: "Siti", role: "user", age: 20 },
  { name: "Andi", role: "admin", age: 25 },
  { name: "Rina", role: "user", age: 35 }
]

const analyzeUsers = (param) => {
    const groupedUser = groupBy(param, 'role')

    const result = {
        totalUsers: param.length,
        admin: groupedUser.admin.length,
        user: groupedUser.user.length,
        averageAge: meanBy(param, 'age')
    }

    return result
}

console.log(analyzeUsers(input))