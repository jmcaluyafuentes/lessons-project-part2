const defaultConfig = { theme: 'light', notifications: true };
const userConfig1 = { ...defaultConfig, theme: 'dark' };
console.log(userConfig1)

const userConfig2 = {...defaultConfig, foo: 'bar'}
console.log(userConfig2)

const arr = [1, 2, 3]
const arrNew = [...arr, 4]
console.log(arrNew)