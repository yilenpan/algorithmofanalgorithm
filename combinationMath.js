/////////////////////////////////////////////////////////////
// Combination Math
// -------------------------------
// Given a initial string of numbers, and a target, find the list of combinations
// of operators and numbers that equal the target.
//
// ex: comboSum('1234', 10) =>
//  ["1+2+3+4", "1*2*3+4"]
//
// extra credit:
// Don't use eval
//
/////////////////////////////////////////////////////////////

var mathMap = {
    '+': function(a, b) {
        return a + b
    },
    '*': function(a, b) {
        return a * b
    }
}

var evaluateInfix = function(str, operators) {
    return str.split('')
        .map(function(i) {
            return parseInt(i)
        })
        .reduce(function(prev, cur, index) {
            var stringOperator = operators[index - 1]
            return mathMap[stringOperator](prev, cur)
        })
}

var combinationMath = function(str, target, operators, result) {
    if (operators.length === str.length - 1) {
        if (evaluateInfix(str, operators) === target) {
            return str.split('')
                .map(function(value, index) {
                    if (operators[index]) {
                        return value += operators[index]
                    } else {
                        return value
                    }
                }).join('')
        }
	    return []
    }
    // all combinations of operators
    return result.concat(combinationMath(str, target, operators.concat('+'), result) , combinationMath(str, target, operators.concat('*'), result))
}

console.log(combinationMath('12345', 15, [], []))

module.exports = combinationMath;